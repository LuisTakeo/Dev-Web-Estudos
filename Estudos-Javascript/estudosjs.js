const dobro = x => x * 2;
const triplo = valor => valor * 3;
const isPar = valor => valor % 2 == 0;

const arrayBase = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayModificado = arrayBase
    .filter(isPar)
    .map(dobro)
    .map(triplo)
    .map(triplo)
    .map(triplo)
    .map(triplo)
    .reduce((acc, valoratual) => dobro(acc, valoratual))
    

console.log(arrayModificado)

let texto = "Bolo".match("B").filter(letra => letra == "B").toString()

console.log(texto)


