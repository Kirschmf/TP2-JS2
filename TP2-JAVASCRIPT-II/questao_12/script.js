let nomeTime = prompt("Qual é o nome do time de futebol?");
let vitorias = parseInt(prompt("Quantas vitórias o time teve?"), 10);
let empates = parseInt(prompt("Quantos empates o time teve?"), 10);
let derrotas = parseInt(prompt("Quantas derrotas o time teve?"), 10);

// Função para calcular os pontos e a média
function calcularEstatisticas(vitorias, empates, derrotas) {
    // Cada vitória vale 3 pontos e cada empate vale 1 ponto
    const pontos = (vitorias * 3) + (empates * 1);
    const totalJogos = vitorias + empates + derrotas;

    const mediaPontos = totalJogos > 0 ? (pontos / totalJogos).toFixed(2) : 0; 

    console.log(`Time: ${nomeTime}`);
    console.log(`Total de pontos: ${pontos}`);
    console.log(`Média de pontos por jogo: ${mediaPontos}`);
}

calcularEstatisticas(vitorias, empates, derrotas);