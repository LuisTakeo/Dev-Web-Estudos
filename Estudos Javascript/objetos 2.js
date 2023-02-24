const produto = {
    nome: "Caneta",
    Qtd: 10,
    
    comprar(n){ //sintaxe mais enxuta de função dentro de objeto
        // console.log(this)
        if(n > this.Qtd){
            return "Quantidade não disponivel"
        }else{
            return this.Qtd -= n
        }
    },
    teste: () => {//o this numa arrow function não chama o objeto que ela está dentro
        console.log("Teste")
        // console.log(this)
    }

    
}

console.log(produto.toString())
console.log(produto.comprar(3))
console.log(produto.comprar(3))

console.log(produto.comprar(3))
console.log(produto.comprar(3))

console.log(produto.comprar(3))



