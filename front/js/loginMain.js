import { authenticate, togglePasswordVisibility } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);
    
    document.getElementById('loginForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const isAuthenticated = await authenticate(username, password);
        
        if (isAuthenticated) {
            window.location.href = './iptables.html';
        } else {
            document.getElementById('error-message').textContent = 'Usuário ou senha incorretos';
        }
    });

    togglePasswordVisibility();
});
