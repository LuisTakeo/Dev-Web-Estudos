const pessoa = {
    nome: 'Luis',
    sobrenome: 'Takeo',
    idade: 31,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
const { nome = 'Não informado', sobrenome = 'Não informado', idade = 'Não informado' } = pessoa;
const { nome: outroNome = 'outroNome', endereco: {rua, numero}, endereco } = pessoa;
console.log(nome, sobrenome, idade);
console.log(outroNome);
console.log(rua, numero, endereco);

const { nome: nome2 = 'Não informado', sobrenome: sobrenome2 = 'Não informado', ...resto } = pessoa;
console.log(nome2, sobrenome2, resto)