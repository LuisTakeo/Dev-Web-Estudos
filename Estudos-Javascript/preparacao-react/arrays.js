let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A


console.log(a, b, c);

[a, b, c] = [b, c, a];

console.log(a, b, c);

// ... rest, ... spread
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [um, , tres, , cinco, , sete, ...resto] = numeros;
console.log(um, tres, cinco);


//
const numeros2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] 
];
const [,[,,seis]] = numeros2;
const [lista1, lista2, lista3] = numeros2;
console.log(numeros2[1][2]);
console.log(seis);
console.log(lista1, lista2, lista3)

