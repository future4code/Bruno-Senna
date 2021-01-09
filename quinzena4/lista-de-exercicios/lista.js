// Exercícios de interpretação de código

// 1

// Basicamente vai pegar o valor inserio pelo usuario e multiplicar por 100 e imprimir no console. 

// 2

// console.log(novoMomtante); saida é "165"
// console.log(segundoMontante); saida é "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"

// 3

// console.log("Quantidade total de números", numeros.length); saida é "Quantidade total de números 14"
// console.log(array1.lenght); saida é "6"
// console.log(array1.lenght); saida é "8"

// 4

// 25  12     12  12      11      11   1       -10     -10
// 25, 25 x2, 64, 121 x2, 121 x8, 283, 283 x8, 283 x2, 1590

// Exercícios de Lógica de Programação

// 1

// 3 maneiras de se percorrer uma lista: for each...in, for...in, for...of

// let array = [10, 20, 30];

// for (const valor of array) {
//   console.log(valor);
// }

// 2

// A. F 
// B. F
// C. T 
// D. F 
// E. T 

// 3

// Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.

// Não. Está faltando o incremento da variavel "i" e colocar somente "<" na comparação do "while". 

// const quantidadeDeNumerosPares = 8

// let i = 0

// while(i < quantidadeDeNumerosPares) {
//     console.log(i*2)
//     i++
// }

// 4

let ladoA = Number(prompt("inisira o primeiro lado"));
let ladoB = Number(prompt("inisira o segundo lado"));
let ladoC = Number(prompt("inisira o terceiro lado"));

if ((ladoA == ladoB) && (ladoA == ladoC) && (ladoB == ladoC)) {
    console.log("Equilatero");
} else if (((ladoA == ladoB) || (ladoA == ladoC) || (ladoB != ladoC)) ||
    ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB != ladoC)) ||
    ((ladoC == ladoA) || (ladoC == ladoB) || (ladoA != ladoB))) {
        console.log("Isoceles");
} else {
    console.log("Escaleno")
}
