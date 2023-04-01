
const menorPalavra = (str) => {
    const palavrasArray = str.trim().split(" ")
    console.log(palavrasArray)

    let menor = palavrasArray[0]
    console.log(menor)
    for(let i of palavrasArray){
        if(i.length < menor.length){
            menor = i
        }
    }
    console.log(menor)
}

menorPalavra("Bolo de cenoura bolo de abacaxi")
