let numTabela = [];
let soma = 0; // Inicializa a variável soma

function adicionar() {
    let numero = document.getElementById('numero');
    let tabela = document.getElementById('tabela');
    let num = Number(numero.value);

    if (numero.value.length === 0) {
        window.alert('[ERRO] Digite um número');
    } else if (num < 1 || num > 100) {
        window.alert('[ERRO] O número deve estar entre 1 e 100');
    } else {
        numTabela.push(num);
        soma += num; // Soma o novo número ao total

        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado`;
        tabela.appendChild(item);
    }
    
    numero.value = '';
    numero.focus();
}

function finalizar() {
    let resultado = document.getElementById('resultado');
    
    if (numTabela.length === 0) {
        resultado.innerHTML = '[ERRO] Nenhum número foi adicionado';
    } else {
        let menor = Math.min(...numTabela);
        let maior = Math.max(...numTabela);
        let total = soma / numTabela.length
        resultado.innerHTML = `
            Ao todo, temos ${numTabela.length} números cadastrados <br>
            O menor número é ${menor} <br>
            O maior número é ${maior} <br>
            A soma é ${soma}<br>
            A media é ${total}`;
    }
}