# Projeto de Login e Simulação de Firewall

Este projeto é uma aplicação web com duas partes principais:
1. **Página de Login:** Permite que os usuários façam login e sejam redirecionados para uma página de simulação de firewall.
2. **Simulação de Firewall:** Permite que os usuários adicionem e removam regras de firewall.

## Estrutura do Projeto

- `index.html` – Página de login.
- `iptables.html` – Página de simulação de firewall.
- `css/style.css` – Folha de estilo CSS para ambas as páginas.
- `js/loginMain.js` – Script principal para a página de login.
- `js/auth.js` – Funções de autenticação e manipulação de visibilidade da senha.
- `js/firewallFunctions.js` – Funções para a página de simulação de firewall.

## Requisitos

- Um servidor local (por exemplo, usando Node.js) para servir as páginas HTML e fornecer a API de autenticação.
- Conexão com a internet para carregar o ícone do Font Awesome.

## Configuração

1. **Instale as dependências do servidor local:**

   - Certifique-se de que o servidor local está configurado e executando na porta 3000.

2. **Configure o servidor local para servir as páginas HTML e fornecer a API de autenticação:**

   - A API deve responder a requisições `GET` na URL `http://localhost:3000/users?username=<username>&password=<password>` e retornar uma lista de usuários com base nas credenciais fornecidas.

## Uso

### Página de Login

1. **Acesse a Página de Login:**
   - Abra `index.html` em um navegador web.

2. **Faça Login:**
   - Insira o nome de usuário e a senha.
   - Clique no botão "Entrar".

3. **Visibilidade da Senha:**
   - Clique no ícone de olho para alternar a visibilidade da senha.

4. **Mensagem de Erro:**
   - Se as credenciais forem incorretas, uma mensagem de erro será exibida.

### Página de Simulação de Firewall

1. **Acesse a Página de Simulação de Firewall:**
   - Após um login bem-sucedido, você será redirecionado para `iptables.html`.

2. **Adicionar Regras:**
   - Selecione a tabela, a cadeia, a ação, o protocolo, a origem e o destino.
   - Clique em "Adicionar Regra" para adicionar uma regra à lista.

3. **Limpar Regras:**
   - Clique em "Limpar Regras" para remover todas as regras da lista.

## Arquivos e Scripts

- **`index.html`** – Estrutura HTML da página de login.
- **`iptables.html`** – Estrutura HTML da página de simulação de firewall.
- **`css/style.css`** – Folha de estilo CSS para estilizar as páginas.
- **`js/loginMain.js`** – Script para a funcionalidade de login e manipulação da visibilidade da senha.
- **`js/auth.js`** – Funções de autenticação e manipulação da visibilidade da senha.
- **`js/firewallFunctions.js`** – Funções para adicionar, remover e verificar regras de firewall.

## Contribuições

Se você deseja contribuir para este projeto, sinta-se à vontade para enviar pull requests ou relatar problemas. 

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

Sinta-se à vontade para ajustar este README conforme necessário para refletir qualquer outra configuração específica do projeto ou detalhes adicionais que você deseja incluir.
