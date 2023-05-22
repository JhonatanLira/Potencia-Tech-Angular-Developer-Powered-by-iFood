//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorPedido = parseInt(gets());

//TODO: Criar as condições necessárias para impressão da saída conforme o enunciado.
/*
if(valorPedido < 50){
  console.log("Que pena, você nao ganhou nenhum brinde especial.");
}else if(valorPedido >= 50){
  console.log("Parabens, você ganhou uma sobremesa gratis!");
}
*/
const parabens = "Parabens, você ganhou uma sobremesa gratis!";
const pena = "Que pena, você nao ganhou nenhum brinde especial.";

console.log(valorPedido >= 50?"Parabens, você ganhou uma sobremesa gratis!":"Que pena, você nao ganhou nenhum brinde especial.");
