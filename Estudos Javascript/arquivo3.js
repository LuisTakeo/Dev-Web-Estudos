let frutas = ["maçã", "laranja", "pera", "banana"]
let pessoas = {nome: "Takeo", idade: 31, sexo: "Masculino", maiorDeIdade: true}


for(let i of frutas){//o for of pega o conteudo do indice, contudo não funciona em objetos, pois não são iteraveis
    console.log(i)
}

for(let i in pessoas){//o for in pega o indice e funciona tanto em objetos, quando em arrays
    console.log(i)
}