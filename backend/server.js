const express = require('express');
const path = require('path');
const config = require('./config.json'); 
const authRoutes = require('./routes/auth'); // Importar as rotas de autenticação
const app = express();

app.use(express.json()); // Middleware para analisar corpos JSON
app.use(express.static(path.join(__dirname, '../front'))); // Servir arquivos estáticos

// Usar as rotas de autenticação
app.use('/api', authRoutes); // Prefixar rotas com /api

const PORT = config.server.port;

// Rota raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
