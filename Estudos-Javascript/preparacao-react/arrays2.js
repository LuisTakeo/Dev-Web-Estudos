// filter, map e reduce

const numeros = [1, 2, 4, 50, 3, 12, 55, 25, 8, 6, 9];


const totalsomadobropar = numeros
    .filter(numero => numero % 2 == 0)
    .map(numero => numero * 2)
    .reduce((total, numero) => total += numero);

console.log(totalsomadobropar);

// for each
let total = 0
numeros.forEach(valor => total += valor)
console.log(total)