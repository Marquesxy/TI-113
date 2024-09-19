/*Ex1: Crie um sistema de cadastro de funcionários usando
funções onde devem ser lidos os nomes, idades e salários de até 
, considerando os seguintes critérios:
• Considere que o usuário não pode informar conteúdo vazio. ✅
• Nomes completos válidos (nome e sobrenome). ✅
• Idades válidas e maiores de 14 anos e menores de 120 anos.
• Os salários informados devem ser válidos e não podem ser inferiores a R$ 2000,00 e acima de 20000,00.
• Deve-se cadastrar no mínimo 5 pessoas.*/
/*function SistemaCad() {
    let nomes = []
    let idade = []
    let salarios = []

    for (let i = 0; i < 5; i++) {
        let nome = prompt(`Digite o nome e o sobrenome da pessoa ${i + 1}`);
        nome = nome.trim();

        while (nome === " " || nome.indexOf(" ") === -1) {
            alert("Nome incorreto")
            nome = prompt(`Informe o ${i + 1}º  nome novamente:`);
        }
        nomes.push(nome)
    }
    let salario = prompt("Informe um Salário:");
    while (isNaN(salario) || salario < 2000 || salario > 20000) {
        alert("Salário Inválido");
        salario = prompt(`Informe o sálario de ${nome} novamente:`);
    }
    salarios.push(parseInt(salario));
}
SistemaCad(); 
*/
function SistemaCad (nomes = [], salarios = []) {

    let continuar = false;
    let contador = 0;
    do {
        contador++;
        let nome = prompt("Informe um Nome:");
        nome = nome.trim()
        while (nome === " " || nome.indexOf() ===-1) {
            alert("Nome Inválido");
            nome = prompt("Informe um Nome novamente:");
        }
        nomes.push(nome);

        let salario = prompt(`Informe o Salário do funcionario ${nome}`);
        while (isNaN(salario)) {
            alert("Salário Inválido");
            salario = prompt(`Informe o sálario de ${nome} novamente:`);
        }
        salarios.push(parseFloat(salario));

        let idade = prompt(`Informe o Salário do funcionario ${nome}`);
        while (isNaN(idade)) {
            alert("Salário Inválido");
            idade = prompt(`Informe o sálario de ${nome} novamente:`);
        }
        salarios.push(parseFloat(salario));

        if (contador < 50) {
            continuar = confirm("Deseja continuar o cadastro?");
        } else {
            continuar = false;
        }

    } while (continuar == true);

}