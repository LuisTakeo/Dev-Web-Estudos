const generateRandomNumber = (max) =>{
    return parseInt(Math.random() * max)
}

let arr1 = []
let contador = 0

while(arr1.length < 30){
    contador++
    let randomNumber = generateRandomNumber(50)
    if(arr1.indexOf(randomNumber) < 0){ //se o valor não existe dentro do array, o indexOf retorna -1
        arr1.push(randomNumber)
        console.log(randomNumber)
    }else{
        console.log(`${randomNumber} já foi adicionado no array`)
    }

}
console.log(`O loop foi repetido ${contador} vezes`)
console.log(arr1)