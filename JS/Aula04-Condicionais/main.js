let professoraBateAluno = true
let professoraXingaAluno = false


// 
if(professoraBateAluno == true && professoraXingaAluno == true){
    console.log("Professora demitida com sucesso !!")
}
console.clear()

// 
if(professoraBateAluno == true || professoraXingaAluno == true ) {
    console.log("Professora demitida com sucesso!!")
}


console.clear()

let numero1 = 10
let numero2 = 4

if(numero1 === numero2){
    console.log("os dois são diferentes")
}






// validar boatos
let teraComidaTOTVS = false
// teraComidaTOTVS == true
if(!teraComidaTOTVS == true){ //se // false // implicita
    console.log("Não vou nem almoçar, alexsandro o brabo")
}else{ // senão
    console.log("Você terá que almoçar")
}


console.clear()


let numero = 11

if(numero % 2 == 0){
    console.log("Esse numero é par")
}else{
    console.log(`numero ${numero} é impar`)
}

console.clear()



let morangoMaduro = null

if(morangoMaduro == true){
    console.log("Pode Comer")
}else if (morangoMaduro == false){
    console.log("Não comer")
}else{
    console.log("Seu morango esta mofado")
}

var raizQuadrada = Math.sqrt(34)
console.log(raizQuadrada)



console.clear()

let caminhoDasIndias = 9
let idade = 10

if(caminhoDasIndias == 9){
    console.log("Você esta ficando velho")
    if(idade == 27){
        console.log("Cara,você esta com o pé na cova")
    }else{
        console.log("Você ainda está novo")
    }
}

