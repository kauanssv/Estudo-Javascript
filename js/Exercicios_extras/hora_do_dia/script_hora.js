function carregar(){
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    mensagem.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <= 11){
        //Bom dia
        imagem.src = '../../../src/images/manha.png'
        document.body.style.background = 'rgb(190, 189, 186)'
    }else if(hora >= 12 && hora <= 19){
        //Boa tarde
        imagem.src = '../../../src/images/tarde.png'
        document.body.style.background = 'rgb(139, 138, 135)'
    }else{
        //Boa noite
        imagem.src = '../../../src/images/noite.png'
        document.body.style.background = 'rgb(77, 76, 74)'
    }
}