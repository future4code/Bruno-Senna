console.log("Bem vindo ao jogo de Blackjack!")

// Criei um if/else com o metodo informado

if (confirm("Quer iniciar uma nova rodada?")) {

   // Separei essa parte em dois blocos. O primeiro para compra duas cartas para o usuário e somar os valores 
   // numa constante para que posso ser utilizado depois. Após isso imprimo o resultado no console do usuário.
   const cartaUser = comprarCarta();
   const cartaUser2 = comprarCarta();
   const valorUser = (cartaUser.valor + cartaUser2.valor)
   console.log("Usuário - Cartas: " + cartaUser.texto + " " + cartaUser2.texto + " - pontuação: " + valorUser)

   // O segundo bloco faz basicamente a mesma coisa que o primeiro, a diferença aqui é que esse resultado é utilizado
   // para a saida do Computador.
   const cartaPC = comprarCarta();
   const cartaPC2 = comprarCarta();
   const valorPC = (cartaPC.valor + cartaPC2.valor)
   console.log("Computador - Cartas: " + cartaPC.texto + " " + cartaPC2.texto + " - pontuação: " + valorPC)

   // Nessa condição eu faço comparações com o intuito de verificar o ganhador 
   if (valorUser <= 21 && valorUser > valorPC) {
      console.log("O usuário ganhou!")
   } else if (valorPC <= 21 && valorPC > valorUser) {
      console.log("O computador ganhou!")
   } else if (valorUser <= 21 && valorPC <= 21 && valorPC == valorUser) {
      console.log("Empate!")
   } else {
      console.log("Ninguem Ganhou!")
   }

} else {
   console.log("O jogo acabou =(")
}


