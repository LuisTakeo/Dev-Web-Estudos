function alteraArray(a){ // Como utiliza de referencia o mesmo espaço de memória, é alterado o array dentro da função
    a.push("Adicionado")
}

let arr1 = ["Teje"]
console.log(arr1)
alteraArray(arr1)
console.log(arr1)


function alteraPrimitivo(p){ //por ser primitivo, o valor só é alterado dentro da própria função
    p += " adicionado"
    console.log(`Dentro da função: ${p}`)
}

let msg = "mensagem"
console.log(`Antes da função: ${msg}`)
alteraPrimitivo(msg)
console.log(`Fora da função: ${msg}`)