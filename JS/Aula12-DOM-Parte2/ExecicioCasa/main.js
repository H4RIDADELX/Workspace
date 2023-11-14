// let botao = document.getElementsByClassName('B_12');

// document.body.style.border = 'solid 2px #D9BC66'
// document.body.style.padding = '0.5rem';
// document.body.style.backgroundColor = '#BFBFBF';
// document.body.style.margin = '0.7rem'

function adicionarImagem() {
    // Criação da imagem
    const imagem = document.createElement("img");
    imagem.src = "img/umbrella.jpg";
  
    // imagem
    document.body.appendChild(imagem);
  
    // -cor de fundo -
    // document.body.style.backgroundColor = "#262525";
  
    const botao = document.getElementById("B_01");
    botao.style.border = "2px solid #D9BC66";
    botao.style.padding = "0.5rem";
    botao.style.backgroundColor = "#BFBFBF";
    botao.style.margin = "0.7rem";
  }
  function solicitarNome() {
    // prompt
    const nome = prompt("Digite seu nome:");
  
    //  usuário clicou em OK
    if (nome !== null) {
      const mensagem = document.createElement("p");
      mensagem.textContent = `Olá ${nome}, bem-vindo à nossa acadeia`;
  
      // Inserção da mensagem
      document.body.appendChild(mensagem);m
    }
  }
  
  function exibirTabuada() {
    // Solicitação do número via prompt
    const numero = prompt("Digite um número para ver a tabuada:");
  
    // Verifica se o usuário clicou em OK e exibe a tabuada
    if (numero !== null) {
      const resultado = document.createElement("p");
      resultado.textContent = `Tabuada do ${numero}:\n`;
  
      for (let i = 1; i <= 10; i++) {
        const linha = `${numero} x ${i} = ${numero * i}\n`;
        resultado.textContent += linha;
      }
  
      // Inserção da tabuada abaixo do botão
      document.body.appendChild(resultado);
    }
  }