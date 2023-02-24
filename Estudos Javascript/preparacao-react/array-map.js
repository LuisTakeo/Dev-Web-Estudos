const numeros = [1, 2, 4, 50, 3, 12, 55, 25, 8, 6, 9];
const numerosDobrados = numeros.map(numero => numero * 2);

console.log(numerosDobrados);

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 21 },
    {nome: 'Eduardo', idade: 15 },
    {nome: 'Leticia', idade: 32 },
    {nome: 'Rosana', idade: 44 },
    {nome: 'Wallace', idade: 16 },
    {nome: 'Oswaldo', idade: 72 },
]

const nomesPessoas = pessoas.map(pessoa => pessoa.nome)
const idades = pessoas.map(pessoa => ({ idade: pessoa.idade }))

const comIds = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = (indice + 1);
    return newObj;
})
console.log('sem IDs')
console.log(pessoas)
console.log(nomesPessoas)
console.log(idades)
console.log(comIds)
