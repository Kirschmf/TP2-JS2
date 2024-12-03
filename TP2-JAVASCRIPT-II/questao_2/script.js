let algunsNumeros = [
  1, 2, 3, 5, 7, 8, 9, 13, 17, 20, 21, 303, 1001, 1002, 1003,
];

function isPrimo(num) {
  if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // Se for divisível por i, o número não é primo
  }
  return true; // Se não foi divisível por nenhum número, é primo
}

let i = 0;
while (i < algunsNumeros.length) {
  if (!isPrimo(algunsNumeros[i])) {
    algunsNumeros.splice(i, 1); // Remove o número se ele não for primo
  } else {
    i++; // Incrementa apenas se o número for primo!!!
  }
}

console.log(algunsNumeros);