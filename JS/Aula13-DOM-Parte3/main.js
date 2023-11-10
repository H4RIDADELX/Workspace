var pipoca = document.querySelectorAll('p');
console.log(pipoca)
// pipoca[2].style.color = 'blue'
// for(let c = 0; c < pipoca.clientHeight; c++)



// let c = 0;
// while(c < pipoca.length){
//     pipoca[c].style.color = 'purple'
//     c++
// }

let j = document.querySelector('p.exemplo');
j.innerHTML = 'Foi alterado aqui o texto com as lagrimas dos alunos';

j.style.color ='blue';

let y = (document.querySelector('#exemplo2').style.color = 'green');


// function Nome(){
//     var entradaNome = prompt('Insira o sue nome');
//     var mostarNome = document.querySelector("#mostraNome");
//     console.log(entradaNome)

//     mostarNome.innerHTML = `Olá ${entradaNome} Bem-vindo a nossa academia`
// }
let evento = document.querySelector('#chamaFuncao')

const Nome = () => {
    let recebeNome = document.querySelector("#recebeNome");
    let mostraNome = document.querySelector('#mostraNome');

    mostraNome.innerHTML = `Olá ${recebeNome.value} Bem-vindo a serie B`
}

evento.addEventListener('click', Nome);
// O nome do evento, callback(funcao), opcional true/false
