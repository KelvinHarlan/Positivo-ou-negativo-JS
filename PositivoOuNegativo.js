//Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

function PositivoOuNegativo(numero){
    if (numero >0){
        console.log(`O número escolhido foi ${numero}, ele é um valor positivo.`)
    }
    else if (numero <0){
        console.log(`O número escolhido foi ${numero}, ele é um valor negativo.`)
    }
    else if (numero ===0){
        console.log(`O número escolhido foi ${numero}, ele é um valor neutro`)
    }
    else{
        console.log('O valor escolhido é inválido')
    }
}

PositivoOuNegativo(numero = 10)