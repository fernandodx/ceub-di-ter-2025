//comentario é //
var ola = "Ola Mundo";
console.log(ola);

function log(valor){
    console.log(valor);
}
//tipo de vairiáveis
let valor = 10;
log(typeof valor);
let palavra = "Nome";
log(typeof palavra)
let is0k = true;
log(typeof is0k)

let meuObj = {}; //object
let meuArrey = []; //array
let nulo = null; //nulo
let variavelFlamengo; //Undefined

//Escopo de variável
function compararEscopo(){
    if(true){
        var varDentro = "Var dentro do bloco";
        let letDentro = "let denrto do bloco";
        const constDentro = "Const dentro do bloco";
    
        log(varDentro); //Funciona
        log(letDentro); //Funciona
        log(constDentro); //Funciona
    }
    log(varDentro) ;//Funciona
 //   log(letDentro); //não func
 //   log(constDentro); //não func
}
compararEscopo();
//operação simples
const n1 = 1;
const n2 = 5;
const valorNumeroStr = "5";

log(n1 + n2); //6
log(n1 - n2); //-4
log(n1 / n2); //0.2
log(n1 * n2); //5

//Operadotes lógicos
log(n1 == n2); //false
log(n2 == valorNumeroStr); //True
log(n2 === valorNumeroStr) //False 
log((n2>n1 || n2>n1)&& 1> 2) //false

//Manipulação de arrays

let frutas =["maçã","Banana","Laranja"];
log(frutas.length); //3
log(frutas[1]); //Banana

//adiciona um novo item
frutas.push("Manga");

log(frutas);
 
//Remove o ultimo item

frutas.pop();
log(frutas);

//estruturas condicionais

const idade = 18;
if (idade>= 18) {
    log("Sou Adulto");
} else if (idade>=2){
    log("sou Criança")
} else{
    log("sou bebê")
}

//estrutura de repetição
for(let loop = 0; loop < 5; loop++){
    log(`meu valor no loop: ${loop}`);
}

let valorWhile = 0;
while(valorWhile < 5){
    log(`meu valor no while: ${valorWhile}`);
    valorWhile++; //valor recebe ele mesmo +1 
}

//Funções Assíncronas premitem executar operações em paralelo

async function  buscarDados() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dados Retornados"), 4 * 1000);
    });
}
async function executarBusca() {
    log("########## BUSCANDO DADOS ##########");
    let resultado = await buscarDados(); 
    log(resultado);  
}

executarBusca();