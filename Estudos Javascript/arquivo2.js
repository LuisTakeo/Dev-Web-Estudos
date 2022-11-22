var lista = ["Maçã", "pera", "laranja"];
lista.push("uva");//push acrescenta mais um item ao array
lista.pop()//pop retira o último item do array

console.log(lista);
console.log(lista.reverse());//le a lista de tras pra frente
console.log(lista.toString());//transforma em string
console.log(lista.join(" - "));//adiciona o que quisermos entre os elementos

var fruta = [//array
    {nome: "Maçã", cor: "Vermelha"},//objetos dentro de arrays
    {nome: "Pera", cor: "Verde"}
]

console.log(fruta[0].nome)


var idade = 18;
if(idade >= 18){
    console.log(`Você tem ${idade} anos, por isso é maior de idade`);
}else{
    console.log(`Você tem ${idade} anos, por isso é menor de idade`);
}

var count = 0

while(count <= 5){
    console.log(`Estrutura de repetição white. Contando ${count}`)
    count++
}

for(let count2 = 0; count2 <= 5; count2++){
    console.log(`Estrutura de repetição for. Contando ${count2}`)
}

var data = new Date();//Date é uma função aonde é possível acessar a data local 
console.log(data);
console.log(data.getDay());
console.log(data.getFullYear());
console.log(data.getHours());

