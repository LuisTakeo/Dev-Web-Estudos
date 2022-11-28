function soma(a){ //currying é um jeito de aproveitar uma variavel utilizada mais de uma vez para ser distribuida em pequenas funções
    return function(b){
        console.log(`${a}\n+ \n${b}`)
        return a + b;
    }
}

let soma2 = soma(2)

console.log(soma2(2));

function multi(x){
    return function(y){
        return x * y
    }
}
function tabuada(){
    for(let x = 1; x <= 10; x++){
        console.log(`\ntabuada do ${x}`);
        for(let y = 1; y <= 10; y++){
            let multi2 = multi(x)
            console.log(`${x} * ${y} = ${multi2(y)}`)
        }
    }
}

function tabuadaEscolha(x){
    for(let y = 1; y <= 10; y++){
        let multi2 = multi(x)
        console.log(`${x} * ${y} = ${multi2(y)}`)
    }
}

let x = Number("!!") // Lembrete: vou criar uma pagina com um botão que vai receber um valor, calcular uma tabuada e jogar na tela
if(x === Number(x)){
    tabuadaEscolha(x)
}else{
    console.log("Não é um número.")
}

//tabuada()