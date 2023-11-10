let paragrafo = document.getElementById('paragrafo01');

paragrafo.style.color = 'red';
paragrafo.style.backgroundColor = 'black';
paragrafo.style.textAlign = 'center';
paragrafo.style.margin = '20px'

let buscaClasse = document.getElementsByClassName('item');
// buscaClasse[2].style.backgroundColor = "blue";
// buscaClasse[0].style.backgroundColor = "blue";
// buscaClasse[3].style.backgroundColor = "blue";


// percorra a lista utilizando repetição e altere a cor de texto

for(let c = 0; c <= buscaClasse.length; c++){
    // Agora falta dizer a cor que eu quero aplicar nos itens
    // buscaClasse[c].style.backgroundColor = 'blue';
}

// getElementsByTagName
let acessaParagrafos = document.getElementsByTagName('p')
console.log(acessaParagrafos)

// Percorra os paragrafos e altere a cor de texto
for(let i = 0; i <= acessaParagrafos.length; i++){
    // acessaParagrafos[i].style.color = 'green'
}

// acessa
let acessaName = document.getElementsByName('name_item')
console.log(acessaName)

// Percorra a array e altere apenas os itens que tem a posição é par
for(let z = 0; z <= acessaName.length; z++){
    if(z % 2 == 0){
        // acessaName[z].style.color = 'pink';
    }
}

let item2 = document.getElementById('item2')
item2.remove();

let lista = document.getElementById('lista');
let item5 = document.getElementById('item5');

lista.insertBefore(item2,item5.nextSibling)

let retiraEstilo = document.getElementById('messi');
retiraEstilo.style.listStyle = 'none';

