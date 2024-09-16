/*Ex4: Crie um algoritmo usando funções que tenha um menu de cadastro
de nomes e salários bruto de até 50 pessoas, e ao final, mostre os nomes,
salários brutos e os salários líquidos de todos que foram lidos, considerando
10% de INSS a descontar.*/

function SalarioPessoas() {
    const salarioBruto = [];
    const nomes = [];
    const INSS = 0.10;
    const maxPessoas = 50;

    for (let i = 0; i < maxPessoas; i++) {
        let nome = prompt("Insira o nome da pessoa (ou deixe em branco para terminar)");
        
        if (nome === "") break; // Se o nome estiver em branco, encerra o cadastro

        let salario = parseFloat(prompt("Informe o salário bruto da pessoa"));

        // Valida se o salário é um número positivo
        if (isNaN(salario) || salario <= 0) {
            alert("Salário inválido. Tente novamente.");
            i--; // Decrementa o índice para repetir a iteração atual
            continue; // Pula para a próxima iteração
        }

        // Adiciona os dados aos arrays
        nomes.push(nome);
        salarioBruto.push(salario);
    }

    return { nomes, salarioBruto }; // Retorna os arrays como um objeto
}

function Teste(dados) {
    const { nomes, salarioBruto } = dados;
    const INSS = 0.10;

    document.write("<h2>Dados das Pessoas</h2>");
    document.write("<table border='1'><tr><th>Nome</th><th>Salário Bruto</th><th>Salário Líquido</th></tr>");

    for (let i = 0; i < nomes.length; i++) {
        const bruto = salarioBruto[i];
        const liquido = bruto - (bruto * INSS);
        document.write(`<tr><td>${nomes[i]}</td><td>${bruto.toFixed(2)}</td><td>${liquido.toFixed(2)}</td></tr>`);
    }

    document.write("</table>");
}

// Executa as funções
const dados = SalarioPessoas();
Teste(dados);