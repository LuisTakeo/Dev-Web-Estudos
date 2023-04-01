const conjuntoSorteio = [ 5, 50, 10, 98, 23 ];
const qtdPessoas = conjuntoSorteio.length;

function gets() {
    if(conjuntoSorteio.length > 0){
        return conjuntoSorteio.shift();
    }else{
        return "acabou os números";
    }
    
}

function print(texto) {
    console.log(texto);
}
// outro jeito de exportar
//module.exports.gets = gets;

module.exports = { qtdPessoas, gets, print };