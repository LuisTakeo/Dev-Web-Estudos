function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}


const esperaAi = (msg, tempo, cb) => {
    console.log(`${msg} está assando, aguarde.`)
    setTimeout(() => {
        console.log(`${msg} está pronto!`);
        if(cb) cb();
    }, tempo);
}

// no caso, o problema aqui seria que teria que aguardar o primeiro serviço ser feito para
// o segundo serviço ser feito

// esperaAi('Bolo', aleatorio(1, 3), function () {
//     esperaAi('Coxinha', aleatorio(1, 3))
// });
// esperaAi('Pizza', aleatorio(1, 3));
// esperaAi('Pão de queijo', aleatorio(1, 3));

const esperaAi2 = (msg, tempo) => {
    
    return new Promise((resolve, reject) => {
        
        if(typeof msg !== 'string') reject(new Error("ERRO"));

        setTimeout(() => {
            console.log(`Aguarde`)
            resolve(`${msg}`);
        }, tempo);

    });
}
// utilizamos promises quando vamos utilizar alguma coisa assincrona
// sincrono
esperaAi2('Conexão com o BD', aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi2(11, aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi2('Tratando dados da BASE', aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe os dados na tela.')
    })
    .catch(e => {
        console.log(`Erro:`, e)
    });

console.log('Isso será exibido primeiro antes de qualquer promise')