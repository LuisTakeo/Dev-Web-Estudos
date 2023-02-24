function aleatorio(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

const esperaAi = (msg, tempo) => {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof msg !== 'string'){ 
                reject(new Error("ERRO"));
                return;
            }

            console.log(`Aguarde`)
            resolve(`${msg}`);
        }, tempo);

    });
}

// esperaAi('Fase 1', aleatorio(1, 3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Fase 2', aleatorio(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Fase 3', aleatorio(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//     })
//     .catch(e => {
//         console.log(`Erro:`, e)
//     });


async function executa() {
    try {
        const fase1 = await esperaAi('Fase A', aleatorio());
        console.log('Terminamos na fase: ', fase1)
        
        const fase2 = await esperaAi(2, aleatorio());
        console.log('Terminamos na fase: ', fase2)
        
        const fase3 = await esperaAi('Fase C', aleatorio());
        console.log('Terminamos na fase: ', fase3)
    }catch(e) {
        console.log(e)
    }
}
executa();
