// Se precisar comentar use //

var ola = "Hello World"
console.log(ola);

function log(valor){
    console.log(valor);
}

// Tipos de variaveis 
let valor = 10;
log(typeof valor);

let palavra = "Nome";
log(typeof palavra);

let is0k = true;
log(typeof is0k);

let meuObj = {}; //Object
let meuArray = {}; //Array
let nulo = null;
let variavelFlamengo; // Undefined

// Escopo de variavel
function compararEscopo() {
    if (true){

    var varDentro = "Var dentro do bloco";
    let letDentro = "let dentro do bloco";
    const constDentro = "Const dentro do bloco";

    log(varDentro); // funciona
    log(letDentro ); // funciona
    log(constDentro); // funciona
    }

    log(varDentro); //Funciona
    //log(letDentro );//Não funciona fora do escopo
    //log(constDentro);//Não funciona fora do escopo
    
}
compararEscopo();


// Operação Simples

const n1 = 1;
const n2 = 5;
const valorNumeroStr = "5";

log(n1 + n2); //6
log(n1 - n2); // -4
log(n1 / n2); //0,2
log(n1 * n2); //5

//Operadores Lógicos
log(n1 == n2);
log(n2 == valorNumeroStr);
log(n2 === valorNumeroStr);

log(n2 > n1 || n2 > n1 && 1 > 2)

//Manipulação de arrays

let frutas = ["maça", "Banana", "Laranja"];
log(frutas.length); //3
log(frutas[1]);
frutas.push("Manga");

log(frutas);

//Remove item
frutas.pop();

log(frutas);

//Estrutras condicionais
const idade = 18;
    if (idade >= 18){
        log("Sou Adulto");
    } else if (idade >= 2){
        log("Sou criança");
    }else{
        log("Sou bebe")
    }

//Estrutura de repetição
for(let loop =0; loop < 5; loop++){
    log(`Meu Valor no loop: ${loop}`);

}

let valorWhile = 0;
while(valorWhile < 5){
    log(`Meu valor no while: ${valorWhile}`);
    valorWhile ++; //valor recebe ele mesmo
}

//Funções Assíncronas permitem executar operações em paralelo
async function buscarDados(params) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dados Retornados"), 4*1000);
    });
}
async function executarBusca() {
    log("###### BUSCANDO DADOS ......... ######");
    let resultado = await buscarDados();
    log(resultado);
}

executarBusca();

const meuMetodo = function exemploMetodo() {
    log("Executei a function");
};

log(meuMetodo);
const objTeste = {
    oi(){
        log("OI!!");
    },
    xau(){
        log("XAU");
    },
};

objTeste.oi();
objTeste.xau();

//Manipulação do DOM
//Aqui criamos um elemento dinamicamente e o add no body
document.addEventListener("DOMContentLoaded", () => {let titulo = document.createElement("h2");
    titulo.innerText = "Olá DOM";
    document.body.appendChild(titulo);
})

function toggleImagem(){
    let img = document.getElementById("minhaImagem");
    img.style.display = img.style.display === 'none' ? "block" : "none";
}

function mostrarValorCombo(){
    let combo = document.getElementById("meuCombo");
    alert("Combo selecionada: " + combo.value);
}