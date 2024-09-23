// Exemplo simples de modelo de usuário
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password; // Senha deve ser hasheada em produção
    }
}

module.exports = { User };
