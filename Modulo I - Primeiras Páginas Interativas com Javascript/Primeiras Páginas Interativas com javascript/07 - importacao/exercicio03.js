/*3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/        

module.exports={print};

function numerosPares(quantidade,lista){
  const par = [];
  let a = 0;
    for(let i=0; i< quantidade;i++){
        if(lista[i]%2==0){
            par[a] = lista[i];
            a++;
        }
    }
    return par;
}

function print(quantidade,lista){
    let par = numerosPares(quantidade,lista);
    for(let i=0; i< par.length;i++){
        console.log("Número Par :"+par[i]);
    }
}