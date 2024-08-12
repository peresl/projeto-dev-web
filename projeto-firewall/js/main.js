function addRule() {
    // Obtém o elemento de entrada de texto onde o usuário digita a nova regra
    const ruleInput = document.getElementById('rule');
    
    // Obtém o valor da entrada e remove espaços em branco extras
    const newRule = ruleInput.value.trim();
    
    // Verifica se a nova regra não está vazia
    if (newRule) {
        // Adiciona a nova regra ao array de regras
        rules.push(newRule);
        
        // Limpa o campo de entrada de texto
        ruleInput.value = '';
        
        // Atualiza a tabela de regras para refletir a nova lista de regras
        renderRules();
    } else {
        // Exibe um alerta se o campo de entrada estiver vazio
        alert('Digite uma regra para adicionar.');
    }
}
