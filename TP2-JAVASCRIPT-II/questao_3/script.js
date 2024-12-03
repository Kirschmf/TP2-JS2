const numerosA = [1, 2, 3];
const numerosB = [4, 5, 6];
const numerosC = [7, 8, 9];

let somatorio = 0;

// Soma os números do vetor numerosA
for (let i = 0; i < numerosA.length; i++) {
    somatorio += numerosA[i];
}

// Soma os números do vetor numerosB
for (let i = 0; i < numerosB.length; i++) {
    somatorio += numerosB[i];
}

// Soma os números do vetor numerosC
for (let i = 0; i < numerosC.length; i++) {
    somatorio += numerosC[i];
}

console.log(somatorio);