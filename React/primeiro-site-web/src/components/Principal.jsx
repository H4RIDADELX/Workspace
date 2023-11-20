import React from "react";
let estilo = {fontSize: '2rem', color: 'purple', backgroundColor:'orange'}
let img = {witdh:'200px', height:'200px'}

const Principal = ()=> {
    return (
        <>
        <p style={estilo}>
            Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end.Meu intuito é aprender a coloborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor
        </p>
        <ol>
            <li><img style={img}  src="https://www.planocritico.com/wp-content/uploads/2015/11/154-Velozes-Furiosos.jpg" alt="" /></li>
            <li>Sempre ao seu lado</li>
            <li>Carros</li>
            <li>Pantera Negra</li>
            <li>Vingadores</li>
        </ol>
        </>
    )
}
export default Principal;