// Filter vai sempre retornar o array com a mesma quantidade de elementos ou menos

const numeros = [1, 2, 4, 50, 3, 12, 55, 25, 8, 6, 9]
const maiorQueDez = numeros.filter(function(valor) {
    return valor > 10;
})
const maiorQueCinco = numeros.filter(valor => valor > 5)
const menorQueDez = numeros.filter((valor /*, indice, array*/) => {
    //console.log(valor, indice, array)
    return valor < 10
})


console.log(maiorQueDez)
console.log(maiorQueCinco)


const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 21 },
    {nome: 'Eduardo', idade: 15 },
    {nome: 'Leticia', idade: 32 },
    {nome: 'Rosana', idade: 44 },
    {nome: 'Wallace', idade: 16 },
    {nome: 'Oswaldo', idade: 72 },
]

const pessoasNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 5)

console.log(pessoasNomeGrande)

const pessoasMaiorIdade = pessoas.filter(pessoa => pessoa.idade >= 18 )
const pessoasMenorIdade = pessoas.filter(pessoa => pessoa.idade < 18 )
const pessoasIdosas = pessoas.filter(pessoa => pessoa.idade >= 60 )

console.log(`Maiores de 18: `)
console.log(pessoasMaiorIdade)
console.log(`Maiores de 18: `)
console.log(pessoasMenorIdade)
console.log(`Idosos: `)
console.log(pessoasIdosas)