const cortaPalavras = (frase) =>{
    console.log(`Frase inteira: ${frase}`)
    const palavrasArray = frase.trim().split(" ")
    const primeiraPalavra = {}

    for(let i of palavrasArray){
        const primeiraLetra = i[0]
//        console.log(primeiraLetra) (utilizei só pra conferir qual era a primeira letra)
        if(primeiraPalavra[primeiraLetra]){
            primeiraPalavra[primeiraLetra]++
            console.log(primeiraPalavra[primeiraLetra])
        }else{
            primeiraPalavra[primeiraLetra] = 1
        }
    }
    return primeiraPalavra
}

console.log(cortaPalavras("morango maria mole molenga"))


const cortaPalavras2 = (frase) =>{
    console.log(`Frase inteira: ${frase}`)
    const palavrasArray = frase.trim().split(" ")
    const primeiraPalavra2 = {}
    for(let i of palavrasArray){
        primeiraPalavra2[i.slice(0, 1)] = 0
    }
    
    for(let i of palavrasArray){
        primeiraPalavra2[i.slice(0, 1)] += 1
    }
    
    return primeiraPalavra2
}

console.log(cortaPalavras2("Você gosta mais de estudar ou de batata?"))


