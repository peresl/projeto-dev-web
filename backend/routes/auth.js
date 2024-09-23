const express = require('express');
const router = express.Router();
const { User } = require('../models/user'); // Mantenha ou remova conforme a necessidade

// Simulação de autenticação (deve ser substituída por autenticação real)
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    // Validação fictícia
    if (username === 'clebson' && password === 'ifpb') {
        return res.status(200).send();
    }
    
    return res.status(401).send({ message: 'Credenciais inválidas' });
});

module.exports = router;
