function tirarMedia (notas){
    var somaNotas = 0;
    for (var nota of notas){
        somaNotas += parseFloat(nota);
    }
    media = (somaNotas / 2).toFixed(1);
    return media;
}

function condicao(media){
    if (media >= 6){
        return 'Aprovado';
    }
    else if (media >= 4){
        return 'Recuperação';
    }
    else {
        return 'Reprovado';
    }
}

function adicionarAluno(){
    var nome = prompt('Qual o nome do aluno? ');
    var notas = [prompt('Qual a primeira nota? '), prompt('Qual a segunda nota?')];
    var media = tirarMedia(notas);
    var aprovado = condicao(media);
    return [nome, notas, media, aprovado]
}

var alunos = [];
while (true){
    alunos.push(adicionarAluno());

    var resp = '';
    while (resp != 'S' && resp != 'N'){
        resp = (prompt('Quer adicionar um novo aluno? [S/N] ')).toUpperCase();
    }
    if (resp == 'N'){
        break;
    }
}

console.log(alunos);