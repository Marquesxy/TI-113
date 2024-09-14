/*Ex4: Crie um algoritmo usando funções que tenha um menu de cadastro
de nomes e salários bruto de até 50 pessoas, e ao final, mostre os nomes,
salários brutos e os salários líquidos de todos que foram lidos, considerando
10% de INSS a descontar.*/

let nomes = [];
let salariosBrutos = [];
let salariosLiquidos = [];
let continuar = true;

function calcularSalarioLiquido(salarioBruto) {
   let salarioLiquido =  salarioBruto * 0.9;
    return salarioLiquido; // Desconto de 10% de INSS
}

function entrar() {
    if (nomes.length < 50) {
        let nome = prompt("Informe o nome:");
        let salarioBruto = parseFloat(prompt("Informe o salário bruto:"));
        let salarioLiquido = calcularSalarioLiquido(salarioBruto);

        nomes.push(nome);
        salariosBrutos.push(salarioBruto);
        salariosLiquidos.push(salarioLiquido);
    } else {
        alert("Limite de 50 pessoas atingido.");
    }
}

function resultado() {
    let resultado = "<h2>Nomes, Salários Brutos e Salários Líquidos:</h2><ul>";
    for (let i = 0; i < nomes.length; i++) {
        resultado += `<li>Nome: ${nomes[i]}, Salário Bruto: R$${salariosBrutos[i].toFixed(2)}, Salário Líquido: R$${salariosLiquidos[i].toFixed(2)}</li>`;
    }
    resultado += "</ul>";
    document.write(resultado);
}

while (continuar) {
    entrar();
    let opcao = prompt("Deseja continuar cadastrando? (1 - Sim, 2 - Exibir e sair)");
    if (opcao === "2") {
        resultado();
        continuar = false; // Para sair do loop após exibir os resultados
    } else if (opcao !== "1") {
        alert("Opção Inválida");
    }
}
