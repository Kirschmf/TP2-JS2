const frase =
  "the only thing necessary for the triumph of evil is for good men to do nothing";

  let palavras = frase.split(' ');
let fraseCapitalizada = '';

for (let indice in palavras) {
    let palavra = palavras[indice];
    let primeiraMaiuscula = palavra.charAt(0).toUpperCase() + palavra.slice(1);
    
    fraseCapitalizada += (indice > 0 ? ' ' : '') + primeiraMaiuscula;
}

console.log(fraseCapitalizada);