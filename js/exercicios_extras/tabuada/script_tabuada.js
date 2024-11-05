function calcular(){
    let numero = document.getElementById('numero')
    let tabela = document.getElementById('tabuada')

    if(numero.value.length == 0){
        window.alert('Por favor, digite um numero')
    }else{
        let num = Number(numero.value)
        let c = 1
        tabela.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tabela.appendChild(item)
            c++
        }
    }
}