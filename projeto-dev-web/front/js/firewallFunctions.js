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
