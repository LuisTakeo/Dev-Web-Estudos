function fn(){//hoisting de variavel, ele não retorna erro, retorna como undefined
    console.log(text);

    var text = "Exemplo";

    console.log(text)
}

fn()

function fn2(){//hoisting de variavel declarado antes
    var text;
    console.log(text);

    var text = "Exemplo";

    console.log(text)
}

fn2()


function fn3(){
    function log(value) {//é sempre uma boa prática sempre declarar a função antes de usar
        console.log(value);
    }

    log("Hoisting de função")   
}

fn3();