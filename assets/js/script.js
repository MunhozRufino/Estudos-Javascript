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