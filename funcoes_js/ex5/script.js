let letras = [];
let contador = 0;
let mensagem = "";

//leitura de uma letra no vetor de letras
for (let i = 0; i < 10; i++) {
    let letra = prompt("Informe uma Letra: ");
    letras.push(letra);
}

for (let j = 0; j < letras.length; j++) {
    //converto o texto pra maiúsculo
    let letra = letras[j].toUpperCase();
    //Verifico se tem alguma vogal
    let temA = (letra == "A"); // true ou false
    let temE = (letra == "E"); // true ou false
    let temI = (letra == "I"); // true ou false
    let temO = (letra == "O"); // true ou false
    let temU = (letra == "U"); // true ou false
    
    //se tiver alguma vogal ele não entra no if
    if ((temA || temE || temI || temO || temU) == false) {
        contador += 1;
        mensagem += letra + "\n";
    }
}
alert(mensagem + "\n" + "Teve " + contador + " Consoantes!");