var idade = 67
console.log(`Voce tem ${idade} anos.`)
if(idade < 16){
    console.log('Menor de idade')
}else if(idade <= 17 || idade >= 65){
    console.log('Voto opcional')
}else{
    console.log('Voto Obrigatorio')
}