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
