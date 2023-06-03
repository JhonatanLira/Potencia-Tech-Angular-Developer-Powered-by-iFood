/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da 
condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const valorproduto = 100;
const codigo = "parcelado";

if(codigo === "dinheiro"){
    const valorAPagar =valorproduto-(valorproduto*0,15);
    console.log("Valor a pagar : "+valorAPagar.toFixed(2));
} 
else if(codigo === "pix"){
    const valorAPagar =valorproduto-(valorproduto*0,15);
    console.log("Valor a pagar : "+valorAPagar.toFixed(2));
}
else if(codigo === "parcelado"){
    const parcelas = 6;

    if(parcelas === 2){

        console.log("Valor a pagar : "+valorproduto.toFixed(2));
        console.log("Parcelas de : "+parcelas+"X : "+(valorproduto/parcelas).toFixed(2));

    }else if(parcelas > 2){

        const valorAPagar =valorproduto+(valorproduto*1,10);
        console.log("Valor a pagar : "+valorAPagar.toFixed(2));
        console.log("Parcelas de : "+parcelas+"X : "+(valorAPagar/parcelas).toFixed(2));

    }
}