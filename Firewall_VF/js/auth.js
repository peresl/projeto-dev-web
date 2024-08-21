// auth.js
export async function authenticate(username, password) {
    const response = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`);
    const users = await response.json();
    return users.length > 0;  // Retorna true se encontrar o usuário
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

    // Define o ícone com base no tipo do input de senha
    if (passwordField.getAttribute('type') === 'password') {
        togglePasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
    } else {
        togglePasswordBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
}
