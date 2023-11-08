// const celular = {
//     marca: 'Apple',
//     modelo: 'Iphone 15 pro Max',
//     cor: 'Rosa',
//     memoria: '512gb',
//     memoriaRam: '16gb'
// }

class celular {
    constructor (marca,modelo,cor,memoria,memoriaRam,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.memoria = memoria;
        this.memoriaRam = memoriaRam;
        this.isDesligado = true;
        this.ano = ano
    }
    ligar(){
        console.log("Ligando o celular .......")
    }
    desligar(){
        if(this.isDesligado === true){
            return `Desligando.......`
        }else{
            return `Não vou desligar seu banana,catapimbas`
        }
    }
    pesquisa(){
        console.log("Pesquisando......")
    }
}

// instaciar
var motorola = new celular ('amarelo','nokia',56,'4','2600G');
console.log(motorola)

var positivo = new celular ('Positivo','jubileu tisti4','Preto amarelado',8,'252mb')
console.log(positivo)
console.log(motorola.desligar())

