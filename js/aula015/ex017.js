let num = [1, 2, 3, 4, 5]
let valor
for(pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log('--------------')
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}