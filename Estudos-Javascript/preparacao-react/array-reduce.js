const numeros = [1, 2, 4, 50, 3, 12, 55, 25, 8, 6, 9];



const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 21 },
    {nome: 'Eduardo', idade: 15 },
    {nome: 'Leticia', idade: 32 },
    {nome: 'Rosana', idade: 44 },
    {nome: 'Wallace', idade: 16 },
    {nome: 'Oswaldo', idade: 72 },
]


const total = numeros.reduce((acumulador, valor) => acumulador + valor, 0)

console.log(total);

const maisVelha = pessoas.reduce((acumulador, pessoa) => 
    acumulador.idade > pessoa.idade ? acumulador : pessoa
);
console.log(maisVelha)