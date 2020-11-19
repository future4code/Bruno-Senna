// Exercícios de interpretação de código

// 1.  b
//     10 5
// 2.  10 10 10

// Exercícios de escrita de código

// 1
/* //<---RETIRE PARA VER A RESOLUÇÃO
var nome
var idade
console.log(typeof nome)
console.log(typeof idade)
// Tivemos a impressão deste tipo porque falta declarar valores a veriavel
var nome = prompt("Qual é o seu nome?")
var idade = prompt("Qual é a sua idade?")
console.log(typeof nome)
console.log(typeof idade)
// Eu declarei a variavel utilizando "let" pensando que iria funcionar mas não foi, tive que usar "var". Eu não sei bem o pq, mas vou pesquisar sobre.
// Os dois valores foram armazenados em forma de String
console.log("Olá " + nome + " você tem " + idade + " anos")
*/

// 2
/* //<---RETIRE PARA VER A RESOLUÇÃO
var qualidade = prompt("Qual a sua maior qualidade?")
var diaOuNoite = prompt("Você gosta mais do dia ou da noite?")
var livro = prompt("Qual é o seu livro preferido?")
var liberdadeOuSolidao = prompt("Quando está sozinho em casa, sente liberdade ou solidão?")
var vicio = prompt("Você bebe, fuma ou tem algum tipo de vício?")

console.log("Qual a sua maior qualidade? ", "Resposta: " + qualidade)
console.log("Você gosta mais do dia ou da noite? ", "Resposta: " + diaOuNoite)
console.log("Qual é o seu livro preferido? ", "Resposta: " + livro)
console.log("Quando está sozinho em casa, sente liberdade ou solidão? ", "Resposta: " + liberdadeOuSolidao)
console.log("Você bebe, fuma ou tem algum tipo de vício? ", "Resposta: " + vicio)
*/

//3
/* //<---RETIRE PARA VER A RESOLUÇÃO
var comidaPreferida = ["Pizza", "Frango", "Massas", "Hamburguer", "Salada"]
console.log(comidaPreferida)
console.log("Essas são as minhas comidas preferidas: " + comidaPreferida[0])
console.log("Essas são as minhas comidas preferidas: " + comidaPreferida[1])
console.log("Essas são as minhas comidas preferidas: " + comidaPreferida[2])
console.log("Essas são as minhas comidas preferidas: " + comidaPreferida[3])
console.log("Essas são as minhas comidas preferidas: " + comidaPreferida[4])
comidaPreferida[1] = prompt ("Qual a sua comida preferida?")
console.log("Essas são as minhas comidas preferidas: " + comidaPreferida[0])
console.log("Essas são as minhas comidas preferidas: " + comidaPreferida[1])
console.log("Essas são as minhas comidas preferidas: " + comidaPreferida[2])
console.log("Essas são as minhas comidas preferidas: " + comidaPreferida[3])
console.log("Essas são as minhas comidas preferidas: " + comidaPreferida[4])
*/

//4
/* //<---RETIRE PARA VER A RESOLUÇÃO
var perguntas = []
perguntas[0] = prompt("Você acredita que o homem realmente foi à lua?")
perguntas[1] = prompt("Você acredita em vida após a morte?")
perguntas[2] = prompt("Você gostaria de viver em outro planeta?")
var respostas  = perguntas
console.log(respostas)
// Não consegui fazer com que os valres fossem transformados em booleano
*/