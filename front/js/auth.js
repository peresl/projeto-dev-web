// auth.js
export async function authenticate(username, password) {
    const response = await fetch(`/users?username=${username}&password=${password}`);
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
        togglePasswordBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        togglePasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

export function updateChains() {
    const table = document.getElementById('table').value;
    const chainSelect = document.getElementById('chain');

    const chainsByTable = {
        filter: ['INPUT', 'FORWARD', 'OUTPUT'],
        nat: ['PREROUTING', 'OUTPUT', 'POSTROUTING'],
        mangle: ['PREROUTING', 'INPUT', 'OUTPUT', 'FORWARD', 'POSTROUTING'],
        raw: ['PREROUTING', 'OUTPUT']
    };

    chainSelect.innerHTML = '';

    chainsByTable[table].forEach(chain => {
        const option = document.createElement('option');
        option.value = chain;
        option.textContent = chain;
        chainSelect.appendChild(option);
    });
}

export function addRule() {
    const table = document.getElementById('table').value;
    const chain = document.getElementById('chain').value;
    const action = document.getElementById('action').value;
    const protocol = document.getElementById('protocol').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;

    const rule = `${table} ${chain} ${action} ${protocol} ${source} ${destination}`;

    if (ruleExists(rule)) {
        alert('Essa regra já existe!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = rule;
    document.getElementById('rulesList').appendChild(listItem);
}

export function clearRules() {
    document.getElementById('rulesList').innerHTML = '';
}

function ruleExists(rule) {
    const rulesList = document.getElementById('rulesList').getElementsByTagName('li');
    for (let i = 0; i < rulesList.length; i++) {
        if (rulesList[i].textContent === rule) {
            return true;
        }
    }
    return false;
}

import { updateChains, addRule, clearRules } from './firewallMain.js';

document.addEventListener('DOMContentLoaded', function() {
    updateChains();
    document.getElementById('table').addEventListener('change', updateChains);
    document.getElementById('addRuleBtn').addEventListener('click', addRule);
    document.getElementById('clearRulesBtn').addEventListener('click', clearRules);
});