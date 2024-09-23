export async function authenticate(username, password) {
    console.log(`Tentando autenticar: ${username}, ${password}`); // Log das credenciais
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    console.log(`Resposta do servidor: ${response.status}`); // Log da resposta
    return response.ok; // Retorna true se a resposta for 200
}


export function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    updateTogglePasswordIcon();
}

function updateTogglePasswordIcon() {
    const passwordField = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');

    togglePasswordBtn.innerHTML = passwordField.getAttribute('type') === 'password' ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
}

// Evento para o formulário de login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Impedir o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const isAuthenticated = await authenticate(username, password);
    
    if (isAuthenticated) {
        alert('Login bem-sucedido!');
        // Redirecionar ou executar outras ações
    } else {
        alert('Falha no login. Verifique suas credenciais.');
    }
});
