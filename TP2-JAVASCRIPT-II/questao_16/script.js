const solicitarIncremento = () => {
    let incremento;
    do {
        incremento = parseInt(prompt("Informe um valor de incremento entre 1 e 10:"), 10);
        if (isNaN(incremento) || incremento < 1 || incremento > 10) {
            alert("Por favor, insira um número válido entre 1 e 10.");
        }
    } while (isNaN(incremento) || incremento < 1 || incremento > 10);
    return incremento;
};

let incremento = solicitarIncremento();

let contador = 0;

while (true) {
    contador += incremento;

    console.log(`Contador: ${contador}`);

    let resposta = prompt("Deseja continuar incrementando o contador? (Sim/Não)");

    if (resposta && resposta.trim().toLowerCase() === "não") {
        // Se a resposta for nao, sai do loop 
        break;
    }
}

alert(`O valor final do contador é: ${contador}`);