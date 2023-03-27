/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto = 100;
const formaPagamento = 1;

console.log("\n 1 - Débito (desconto 10%)"+"\n 2 - Pix (desconto 15%)"
                +"\n 3 - Parcelar em 2x (preço etiqueta)"
                +"\n 4 - Parcelar em + de 2x (juros de 10%)\n");

switch(formaPagamento){
   case 1: console.log(precoProduto*0.01);
   break;
   case 2: console.log(precoProduto*0.015);
   break;
}
