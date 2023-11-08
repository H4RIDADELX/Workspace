const arrayNumeros = [17, 43, 8, 4, 97, 56, 29];

function verificaParOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + ' é um número par.');
  } else {
    console.log(numero + ' é um número ímpar.');
  }
}

arrayNumeros.forEach(verificaParOuImpar);


// function minhaFuncao (numero){
//     if(numero % 2 == 0){
//         return `O numero ${numero} é Par`;
//     }else if(numero % 2 == 1){
//         return `O numero ${numero} é Impar`
//     }else{
//         return 'Não consegui indentificar se é impar ou Par'
//     }
// }
// let receberPrimeiroNumero = minhaFuncao()
// console.log(receberPrimeiroNumero)

// let receberSegundoNumero = minhaFuncao()
// console.log(receberSegundoNumero)

// var contexto = 5.75 % 2;
// console.log(contexto)