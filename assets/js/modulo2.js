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
ingredientes[1] = `tempero`; //uma forma de susbstituir um item do array
ingredientes[ingredientes.length - 1] = `cacau`; //segunda forma de substituir um item do array utilizando a contagem de itens menso um para substituir o ultmo item do array.
console.log(ingredientes.join(` -> `)); //gera uma string separando cada array (não altera o array).


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

//AULA 16 - O que são objetos? Um grupo de informações diferente de um array que são listas.

let avatar = { //aqui estamos criando dentro da variável um objeto.
    nome: `Munhoz`,
    idade: 32,
    pais: `Brasil`,
    olhos: [`preto`, `castanho`], //arrey
    caracteristica: { //objeto dentro de objetos
        forca: 10,
        energia: 15,
        magia: 5
    }
} //fim do objeto contendo propriedades com string, number, array

//AULA 17 - Acessando e alterando objetos
avatar.nome = `Rufino`;
avatar.caracteristica.forca += 5;
avatar.olhos.push(`verde`);

console.log(avatar);

console.log(`Bem vindo ${avatar.nome} você tem ${avatar.idade} anos.`);
console.log(avatar.caracteristica.forca); //aqui acessamos os objetos em efeito cascata. 
console.log(avatar.olhos[1]); //relembrando como acessamos os arrays

//AULA 17 - Acessando e alterando objetos (testamos acima a ideia de alteração)
let veiculos = {
    nome: `Vendedor`,
    idade: 40,
    modeloCarros: [
        {modelo: `Fiat`, cor: `preto`},
        {modelo: `Ferrari`, cor: `vermelho`}
    ]
}

veiculos.idade -= 5;
veiculos.modeloCarros[1].modelo = `Toyota`; //praticando a alteração

console.log(veiculos);
console.log(`Este é o modelo: ${veiculos.modeloCarros[1].modelo}`);

//AULA 18 - Função dentro de objeto

let humano = {
    nome: `João`,
    sobrenome: `Carlos`,
    idade: 20,
    humanoCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
        //return this.nome + ` ` + this.sobrenome; pode ser feito desta forma também o return.
    }
}

console.log(humano.nome + ` ` + humano.sobrenome);
console.log(humano.humanoCompleto());

//AULA 19 - O loop for

for (let lo = 0; lo < 10; lo++) {
    console.log(lo);
    console.log(`Frase qualquer `+ lo);
}

//AULA 20 - Dando loop em arrays

//Esta é uma forma de apresentar o código de loop
let cores = [`preto`, `branco`, `azul`, `verde`];

cores.push(`roxo`);

for (let cr = 0; cr < cores.length; cr++) {
    console.log(cores[cr]);
}

//Aqui a baixo podemos observar uma estrutura de for mais simples e bem efetiva
let frutas = [`maçã`, `melancia`, `mamão`, `morango`];

frutas.push(`ABACAXI`);

console.log(`Lista de frutas: `);

for (let fr in frutas) {
    console.log(frutas[fr]);
}

//Podemos simplificar ainda mais com a estrutura abaixo do for
let receita = [`agua`, `farinha`, `cenoura`, `fermento`];

receita.push(`MANTEIGA`);

console.log(`Receita de Bolo: `);

for (let rec of receita) {
    console.log(rec);
}

//Podemos criar loops dentro do array com objetos
let escolar = [
    {mat: `lapis`, val: 10},
    {mat: `borracha`, val: 5},
    {mat: `caderno`, val: 15},
    {mat: `fermento`, val: 25}
];

console.log(`Material escolar: `);

for (let mt in escolar) {
    console.log(escolar[mt]);
}

//AULA 21 - O loop while 

//abaixo exibimos duas maneiras que podemos apresentar o while em códigos diferentes
let numero = 0;
while (numero <= 10) {
    console.log(`O número de vez é ${numero}`);
    numero++;
}

for(let numero = 0; numero <= 10; numero++) {
    console.log(`Os novos números são ${numero}`);
}

//AULA 22 - Exercício de loops #8

//1. Faça um loop que mostre todas as frutas
let salada = [`Maça`, `Uva`, `Banana`];

for (let sl in salada) {
    console.log(salada[sl]);
}

//2. Conte de 1 até 100 através de um While
let numb = 0;
while (numero <= 100) {
    console.log(`Contagem progressiva: ${numero}`);
    numero++;
}

//AULA 23 - Funções de array (as intruções desta aula foram aplicadas na aula 14)

//AULA 24 - Ordenação de array

let fruits = [`melancia`, `abacaxi`, `tangerina`, `banana`];

fruits.sort(); //coloca os itens do array em ordem alfabética
fruits.reverse(); //coloca os itens em ordem decrescente (reversa)

console.log(fruits);

let cars = [
    {brand: `toyota`, year: 2010},
    {brand: `bmw`, year: 1998},
    {brand: `fiat`, year: 2002}
]

cars.sort((a, b) => b.year - a.year);

console.log(cars);

//AULA 25 - Iteração de array 1

let work = [`Vendedor`, `Diretor`, `Gerente`, `Atendente`];

let workLeader = work.filter((value) => {
    return value.length <= 7;

/* Abaixo é uma forma de se fazer o código acima: 
    if(item.length > 7) {
        return true;
    } else {
        return false;
    }
*/
})
console.log(workLeader);

//a função includes procura um item dentro do array como `Diretor`
if(work.includes(`Diretor`)) {
    console.log(`O Diretor estar na emrpesa!`);
} else {
    console.log(`Não tem dono na empresa!`);
}