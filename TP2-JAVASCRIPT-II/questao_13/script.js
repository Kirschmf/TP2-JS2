let quantidade = parseInt(prompt("Quantos números você deseja sortear?"), 10);

let numerosSorteados = [];

for (let i = 0; i < quantidade; i++) {
    let numero = Math.ceil(Math.random() * 60);
    numerosSorteados.push(numero);
}

console.log(`Números sorteados: ${numerosSorteados.join(', ')}`);