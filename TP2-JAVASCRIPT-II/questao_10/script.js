let texto = prompt("Digite um texto:");

let textoInvertido = "";

let i = texto.length - 1;

// Utiliza while para inverter o texto
while (i >= 0) {
    textoInvertido += texto[i]; 
    i--; 
}

console.log(textoInvertido);