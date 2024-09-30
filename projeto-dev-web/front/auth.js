// auth.js
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        console.log('Status da resposta:', response.status); // Log do status da respost

        if (response.ok) {
            // Redireciona para iptables.html se o login for bem-sucedido
            window.location.href = 'iptables.html';
        } else {
            // Exibe um alerta se o login falhar
            alert('Usuário ou senha inválidos!');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
    }
});
