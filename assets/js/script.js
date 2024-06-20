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
vida = "Rufino"
console.log(vida)
