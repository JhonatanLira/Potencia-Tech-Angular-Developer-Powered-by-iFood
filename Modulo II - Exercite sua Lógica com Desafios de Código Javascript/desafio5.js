//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
function desconto(total, cupom){
    //let c = cupom.split("%");
    let c = cupom.replace("%","");
     return total-=total*(c/100);
   }
   
   function calcularValorTotal(n, pedidos, cupom) {
     let total = 0;
     for (let i = 0; i < n; i++) {
       //Explicação: Aplica o conceito de destructuring para atribuição do nome e valor.
       //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
       let [nome, valor] = pedidos[i].split(' ');
       valor = parseFloat(valor);
       total += valor;
     }
     
     //TODO: Criar as condições para aplicar o cupom de desconto (10% ou 20%).
     total = desconto(total, cupom);
   
     return total.toFixed(2);
   }
   
   
   //Recupera os valores de entrada, criando um array para os pedidos:
   const n = parseInt(gets());
   const pedidos = [];
   
   for (let i = 0; i < n; i++) {
     pedidos.push(gets());
   }
   const cupom = gets();
   
   //TODO: Analisar e completar a função "calcularValorTotal", invocando-a para obtenção do total.
   console.log("Valor total: "+ calcularValorTotal(n,pedidos,cupom));
   //TODO: Imprimir o valor total obtido de acordo com o padrão solicitado neste desafio.
   