/*Ex1: Crie um sistema de cadastro de funcionários usando
funções onde devem ser lidos os nomes, idades e salários de até 
, considerando os seguintes critérios:
• Considere que o usuário não pode informar conteúdo vazio. ✅
• Nomes completos válidos (nome e sobrenome). ✅
• Idades válidas e maiores de 14 anos e menores de 120 anos.
• Os salários informados devem ser válidos e não podem ser inferiores a R$ 2000,00 e acima de 20000,00.
• Deve-se cadastrar no mínimo 5 pessoas.*/
function SistemaCad() {
    let nomes = []
    let idade = []
    let salario = []

    for (let i = 0; i < 5; i++) {
        let leitura = prompt(`Informe o nome e sobrenome da pessoa ${i + 1}`);
        
        leitura = leitura.trim()
        while (isNaN(leitura) === false || leitura.indexOf(" ") === -1) {
            alert("Nome invalido. Tente novamente");
            leitura = prompt(`Informe o ${i + 1}º  nome novamente:`);
            nomes.push(leitura)
        }

        idade = prompt(`Informe a idade da pessoa ${t + 1}`);
        while (isNaN(idade) || idade < 14 || idade > 120) {
            alert("Idade invalida. Tente novamente");
            idade = prompt(`Informe a ${i + 1}º  idade novamente:`);

        }
    }

}

SistemaCad();
