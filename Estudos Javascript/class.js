class Pessoa {
    
    #nome  = "nome";
    #sobrenome;
    #idade;
    #sexo;
    #nacionalidade;
    
    constructor(nome = "nome", sobrenome = "sobrenome", idade = 0, sexo = "sexo", nacionalidade = "Brasileiro"){
        this.#nome = nome,
        this.#sobrenome = sobrenome,
        this.#idade = idade,
        this.#sexo = sexo,
        this.#nacionalidade = nacionalidade
    }

    getNome(){
        return this.#nome;
    }
    getSobrenome(){
        return this.#sobrenome;
    }

    getIdade(){
        return this.#idade;
    }


    nomeCompleto(){
        if(this.#nome != "nome" && this.#sobrenome != "sobrenome"){
            return `${this.#nome} ${this.#sobrenome}`
        }
    }

}
//////////////////////////////////////////////

class Funcionario extends Pessoa {
    #funcao
    #periodoTrabalho

    constructor(nome, funcao, periodoTrabalho){
        super(nome)
        this.#funcao = funcao
        this.#periodoTrabalho = periodoTrabalho

    }

    getInfoFuncionario(){
        return `${this.getNome()} trabalha de ${this.#funcao} no periodo ${this.#periodoTrabalho}`
    }

}
////////////////////////////////////////////////

const operario = new Funcionario("João", "Front End", "Noturno")
console.log(operario.getNome())
console.log(operario.getInfoFuncionario())



const luis = new Pessoa("Luis Henrique Takeo", "Paim Yuahasi", 31, "Masculino", "Brasileiro")
const pessoa2 = new Pessoa("Edith", "Granja")
console.log(pessoa2.nomeCompleto())

console.log(luis)
console.log(`Meu nome completo é ${luis.nomeCompleto()}`)

console.log(luis.toString())
console.log(Pessoa.toString())



// class User {
//     constructor(nome, idade, endereco = {rua, numero}){
//         this.nome = nome,
//         this.idade = idade,
//         this.endereco = endereco
//     }
// }


// let meuEnd = {rua: "Carlo Albacini", numero: 106}

// const userTakeo =new User("Luis Henrique Takeo", 31, meuEnd)
// let {nome, ...rest} = userTakeo

// const {endereco} = userTakeo

// document.getElementById("stringfy").innerText = JSON.stringify(rest)

// console.log(nome)
// console.log(endereco)

// const carro = {}


// carro.marca = "Citroen"
// carro.ano = 2005
// carro.modelo = "C3"
// const {marca, ano, modelo} = carro 

// console.log(marca)