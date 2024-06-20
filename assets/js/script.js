alert ("Olá Mundo")

console.log("nome")

let idade = 90 //number
let nome = "Munhoz" //string
let logado = true //boolean
let lista = ["ovo", "massa", "corante"] //array
let nomeCompleto = {nome: "Munhoz", idade: 90} //object

//O comando abaixo exibe os dados no Console
console.log(nome)
console.log(idade)

//AULA 07 - Comentário

/*
Este é um comentário 
de várias linhas
console.log(idade)
*/

//AULA 08 - EXERCÍCIOS DE VARIÁVEIS 1
//Crie uma variavel para armazenar o nome do carro e ponha o vallor Ferrari.
//Crie uma variavel para armazenar o prço do bolo de R$19.99.
//Corrija o código a seguir: let "cidade" = São Paulo

let carro = "Ferrari"
let boloPreco = 19.88
let cidade = "São Paulo"

console.log(carro)
console.log(boloPreco)
console.log(cidade)

//AULA 09 - Ponto e virgula para criar variáveis na mesma linha, recomenda-se utilizar no final de cada código.
let pontoevirgula = "variavel"; let finalponto = 10;

console.log(pontoevirgula);
console.log(finalponto);


//AULA 10 - CRIANDO VARIÁVEIS: let, const, var

//let e var funcionam igual inicialmente mas trabalham em diferentes contextos.
var moto = "Honda"
console.log(moto)

moto = "Yamaha"
console.log(moto)

//com a variavel CONST não podemos criar uma modificação
const vida = "Munhoz"
console.log(vida)
/*modificação da const abaixo*/
/*vida = "Rufino"
console.log(vida)*/

//AULA 11 - Operaçãoes e variáveis
let x = 1
x = x + 8
console.log(x)

let pessoa = "Munhoz"
calculo = pessoa + 8
console.log(calculo)

let marca = "Toyota" //posso inserir um espaço após o nome para melhor exibir.
let modelo = "Coroloa" //posso inserir um espaço após o nome para melhor exibir.
carro = marca + modelo
console.log(carro)

let marca1 = "Fiat" //posso inserir um espaço após o nome para melhor exibir.
let modelo1 = "Pálio" //posso inserir um espaço após o nome para melhor exibir.
carro = marca1 + " " + modelo1
console.log("Nome: " + carro)

let n1 = 15;
let n2 = 20;
let soma = n1 + n2;
console.log(soma)

let n4 = 15;
let n5 = 20;
let n6 = 2;
let soma1 = (n4 * n6) + n5;
console.log(soma1)

//AULA 12 - String e Template String

let nome2 = "Munhoz"
let nome3 = "Rufino"
let nomesobrenome = `Nome e sobrenome: ${nome2 + `bla`} ${nome3} filho` //utiliza-se de acentos agudos para tamplate string
console.log(nomesobrenome)

//AULA 13 - Condicional if / else

let idade1 = 17

if (idade1 >= 18) {
    console.log("Você é MAIOR de idade")
} else {
    console.log("Você é MENOR de idade")
}

//AULA 14 - Condicional == e ===

let idade3 = 20;

if (idade3 === 20) {
    console.log("Você tem 20 anos")
} else {
    console.log ("Você não tem essa idade")
}

let idade4 = "30"; //o numero como string contatena ao resultado

if (idade4 == 30) { //== considera mesmo uma sring como resultado (busca mais aberta)
    idade4 = idade4 + 25;
    console.log("Idade adicionada com sucesso")
    console.log(idade4);
}

let idade5 = 30; //com o numeral pode ser somado

if (idade5 === 30) { //=== exige da variável o valor exato numeral (busca mais direcionada)
    idade5 = idade5 + 25;
    console.log("Idade adicionada com sucesso")
    console.log(idade5);
}

//AULA 15 - Multi-condicionais (&& e ||)
//AULA 16 - Condicional Dupla (if else)

//&&, simblo de "and" ou "e" - todas as condicionais tém que estar corretas
//||, simbolo de "or" ou "ou" - basta uma condicional ser correta que já entra

let idade6 = 60;
/*
if (idade6 >= 18) {
    if (idade6 < 60) {
    console.log("Você é um adulto")
    }
}
Obs: esta linha de código pode ser escrita logo abaixo de forma reduzida 
*/ 

if (idade6 < 18) {
    console.log("Você é uma criança")
} else if (idade6 >= 18 && idade6 < 60) {
    console.log("Você é um adulto");
} else if (idade6 >= 60) {
    console.log("Você é um idoso")
} 

//else if, uma condicional dupla que filtra as etapas de informação, caso atendido não prossegue com a avaliação, evitando possíveis erros. 

//AULA 17 - Desmistificando o IF
// o if tem uma caracteristica de verificação de verdadeiro ou falso
let peso = 81;

let verificacao = peso >= 80;

if (verificacao) {
    console.log("Acima do peso")
} else {
    console.log("Peso esta na média")
}

//AULA 18 - Exercício de condicional #2

//Substitua o @ pela condicional correta para que o resultado seja TRUE
let z = 10;
let y = 5;
console.log(z > y);

//Substitua o @ pela condicional correta para que o resultado seja FALSE
let c = "10";
let d = 5;
console.log(c === d);

//Substitua o @ pela condicional correta para que o resultado seja FALSE
let e = 10;
let f = 5;
console.log(e != f);

//Crie uma condicional para verificar se o preço da carne está barato ou caro. PS: até 45 está barato.
let preco = 46.3;
if (preco <= 45) {
    console.log("A carne esta barata")
} else {
    console.log("A carne esta cara")
}

//AULA 18 - 