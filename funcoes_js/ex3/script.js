/*Ex3:Crie um algoritmo usando funções que faça uma
leitura de 10 letras em um vetor, e após verificar quantas
vogais foram lidas e mostre somente consoantes no alerta.*/

function lerLetras() {
    let letras = []; // Corrigido: nome da variável para letras

    // Leitura de 10 letras
    for (let i = 0; i < 10; i++) {
        let letra;
        do {
            letra = prompt(`Informe a letra ${i + 1}:`).toUpperCase(); // Leitura e conversão para maiúsculo
            if (letra.length !== 1 || !isNaN(letra)) {
                alert("O valor digitado não é uma letra! Por favor, informe uma única letra.");
            }
        } while (letra.length !== 1 || !isNaN(letra)); // Verificação se é uma única letra

        letras.push(letra); // Adiciona a letra ao array
    }

    return letras; // Retorna o array de letras
}

function processarLetras(letras) {
    let msgConsoantes = "";
    let contVogais = 0;
    let vogais = ['A', 'E', 'I', 'O', 'U']; // Lista de vogais em maiúsculo

    // Processa cada letra
    for (let letra of letras) {
        if (vogais.includes(letra)) {
            contVogais++;
        } else {
            msgConsoantes += letra + "\n";
        }
    }

    // Exibe apenas as consoantes
    alert("Consoantes:\n" + msgConsoantes);

    // Exibe o total de vogais no console
    console.log("Total de Vogais:", contVogais);
}

// Executa as funções
let letras = lerLetras();
processarLetras(letras);
