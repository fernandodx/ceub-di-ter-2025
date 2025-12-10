var ola = "Olá Mundo";
console.log(ola);

function log(valor){
    console.log(valor);
}

let valor = 10;
log(typeof valor);

let palavra = "Nome";
log(typeof palavra);

let isOk = true;
log(typeof isOk);

let meuObj = {}; //Object
let meuArray = {}; //Lista
let nulo = null;
let variavelFlamengo; //Undefined

//Escopo de Variável
function compararEscopo(){
    if(true){
        var varDentro = "Var dentro do bloco";
        var letDentro = "Let dentro do bloco";
        const constDentro = "Const dentro do bloco";

        log(varDentro);
        log(letDentro);
        log(constDentro);
    }
    log(varDentro);
    //log(letDentro);
    //log(constDentro);

}
compararEscopo();

//Operações Simples

const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1+n2);
log(n1-n2);
log(n1/n2);
log(n1*n2);

//Operadores Lógicos
log(n1 == n2); //false
log(n2 == valorNumericoStr); //true
log(n2 === valorNumericoStr); // false
log(n2 > n1 || n2 >  n1) && 1 > 2; // false

//Manipulação de arrays

let frutas = ["Maçã", "Banana", "Laranja"];
log(frutas.length);
log(frutas[1]);

frutas.push("Manga")

log(frutas);

//Remove o ultimo item

frutas.pop();

log(frutas);

//Estruturas Condicionais 
const idade = 18
if (idade >= 18){
    log("Sou Adulto")
}
else if (idade >= 2){
    log("Sou criança");
}
else {
    log("Sou bebê")
}

//Estrutrua de repetição

for (let loop = 0; loop < 5; loop++) {
    log(`Meu valor no loop: ${loop}`);
}

let valorWhile = 0;
while(valorWhile < 5){
    log(`Meu valor no while: ${valorWhile}`)
    valorWhile++;
}

//Funções Assícronas permitem executar operações em paralelos

async function buscarDados() {
    return new Promise((resolve) => {});{
        setTimeout(() => resolve("Dados Retornados"), 4 * 1000)

    }
    
}

async function executarBusca(){
    log("###### BUSCANDO DADOS .... ######");
    let resultado = await buscarDados();
    log (resultado);
}

executarBusca();