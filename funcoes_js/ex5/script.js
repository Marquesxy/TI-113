/*
Ex5: Crie um algoritmo usando funções que leia até 50 números inteiros e armazene-os numa lista de números, considere as premissas abaixo:
	• Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura.
	• Não pode informar números negativos.
	• Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50.
	• Ao final do cadastro ele tem um outro menu pra escolher exibir:
		- A lista cadastrada, somente os pares, ou somente os impares.
*/
function LeituraInteiros() {
    let numeros = [];
    let quantidade = 0;
    
    // Menu para escolher o número de cadastros
    do {
        quantidade = parseInt(prompt("Informe o número de cadastros que deseja fazer (5, 15, 25 ou 50)"));
    } while (![5, 15, 25, 50].includes(quantidade));

    // Função para ler números inteiros válidos
    for (let i = 0; i < quantidade; i++) {
        let num;

        while (true) {
            num = prompt(`Informe o número ${i + 1} (somente números inteiros não negativos)`);

            // Verifica se o input não é um número ou é um número negativo
            if (num.trim() === "") {
                alert("A caixa de entrada está vazia. Tente novamente.");
            } else if (isNaN(num)) {
                alert("O valor digitado não é um número. Tente novamente.");
            } else if (Number(num) < 0) {
                alert("Não aceitamos números negativos. Tente novamente.");
            } else {
                // Converte o valor para número inteiro e armazena na lista
                numeros.push(parseInt(num));
                break;
            }
        }
    }
    return numeros;
}

function exibirMenu(lista) {
    let escolha;
    
    // Menu para escolha de exibição
    do {
        escolha = parseInt(prompt("Escolha o que deseja exibir:\n1. Lista cadastrada\n2. Somente pares\n3. Somente ímpares"));
    } while (![1, 2, 3].includes(escolha));

    // Exibe a lista com base na escolha
    switch (escolha) {
        case 1:
            document.write("<h2>Lista Cadastrada:</h2>");
            document.write("<p>" + lista.join(", ") + "</p>");
            break;
        case 2:
            let pares = lista.filter(num => num % 2 === 0);
            document.write("<h2>Números Pares:</h2>");
            document.write("<p>" + pares.join(", ") + "</p>");
            break;
        case 3:
            let impares = lista.filter(num => num % 2 !== 0);
            document.write("<h2>Números Ímpares:</h2>");
            document.write("<p>" + impares.join(", ") + "</p>");
            break;
    }
}

// Executa as funções
const numerosCadastrados = LeituraInteiros();
exibirMenu(numerosCadastrados);
