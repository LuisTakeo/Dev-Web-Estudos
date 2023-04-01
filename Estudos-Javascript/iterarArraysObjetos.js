const pessoas = [
    {
        nome: "João",
        idade: 18
    },
    {
        nome: "Maria",
        idade: 35
    },
    {
        nome: "Chicão",
        idade: 95
    }
]

for(let i of pessoas){
    console.log(`${i.nome} tem ${i.idade} anos`)
}
console.log(" ")

for(let i in pessoas){
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos`)
}