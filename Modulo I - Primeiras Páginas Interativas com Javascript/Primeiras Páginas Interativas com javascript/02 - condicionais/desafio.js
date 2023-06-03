/* https://github.com/digitalinnovationone/javascript-developer-m1/blob/main/02%20-%20condicionais/resolucao-desafio.js 
Faça um programa para calcular o valor de uma viagem.
Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const combustivel = 1;
const combustivelNoCarro = 1;
const gastoMedioPorKm = 0;
const distancia = 0;
let precoCombustivel = 0;


const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log("R$ "+valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log("R$ "+valorGasto.toFixed(2));
}