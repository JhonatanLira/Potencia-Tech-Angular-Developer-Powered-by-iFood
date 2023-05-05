/*2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/
module.exports={maiorNumero,menorNumero};


function maiorNumero(quantidade,lista) {
  let maior = lista[0];
  for (let i = 0; i < quantidade; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }

  return maior;
}

function menorNumero(quantidade,lista) {
 let menor = lista[0];
  for (let i = 0; i < quantidade; i++) {
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  return menor;
}


