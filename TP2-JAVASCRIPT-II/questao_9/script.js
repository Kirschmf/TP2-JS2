let produtos = [];
let total = 0;

do {
    let nome = prompt("Digite o nome do produto (ou deixe vazio para sair):");
    
    // Verifica se o nome ta vazio
    if (nome === "") {
        break; // Sai do loop se o nome estiver vazio
    }
    
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    
    // Adiciona o produto e o preço na lista
    produtos.push(`${nome} - R$ ${preco.toFixed(2)}`);
    total += preco; // Adiciona o preço ao total
} while (true);

let mensagem = produtos.join("\n") + `\nTotal: R$ ${total.toFixed(2)}`;

alert(mensagem);