let amigo = {nome: 'Kauan', 
sexo: 'Masculino', 
peso: 92,
engordar(p=0){
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)