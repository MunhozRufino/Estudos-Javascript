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

operacaoMat(25, 35);

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