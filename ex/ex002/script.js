function calcMedia (){
    var somaNotas = 0;
    for (var nota of this.notas){
        somaNotas += nota;
    }
    return somaNotas / this.notas.length;
}

var aluno = {
    nome: 'Not',
    notas: [8.5, 9, 6],
    media: calcMedia
}



console.log(aluno.notas[1]);
console.log(aluno.media());

aluno.matricula = 123456;
console.log(aluno);

var controle = new Object;
controle.largura = 5
controle.altura = 15
controle.profundidade = 2
console.log(controle)