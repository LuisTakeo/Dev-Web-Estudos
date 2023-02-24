const numeros = [-1, 50, 12, -111, 22, 30]

function filtraNumeros(array, callback){
    const novoArray = array.filter(numero => callback(numero))
    return novoArray
}

const numerosPositivos = filtraNumeros(numeros, 
    (numero) => numero >= 0);

const numerosNegativos = filtraNumeros(numeros, (numero) => numero < 0)

console.log(numerosPositivos)
console.log(numerosNegativos)

// const numeroPar = (numero) => numero % 2 == 0; 
//assim retorna o valor numerico para filter, mas retorna true se chamado individualmente


const numeroPar = (numero) => {
    if(numero % 2 == 0) return numero;
};

console.log(numeroPar(2))

const numerosPares = filtraNumeros(numeros, numeroPar)
console.log(numerosPares)