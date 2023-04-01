const pessoas = [
    {
        nome: "Takeo",
        idade: 31
    },
    {
        nome: "Maria",
        idade: 28
    },
    {
        nome: "João",
        idade: 65
    },
    {
        nome: "Helena",
        idade: 45
    },
]

console.log(pessoas)
console.log(pessoas[0])
console.log("")
console.log("Passando pelos objetos nos arrays usando repetição: ")
console.log("")
console.log("Utilizando o for of: ")
for(let prop of pessoas){//utilizando o for of
    
    for(let x in prop){//um segundo for, sendo for in pois objetos não são iteraveis com o for of
        console.log(`${x}: ${prop[x]}`)
    }

    console.log(`${prop.nome} tem ${prop.idade} anos`)
    console.log("")
    
}
console.log("Utilizando o for in: ")
console.log("")
for(let prop in pessoas){//passando pelos objetos dentro de array com o for in
    for(let i in pessoas[prop]){
        console.log(`${i}: ${pessoas[prop][i]} `)//(utilizando um segundo for in)
    }
    console.log(`${pessoas[prop].nome} tem ${pessoas[prop].idade} anos`)//(utilizando pessoas[].idade)
    console.log("")
}