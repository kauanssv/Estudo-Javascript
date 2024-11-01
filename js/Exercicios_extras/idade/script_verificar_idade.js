function verificar(){
    //busca
    var nascimento = document.getElementById('ano_nasc')
    var resultado = document.getElementById('resultado')
    var data = new Date()
    var ano = data.getFullYear()
    //converção
    var nasc = Number(nascimento.value)

    //codigo
    if(nasc == 0 || nasc > ano){
        window.alert('[ERRO] Verifique os dados')
    }else{
        var idade = ano - nasc
        var genero = document.getElementsByName('genero')
        var generos = ''
        var img = document.createElement('img') //Criando imagem pelo javascript
        img.setAttribute('id', 'foto') //Colocando uma id na imagem
        if(genero[0].checked){
            generos = 'Homem'
            if(idade > 0 && idade <= 11){
                //Criança
                img.setAttribute('src', '../../../src/images/homem_crianca.png')
            }else if(idade >= 12 && idade < 18){
                //Adolescente
                img.setAttribute('src', '../../../src/images/homem_adolescente.png')
            }else{
                //Adulto
                img.setAttribute('src', '../../../src/images/homem_adulto.png')
            }
        }else if(genero[1].checked){
            generos = 'Mulher'
            if(idade > 0 && idade <= 11){
                //Criança
                img.setAttribute('src', '../../../src/images/mulher_crianca.png')
            }else if(idade >= 12 && idade < 18){
                //Adolescente
                img.setAttribute('src', '../../../src/images/mulher_adolescente.png')
            }else{
                //Adulto
                img.setAttribute('src', '../../../src/images/mulher_adulta.png')
            }
        }
        resultado.innerHTML = `Você é um(a) ${generos} com ${idade} anos de idade!`
        resultado.appendChild(img)
    }
    
    

    
}