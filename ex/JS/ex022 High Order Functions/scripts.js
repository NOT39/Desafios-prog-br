function novoAluno(nome, idade){
    return {nome, idade};
}

let alunos = [
    novoAluno('Mario', 23),
    novoAluno('José', 45),
    novoAluno('Felipe', 29),
    novoAluno('Roberto', 35)
]


function menor30(aluno){
    return aluno.idade < 30;
}

function nomeIdade(aluno){
    return aluno.nome + ' tem ' + aluno.idade + ' anos.';
}

function idadeTurma(total, aluno){
    return total + aluno.idade;
}

// Filter recebe um callback e retorna todos os valores que retornarem true
console.log(alunos.filter(menor30));


// Map executa o callback para cada elemento no array e cria um novo array com o resultado
console.log(alunos.map(nomeIdade));

// Reduce junta todos os valores em um só
console.log(alunos.reduce(idadeTurma, 0))


// Atribuir um objeto ou array a uma variável a torna uma referência do objeto/array
// Para transferir o valor de um objeto ou array para uma variável é necessário usar o método ".slice" para array e a função "Object.assign" para objeto ou utilizar o Spread Operator.

// Spread Operator pode transferir o valor de um objeto ou array para um variável e também pode juntar vários objetos/arrays

var pessoa = {
    nome: "Cláudia",
    idade: 37
}

var contato = {
    email: "claudia@gmail.com",
    telefone: 45999999999
}

var copia = {...pessoa, cidade: "São Paulo", ...contato};
copia.nome = "Fernando";
console.log(pessoa.nome, copia.nome);


// Desestruturando um objeto

var { idade, email } = copia;
console.log(idade);