// const funcoes = require('./funcoesAuxiliares');

const { qtdPessoas, gets , print } = require('./funcoesAuxiliares');


const numerosSorteados = []
for(let i = 0; i < qtdPessoas; i++){
    numerosSorteados.push(gets());
}

const maiorValor = numerosSorteados.reduce((maiorValor, valorNovo) => {
    if(valorNovo > maiorValor){
        return valorNovo;
    }else{
        return maiorValor;
    }
}, 0)

print(qtdPessoas)

print(`O maior valor dos sorteados é ${maiorValor}`)
