function novoAluno(nome, idade){
    return {nome, idade};
}

let alunos = [
    novoAluno('Mario', 23),
    novoAluno('José', 45),
    novoAluno('Felipe', 29),
    novoAluno('Roberto', 35)
]

function nomeIdade(aluno){
    return aluno.nome + ' tem ' + aluno.idade + " anos.";
}

alunos.mapear = function (call){
    array = []
    for (elemento of this){
        array.push(call(elemento));
    }
    return array;
}

console.log(alunos.mapear(nomeIdade));



function idadeTurma(total, aluno){
    return total + aluno.idade;
}

alunos.reduzir = function(call, inicial){
    let total = inicial
    for(elemento of this){
        total = idadeTurma(total, elemento);
    }
    return total;
}

console.log(alunos.reduzir(idadeTurma, 0));