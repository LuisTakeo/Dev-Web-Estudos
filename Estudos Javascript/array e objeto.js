const arr = new Array()//jeito formal de declarar array
const arr2 = new Array(true, "Takeo", 31, new Array(2, 4, 10))
console.log(arr2)
console.log(arr2[3][arr2[3].length - 1])

const arr3 = ["Takeo", 31, [3, 6, 9], true]//jeito literal de declarar array


const pessoa = new Object()//jeito formal de declarar objeto
pessoa.nome = "Takeo"
pessoa.idade = 31
console.log(pessoa)
let prop = "nome"
console.log(pessoa[prop])
console.log(pessoa["idade"])

const pessoa2 = {//jeito literal de declarar objeto
    nome: "Takeo",
    idade: 31
}
console.log(pessoa2)
console.log(pessoa2[prop])
console.log(pessoa2["idade"])

//arrays 2

const nomes = ["João", "Maria", "José", "Helena"]

for(let i = 0; i < nomes.length; i++){
    console.log(`${i}: Nome é ${nomes[i]}`)
}

//objetos 2

const pessoa3 = {
    nome: "Maria",
    idade: 28,
    "email": "ela@server.com"
}

console.log(pessoa3)

for(let prop in pessoa3){
    console.log(prop)//vai mostrar o nome da propriedade
    console.log(pessoa3[prop])
}

