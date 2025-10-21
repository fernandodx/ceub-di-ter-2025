//Se precisar comentar use //

var ola = "Ola Mundo";
console.log(ola);

function log(valor) {
  console.log(valor);
}

// Tipos de variáveis
let valor = 10;
log(typeof valor);

let palavra = "Nome";
log(typeof palavra);

let isOk = true;
log(typeof isOk);

let meuObj = {}; //Object
let meuArray = []; //Array
let nulo = null; //Null
let variavelFlamengo; //Undefined

//Escopo de variável
function compararEscopo() {
  if (true) {
    var varDentro = "Var dentro do bloco";
    let letDentro = "Let dentro do bloco";
    const constDentro = "Const dentro do bloco";

    log(varDentro); //Funciona
    log(letDentro); //Funciona
    log(constDentro); //Funciona
  }
  log(varDentro); //Fuciona
  //  log(letDentro); //Não Funciona esta fora do Escopo
  //  log(constDentro); //Não funciona esta fora do Escopo
}
compararEscopo();

//Operações Simples

const n1 = 1;
const n2 = 5;
const valorNumeroStr = "5";

log(n1 + n2); //6
log(n1 - n2); //-4
log(n1 / n2); //0.2
log(n1 * n2); //5

//Operadores Lógicos
log(n1 == n2); //false
log(n2 == valorNumeroStr); //true
log(n2 === valorNumeroStr); //false

log((n2 > n1 || n2 > n1) && 1 > 2); //false

//Manipulação de arrays

let frutas = ["maçã", "Banana", "Laranja"];
log(frutas.length); //3
log(frutas[1]); // Banana

//Adiciona novo item
frutas.push("Manga");

log(frutas);

//Remove ultima item
frutas.pop();

log(frutas);

//Estruturas condicionais
const idade = 18;
if (idade >= 18) {
  log("Sou Adulto");
} else if (idade >= 2) {
  log("Sou criança");
} else {
  log("Sou bebê");
}

//Estrutura de repetição
for (let loop = 0; loop < 5; loop++) {
  log(`Meu valor no loop: ${loop}`);
}

let valorWhile = 0;
while (valorWhile < 5) {
  log(`Meu valor no while: ${valorWhile}`);
  valorWhile++; // valor recebe ele mesmo + 1
}

//Funções Assícronas permitem executar operações em paralelo
async function buscarDados() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Dados Retornados"), 4 * 1000);
  });
}

async function executarBusca() {
  log("###### BUSCANDO DADOS .... ######");
  let resultado = await buscarDados();
  log(resultado);
}

executarBusca();
