const algunsCarros = [
  ["Kwid", "Renault"],
  ["Polo", "Volkswagen"],
  ["S10", "Chevrolet"],
  ["March", "Nissan"],
  ["Civic", "Honda"],
  ["Tracker", "Chevrolet"],
  ["T-Cross", "Volkswagen"],
  ["Gol", "Volkswagen"],
  ["Duster", "Renault"],
  ["Onix", "Chevrolet"],
  ["Argo", "Fiat"],
  ["Kicks", "Nissan"],
  ["Fit", "Honda"],
  ["Fiorino", "Fiat"],
  ["Cronos", "Fiat"],
  ["Sandero", "Renault"],
  ["Versa", "Nissan"],
  ["HR-V", "Honda"],
  ["Virtus", "Volkswagen"],
  ["Uno", "Fiat"],
];

const contagemMarcas = {};

for (let carro of algunsCarros) {
    const marca = carro[1];
    contagemMarcas[marca] = (contagemMarcas[marca] || 0) + 1;
}

let mensagem = "Quantidade de carros por marca:\n";
for (let marca in contagemMarcas) {
    mensagem += `${marca}: ${contagemMarcas[marca]} carro(s)\n`;
}

alert(mensagem);