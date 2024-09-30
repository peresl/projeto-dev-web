// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Rota para listar todos os usuários
router.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).send('Erro no servidor');
    }
});

// Rota de login
router.post('/', async (req, res) => { // Note que removi '/login' daqui
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { username: username },
        });
        console.log('Usuário encontrado:', user); // Log para verificar o usuário encontrado

        if (user && user.password === password) {
            return res.status(200).send('Login bem-sucedido');
        } else {
            return res.status(401).send('Usuário ou senha inválidos');
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro no servidor');
    }
});

module.exports = router;
