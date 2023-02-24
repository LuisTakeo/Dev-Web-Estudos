//document.getElementById("fname").addEventListener("change", myFunction);

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}


const obj = {
    Chave1: "Coluna 01",
    Chave2: "Coluna 02"
  };

  for (const i in obj) {
    console.log(`${i}: ${obj[i]}`);
  }
  

  class Bolo{
    constructor(recheio, cobertura, sabor){
        this.recheio = recheio,
        this.cobertura = cobertura,
        this.sabor = sabor,
        this.novadiv = "<div> teste </div"
    }
    constroiParagrafo(seletor){
        document.querySelector(seletor).innerHTML = this.novadiv
    }
}

const laranja = new Bolo("laranja","laranja", "laranja")
const criardiv = laranja.constroiParagrafo