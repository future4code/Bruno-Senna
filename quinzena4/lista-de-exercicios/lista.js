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

// let ladoA = Number(prompt("inisira o primeiro lado"));
// let ladoB = Number(prompt("inisira o segundo lado"));
// let ladoC = Number(prompt("inisira o terceiro lado"));

// if ((ladoA == ladoB) && (ladoA == ladoC) && (ladoB == ladoC)) {
//     console.log("Equilatero");
// } else if (((ladoA == ladoB) || (ladoA == ladoC) || (ladoB != ladoC)) ||
//     ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB != ladoC)) ||
//     ((ladoC == ladoA) || (ladoC == ladoB) || (ladoA != ladoB)) ) {
//     console.log("Isoceles");
// } else {
//     console.log("Escaleno")
// }

// 5

// let numA = Number(prompt("Insira o primeiro numero"));
// let numB = Number(prompt("Insira o segundo numero"));

// if (numA > numB) {
//     console.log("O maior é: ", numA);
// } else if (numA < numB) {
//     console.log("O maior é: ", numB);
// } else {
//     console.log("Os numeros são iguais");
// }

// if (numA % numB == 0) {
//     console.log(numA, " é divisivel por ", numB)
// } else {
//     console.log(numA, ' não é divisivel por ' , numB)
// }

// if (numB % numA == 0) {
//     console.log(numB, " é divisivel por ", numA)
// } else {
//     console.log(numB, " não é divisivel por ", numA)
// }

// // Está faltando algo nessa parte para completar o codigo e fazer ele rodar 100% em todos os casos mas não sei implementar.

// if (numA >=0) {
//     if (numA >= numB){
//         console.log(numA - numB)
//     } else {
//         console.log(numB - numA)
//     }
// } else if (numA < 0) {
//     console.log(numB - numA)
// }

// if ((numA >= 0) && (numA >= numB)) {
//     console.log(numA - numB)
// } else if ((numA >= 0) && (numA <=numB)) {
//     console.log(numB - numA)
// } else if ()

// Exercícios de Funções

// 1

// Não consegui começar a fazer ela.

// 2 

// (function() {
//     return alert("Hello Future4");
//  })();

// Exercícios de Objetos

// 1

/* Um Array é um tipo de objeto que se assemelha a uma lista que existe com algumas propriedades embutidas nele.
    Um objeto é uma entidade, algo com propriedades e tipos.  
    É preferível utilizar um Array quando queremos fazer uma lista de objetos para um determinado propósito.
    Já a utilização do objeto é mais como uma unica coisa, algo único que queremos dar propriedades. */


