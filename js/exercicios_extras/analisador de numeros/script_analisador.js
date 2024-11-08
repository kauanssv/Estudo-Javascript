function calcular(){
    var nInicio = document.getElementById('numero_inicio')
    var nFim = document.getElementById('numero_fim')
    var nPassos = document.getElementById('numero_passos')
    var resultado = document.getElementById('resultado')
    //CONVERTER

    var inicio = Number(nInicio.value)
    var fim = Number(nFim.value)
    var passos = Number(nPassos.value)

    //CODIGO

    resultado.innerHTML = `` //Limpar linha do resultado

    if(passos, inicio, fim == 0){
        window.alert('ERRO')
    }else{
        if(inicio < fim){
            while(inicio < fim){
                resultado.innerHTML += `${inicio}👉`
                inicio = inicio + passos;
            }
        }else{
            while(inicio > fim){
                resultado.innerHTML += `${inicio}👉`
                inicio = inicio - passos;
            }
        }
        resultado.innerHTML += `${inicio}👉👍`        
    }
    

    

}