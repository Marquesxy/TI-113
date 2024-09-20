/*Ex1: Crie um sistema de cadastro de funcionários usando
funções onde devem ser lidos os nomes, idades e salários de até 
, considerando os seguintes critérios:
• Considere que o usuário não pode informar conteúdo vazio. ✅
• Nomes completos válidos (nome e sobrenome). ✅
• Idades válidas e maiores de 14 anos e menores de 120 anos.✅
• Os salários informados devem ser válidos e não podem ser inferiores a R$ 2000,00 e acima de 20000,00.
• Deve-se cadastrar no mínimo 5 pessoas.*/

function SistemaCad(nomes = [], salarios = [], idades = []) {

    let continuar = false;
    let contador = 0;
    do {
        contador++;
        let nome = prompt("Informe um Nome:");
        nome = nome.trim();
        while (nome === "" || nome.indexOf(" ") === -1) {
            alert("Nome Inválido");
            nome = prompt("Informe um Nome novamente:");
        }
        nomes.push(nome);

        let salario = prompt(`Informe o Salário do funcionario ${nome}`);
        while (isNaN(salario) || salario < 2000 || salario > 20000) {
            alert("Salário Inválido");
            salario = prompt(`Informe o sálario de ${nome} novamente:`);
        }
        salarios.push(parseFloat(salario));

        let idade = prompt(`Informe a idade do funcionario ${nome}`);
        while (isNaN(idade) || idade < 14 || idade > 120) {
            alert("Salário Inválido");
            idade = prompt(`Informe a idade de ${nome} novamente:`);
        }
        idades.push(parseFloat(idade));

        if (contador > 4 && contador < 100) {
            continuar = confirm("Deseja continuar o cadastro?");
        } else if (contador == 100) {
            continuar = false;
        } else {
            continuar = true;
        }

        document.write("<h1>Dados Cadastrais</h1>")
        let mensagem = "";
        for (let i = 0; i < nomes.length; i++) {
            mensagem += "Nome:" + nomes[i] + "<br>";
            mensagem += "Idade:" + idades[i] + "<br>"
            mensagem += "Salario: R$" + salarios[i] + "<br></br>"
        }
        document.writeln(mensagem);
    } while (continuar == true);
}
SistemaCad();