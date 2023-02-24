function teste() {
    console.log('Esse é meu teste')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // metodo de instancia é referente a instancia em si, ou seja, ao objeto criado
    aumentarVolume() {
        if(this.volume < 10){
            this.volume += 1
            console.log(`Volume: ${this.volume}`)
        }else(
            console.log(`Volume: ${this.volume}`)
        )
    }

    diminuirVolume() {
        if(this.volume > 0){
            this.volume -= 1
            console.log(`Volume: ${this.volume}`)
        }else{
            console.log(`Volume: ${this.volume}`)
        }
    }

    // Método de estático é referente a própria classe
    static trocaPilha() {
        console.log('ok vou trocar')
    }

    static soma(x, y){
        return x + y
    }

    static verificaThis(){
        console.log(this)
    }//os metodos estáticos não tem acesso aos dados da instancia
}

const controleLG = new ControleRemoto('LG');

controleLG.aumentarVolume()
controleLG.aumentarVolume()
controleLG.aumentarVolume()
controleLG.aumentarVolume()
controleLG.diminuirVolume()
controleLG.diminuirVolume()
controleLG.diminuirVolume()
controleLG.diminuirVolume()
controleLG.diminuirVolume()
controleLG.diminuirVolume()

ControleRemoto.trocaPilha();
soma = ControleRemoto.soma(13, 11);
console.log(soma)
ControleRemoto.verificaThis()