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

for (contador; contador <= 50; contador += incremento) {
    console.log(`Contador: ${contador}`);
}