const calcularSoma = (valor1, valor2, valor3) => {
    return valor1 + valor2 + valor3;
};

let numero1 = parseFloat(prompt("Informe o primeiro número:"));
let numero2 = parseFloat(prompt("Informe o segundo número:"));
let numero3 = parseFloat(prompt("Informe o terceiro número:"));

let resultado = calcularSoma(numero1, numero2, numero3);

console.log(`A soma dos números é: ${resultado}`);