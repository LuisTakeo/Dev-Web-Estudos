function calculadora(){
    const operacao = Number(prompt("Calculadora. Escolha uma operação: \n1 para soma (+)\n2 para subtração (-)\n3 para multiplicação (*)\n4 para divisão real (/) \n5 para divisão inteira (%)\n6 para potenciação"))
    decideCalculo(operacao)
}

decideCalculo = (operacao) => {
    switch(operacao){
        case 1:
            soma();
            break
        case 2:
            subtracao();
            break;
        case 3:
            multi();
            break;
        case 4:
            divisaoR();
            break;
        case 5:
            divisaoI();
            break;
        case 6:
            potenciacao();
            break;
        
    }
}

soma = () => {
    let n1, n2;
    n1 = Number(prompt("Insira um valor"))
    n2 = Number(prompt("Insira um segundo valor"))
    let res = n1 + n2
    alert(`O resultado da soma de ${n1} + ${n2} é de ${res}`)
    
}
subtracao = () => {
    let n1, n2;
    n1 = Number(prompt("Insira um valor"))
    n2 = Number(prompt("Insira um segundo valor"))
    let res = n1 - n2
    alert(`O resultado da subtração de ${n1} - ${n2} é de ${res}`)
}
multi = () => {
    let n1, n2;
    n1 = Number(prompt("Insira um valor"))
    n2 = Number(prompt("Insira um segundo valor"))
    let res = n1 * n2
    alert(`O resultado da multiplicação de ${n1} * ${n2} é de ${res}`)
}
divisaoR = () => {
    let n1, n2;
    n1 = Number(prompt("Insira um valor"))
    n2 = Number(prompt("Insira um segundo valor"))
    let res = n1 / n2
    alert(`O resultado da divisão real de ${n1} / ${n2} é de ${res}`)
}
divisaoI = () => {
    let n1, n2;
    n1 = Number(prompt("Insira um valor"))
    n2 = Number(prompt("Insira um segundo valor"))
    let res = n1 % n2
    alert(`O resultado da divisão inteira de ${n1} % ${n2} é de ${res}`)
}
potenciacao = () => {
    let n1, n2;
    n1 = Number(prompt("Insira um valor"))
    n2 = Number(prompt("Insira um segundo valor"))
    let res = n1 ** n2
    alert(`O resultado da de ${n1} a ${n2} potencia é de ${res}`)
}


calculadora()