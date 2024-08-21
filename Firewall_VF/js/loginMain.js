// loginMain.js
import { authenticate, togglePasswordVisibility } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o evento de clique para alternar a visibilidade da senha
    document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);
    
    // Adiciona o evento de submissão do formulário de login
    document.getElementById('loginForm').addEventListener('submit', async function(event) {
        event.preventDefault();  // Previne o envio padrão do formulário
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const isAuthenticated = await authenticate(username, password);
        
        if (isAuthenticated) {
            // Redireciona para a página de Simulação Firewall após login bem-sucedido
            window.location.href = '/Firewall_VF/iptables.html';
        } else {
            // Exibe uma mensagem de erro se as credenciais forem inválidas
            document.getElementById('error-message').textContent = 'Usuário ou senha incorretos';
        }
    });
    
    // Define o ícone correto ao carregar a página
    togglePasswordVisibility();  // Inicializa o ícone
});
