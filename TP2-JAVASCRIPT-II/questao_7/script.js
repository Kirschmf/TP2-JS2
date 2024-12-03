const perguntaEnquete = prompt("Qual é a pergunta para a enquete?");

const respostas = [];

let totalRespostas = 0;
let quantidadeSim = 0;
let quantidadeNao = 0;

// Loop para coletar respostas
do {
    // Solicita o nome
    const nome = prompt("Qual é o seu nome?");
    
    // Para o loop se o nome for vazio
    if (nome.trim() === "") {
        break;
    }
    
    // Solicita a resposta com validação
    let resposta;
    do {
        resposta = prompt(perguntaEnquete).toLowerCase();
        
        // Valida a resposta
        if (resposta !== "sim" && resposta !== "não") {
            alert("Resposta inválida! Por favor, responda com 'Sim' ou 'Não'.");
        }
    } while (resposta !== "sim" && resposta !== "não");
    
    // Adiciona a resposta ao array
    respostas.push({ nome, resposta });
    
    totalRespostas++;
    if (resposta === "sim") {
        quantidadeSim++;
    } else {
        quantidadeNao++;
    }
    
} while (true);

// Calcula as porcentagens
const porcentagemSim = totalRespostas > 0 
    ? ((quantidadeSim / totalRespostas) * 100).toFixed(2) 
    : 0;
const porcentagemNao = totalRespostas > 0 
    ? ((quantidadeNao / totalRespostas) * 100).toFixed(2) 
    : 0;

// Mensagem de resultadooo
const resultadoEnquete = `
Total de respostas: ${totalRespostas}
Sim: ${quantidadeSim} (${porcentagemSim}%)
Não: ${quantidadeNao} (${porcentagemNao}%)
`;

// RESULTADO
alert(resultadoEnquete);

// MOSTRA OS DETALHES NO CONSOLEEE
console.log("Detalhes da Enquete:");
console.log("Pergunta:", perguntaEnquete);
console.log("Respondentes:");
respostas.forEach(resposta => {
    console.log(`Nome: ${resposta.nome}, Resposta: ${resposta.resposta}`);
});