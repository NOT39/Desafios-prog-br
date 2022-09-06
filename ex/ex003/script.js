// function criarAluno(nome, notas){

//     return {
//         nome: nome,
//         notas: notas,
//         media: function(){
//             var somaNotas = 0;
//             for (var nota of this.notas){
//                 somaNotas += nota;
//             }
//             return somaNotas / this.notas.length;
//         }
//     }
// }

function aluno(nome, notas){
    this.nome = nome;
    this.notas = notas;

    this.media = function (){
        var somaNotas = 0;
        this.notas.forEach(function(nota){
            somaNotas += nota;
        })
        return somaNotas / this.notas.length;
    }
}

// var turma = [
//     criarAluno('Henrique', [8, 8]),
//     criarAluno('José', [8, 9]),
//     criarAluno('Roberto', [7, 8])
// ]

// turma.forEach(function(elemento){
//     console.log(elemento);
// })

var a = new aluno('Henrique', [3, 4, 5]);
console.log(a.media());