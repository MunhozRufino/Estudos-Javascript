console.log(`Módulo 3`);

//AULA 01 - O que é DOM
//DOM = Document Object Model, basicamente e a memória do navegador onde conseguimos manipular o visual, sendo traduzido e reproduzido pelo navegadr. 

//AULA 02 - Selecionando elementos 1
//Utilizando o console do navegador exploramos o acesso aos elementos do html

//AULA 03 - Selecionando elementos 2

//AULA 04 - Eventos de clique
//Toda vez que clicamos na tela criamos um evento de clique, ao clicar em um botão criamos dois eveontos, outclick upclick.

function clicou() {
    console.log(`Você clicou em feminino`);
}

function clicou2() {
    console.log(`Você clicou em masculino`)
}

let sexo = document.querySelector(`.sexo`);
botao.addEventListener("click", clicou2)