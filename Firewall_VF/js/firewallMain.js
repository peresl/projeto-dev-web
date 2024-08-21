import { updateChains, addRule, clearRules } from './firewallFunctions.js';

document.addEventListener('DOMContentLoaded', function() {
    updateChains();
    document.getElementById('table').addEventListener('change', updateChains);
    document.getElementById('addRuleBtn').addEventListener('click', addRule);
    document.getElementById('clearRulesBtn').addEventListener('click', clearRules);
});
