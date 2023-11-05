function alertCookie(){
}
alert('Você quer um Cookie');
console.log(alertCookie());


const alertSucesso = () => {
    return 'Mensagem Gerada com Sucesso';
};
// console.log(alertSucesso);
alert('Mensagem Gerada com Sucesso');
console.log(alertSucesso());

const notebook = {
    marca: 'Lenovo',
    cor: 'Preto',
    peso: '1,8kg',
    memoriaRam: '4gb',
    SistemaOperacional: 'Windons'
}
 console.log(notebook);

function myFunc(valor1, valor2) {
    return valor1 * valor2
}

let dias = myFunc(2, 365)
console.log(dias)