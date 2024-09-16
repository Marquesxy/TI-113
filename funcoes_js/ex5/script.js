/*Ex5: Crie um algoritmo usando funções que leia até 50 números inteiros
e armazene-os numa lista de números, considere as premissas abaixo:
	• Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura.
	• Não pode informar números negativos.
	• Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50.
	• Ao final do cadastro ele tem um outro menu pra escolher exibir:
- A lista cadastrada, somente os pares, ou somente os impares?*/

function LeituraInteiro () {
    let LerNum = []
    let cinco = [5]
    let quinze = [15]
    let vinte5 = [25]
    let cinquenta = [50]
    let m 

    m = parseInt(prompt("Informe o numero de cadastro que deseja fazer (5, 15, 25 ou 50)"));
    if (m === 5)

    /*for (let i = 0; i < 50; i++) {
        let num = prompt(`Informe numero ${i + 1}`);
        
        if (num.trim() === "")
            alert("A caixa de entra esta vazia");
        else if (isNaN(num))
            alert ("O valor digitado não é um numero")

        else if (num)
            alert ("Não aceitamos numeros negativos ")
        }

    LerNum.push(num)
}
return LerNum
