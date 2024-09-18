const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'front')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar o banco de dados SQLite
const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Criar tabela de usuários e adicionar usuários
const users = [
    { username: 'clebson', password: 'flamengo' },
    { username: 'jardson', password: 'mimi' },
];

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    `);

    users.forEach(({ username, password }) => {
        db.run('INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)', [username, password]);
    });
});

// API para autenticação
app.get('/users', (req, res) => {
    const { username, password } = req.query;
    db.all('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// Rota para visualizar todos os usuários
app.get('/view-users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});


// Servir a página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
