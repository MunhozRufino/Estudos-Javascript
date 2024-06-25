//AULA 02 e 03 - Declarando uma função e usar uma função

function gravidade () {
    console.log("Essa é a gravidade: ");
    console.log(9.8);
}//as funções não aparecem no console, apenas estão presentes para exercer alguma função. 

gravidade(); //aqui evidenciamos a utilização da função.

//AULA 04 - Passando parâmetros em funções

function operacaoMat(n1, n2) {
    let resultado = n1 + n2;
    console.log("Resultado final: " + resultado);
}

operacaoMat(25, 45);

function nomeCompleto(nc1, nc2) {
    console.log(`Nome completo: ${nc1} ${nc2}`);
}

nomeCompleto("Munhoz", "Rufino");

//AULA 05 - Retorno da função

function marcaModelo (marca, modelo) {
    return `${marca} ${modelo}`;
}

let veiculo = marcaModelo ("Jeep", "Renegade")
console.log("Tipo de veiculo: " + veiculo)

//AULA 06 - Função com retorno condicional

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 18;
let verificacao = maiorDeIdade(idade);
console.log(verificacao);

if (verificacao) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}

//AULA 07 - Exercício de funções #4

/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Formula da porcentagem: (y / x * 100)
uso da função: 

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
*/

function calcPct(nc1, nc2) {
    return (nc1 / nc2) * 100;
}

let x = 10;
let y = 40;
let pct = calcPct(x, y);
console.log(`${pct}% de ${y} é ${x}`);

//AULA 08 - Exercício de funções #5

function calcularImovel(metragem, quartos) {
    let n2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
        default:
            preco = metragem * n2;
            break;
        case 2:
            preco = metragem * (n2 * 1.2);
            break;
        case 3:
            preco = metragem * (n2 * 1.5);
            break; 
    }
    return preco;
}

let metragem = 100;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`)

//AULA 09 - Exercício de funções #6 (mais fácil)

function validar(usuario, senha) {
    if (usuario === "Mnhoz" && senha === "123") {
        return true;
    } else {
        return false;
    }
}

let usuario = "Munhoz";
let senha = "123"
let validacao = validar(usuario, senha);
if (validacao) {
    console.log(`Acesso concedido.`);
} else {
    console.log(`Acesso negado`);
}

//AULA 10 - Arrow Function

/*function conta(x, y) {
    return x + y;
}
Obs: está é um função completa de exemplo
*/

const conta = (x, y) => x + y; 
//este é um exemplo de arrow function, nada mais é que uma função resumida. 
//por ser dois parâmetros deixamos em parentese o x e y.
console.log(conta(10, 60));

/*
//esta abaixo é uma forma de fazer uma função. 
function sobnome(sob) {
    return "Munhoz " + sob;
}

//esta abaixo é uma forma de fazer uma função.
const sobnome = sob => "Munhoz " + sob;

//esta abaixo é uma forma de fazer uma função.
const sobnome = (sob) => "Munhoz " + sob;

//esta abaixo é uma forma de fazer uma função.
const sobnome = (sob) => {
    return "Munhoz " + sob;
}

//esta abaixo é uma forma de fazer uma função.
const sobnome = (sob) => {
    let nomeCompleto = "Munhoz " + sob;
    return nomeCompleto
    
}
*/

const sobnome = sob => "Munhoz " + sob;
//por ser um parametro o sob pode ficar isolado.
console.log(sobnome("Rufino"));

//AULA 11 - Variáveis dentro de funções

let count = 0; //exemplo de variável global

function add() {
    let count = 0; //exemplo de variavel interna, a função prioriza esta.
    count++;
}

add();
add();

console.log(count);

//AULA 12 - Funções dentro de funções

/* OBS: Podemos pegar esta função e inserir dentro de outra função.
function square(x) {
    return x * x;
}
*/

function addSquare (a, b) {
    //neste ponto poderia inserir a função a cima, mas inseri uma arrow functino deixando o código mais limpo (opnião particular)
    const square = x => x * x; 

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquare(2, 3));

//AULA 13 - Introdução a Array

//para criar um conjunto de informações ao invez de criarmos várias variaveis podemos criar um array
let cores1 = "blue"; 
let cores2 = "green";

let colors = [`blue`, `green`, `red`]
console.log(colors[0]);
//atenção: para selecionar um dado especifico do array a contagem dos itens começa por `0`.

let age = [`algo`, 30, `pedro`, true];

let ageList = [21, `nome`, age]; //junção de arrays
console.log(ageList);

let ageList2 = [`sobnome`, age, [`x`, `y`]];//junção e criação de arrays dentro de arrays.
console.log(ageList2[2][0])//`2` seleciona o array criado e `0` seleciona o valor do arrey interno desejado.


//AULA 14 - Operações básicas de array

let ingredientes = [
    `ovo`,
    `farinha`,
    `água`,
    `corante`,
    `sal`
]; //posso criar um array vazio e adicionar os itens com push

ingredientes.push(`cebola`); //push adiciona no array um item. 

ingredientes.shift(); //remove o primeiro item `ovo`
ingredientes.pop(); //remove o ultimo item `cebola`

console.log(ingredientes);

console.log(`Total de ingredientes: ${ingredientes.length}`);

//AULA 15 - Exercício de array #7

//1. No array abaixo, qual o número que pega a Ferrari?
let carros = ["BMW", "Ferrari", "Mercedes"];
let xx = 1;
console.log(`1. ` + carros[xx]);

//2. Troque a Ferrari por Audi
carros[1] = `Audi`;
console.log(`2. Lista com Audi: `);
console.log(carros);

//3. Adicione o Volvo na lista
carros.push(`Volvo`);
console.log(`3. Lista com Volvo: `);
console.log(carros);

//4. Exiba quantos itens tem no array
console.log(`4. Itens no array: `);
console.log(carros.length); 


