// Tipos de dados

// Boolean
// Null
// Undefined
// Number
// String 

// Operações aritméticas

// + Adição
// - Subtração
// * Multiplicação
// / Divisão
// % Módulo
// ++ Incremento
// -- Decremento
// ** Exponenciação

// Comparação

// === Compara também o tipo
// !== Não igual valor ou não igual tipo

// Operadores lógicos

// && e
// || ou
// ! Negativo

// Transformando Strings em Números

// parseInt  Transforma a string em inteiro
// parseFloat  Trasnforma a string em real

// Prompt e Alert

// Alert  Mostra uma mensagem na tela
// Prompt  Mostra uma mensagem na tela e recebe um input

// Operador Ternário

// ? Verifica se algo é verdade
// : Diz o que acontece se não for verdade

// Variáveis

// var   - Escopo global
// let   - Escopo local
// const - Pode ser modificada, mas não reatribuída e escopo local.

var a = 5;
var b = 2;
var idade = 18;

console.log(a + b);
console.log(a);
console.log(!true);

if (idade >= 35)
    console.log('Pode');

else if (idade >= 18)
{
    console.log('Pode');
    console.log('Mostre a identidade!');
}
else
{
    console.log('Não pode');
    console.log('Volte futuramente!');
}

var pode = idade >= 18 ? true : false;
console.log(pode);

switch(pode) {
    case true:
        console.log('Pode! Qual a sua escolha?');
        break;

    case false:
        console.log('Não pode! Volte futuramente!');
        break;

    default:
        console.log('Como isso aconteceu?');
        break;
}

for (var i = 1; i <= b; i++){
    console.log(i);
}

var numero = parseInt(Math.random() * 100);

while(numero < 90){
    numero = parseInt(Math.random() * 100);
}

console.log(numero);

var vetor = new Array(1, 3, 5);
console.log(vetor[0]);

var alunos = ['Henrique', 'David'];
console.log(alunos);
console.log(alunos.length);


// Varredura de arrays

for (var j = 0; j < alunos.length; j++){
    console.log('O ' + (j + 1) + 'º aluno é:', alunos[j]);
}

for (var ind in alunos){
    console.log(alunos[ind]);
}

for (var aluno of alunos){
    console.log(aluno);
}

console.log(media([3, 0, 6]));

function media(notas){
    var somaNotas = 0;
    for (var nota of notas){
        somaNotas += parseInt(nota);
    }
    var media = (somaNotas / notas.length).toFixed();
    return media;
}

console.log(media([5, 10, 10]));
console.log(media([40, 3, 37, 0]));

// Outras maneiras de criar função

// Função anônima

// var med = function(notas){
//      faça tal coisa;
// }

// Função de seta

// var med = (notas) => {
//      faça tal coisa;
//}