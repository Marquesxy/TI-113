/*Ex1: Crie uma função que lê um vetor de 5 números inteiros 
e mostre-os, considere que o usuário não pode informar letras, 
palavras ou vazio. Alerte-o do erro e repita a leitura caso ocorra*/

function lerNumeros() {

    let lista = [];

    for (let i = 0; i < 5; i += 1) {

        let numero = "";
        
        do {
            numero = prompt("Digite um numero");
            if (numero.trim() === "") {
                alert("Está vazio!");
            }
            else if (isNaN(numero)) {
                alert("O valor digitado não é um número!");
            }
            else {
                lista.push(numero);
            }
        } while (numero.trim() === "" || isNaN(numero)) { }

    }
    return lista;

}

function MostrarNumeros(lista) {

    let mensagem = "";
    for (let i = 0; i < lista.length; i++) {

        let ultimaPosicao = (lista.length - 1); 
    
        if(i == ultimaPosicao)
            mensagem += lista[i] + ".";
        else
            mensagem += lista[i] + ", "; 

    }
    alert (mensagem);
}

let listaNumeros = lerNumeros();
MostrarNumeros(listaNumeros);