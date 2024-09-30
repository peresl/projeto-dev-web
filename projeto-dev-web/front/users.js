// Exemplo simples de como consumir a rota para obter usuários no frontend
async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/login/users');
        const users = await response.json();
        console.log(users); // Aqui você pode renderizar a lista de usuários no frontend
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
}

// Chame a função para listar os usuários
getUsers();
