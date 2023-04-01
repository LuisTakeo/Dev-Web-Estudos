class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }

}

const p1 = new Pessoa('Takeo', 'Yuahasi')


function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)
}//não funciona com arrow function

const p2 = new Pessoa2('Edith', 'Granja')
p1.falar()
p2.falar()