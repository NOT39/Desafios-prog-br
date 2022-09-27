// Callbacks são uma maneira de inserir funções como argumentos de uma função
let usuarios = ['Adriano', 'Marcia', 'José'];

function insUsuario(nome, callback){
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000);
}

function listUsuarios(){
    console.log(usuarios);
}

insUsuario('Henrique', listUsuarios);


//Promises são callbacks com tratamento de erro
let pUsuarios = ['Adriano', 'Marcia', 'José'];

function pListUsuarios(){
    console.log(pUsuarios);
}

function pInsUsuario(nome){

    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            pUsuarios.push(nome);
            
            let error = false;
            if(!error){
                resolve()
            }
            else{
                reject({msg: 'Um erro aí'})
            }
        }, 1000)
    });

    return promise;
}

pInsUsuario('Henrique')
    .then(pListUsuarios)
    .catch((error) => {
        console.log(error.msg);
    });


// Async Await faz com que o programa espere até que uma função seja concluída para passar para o próximo passo

async function executar(){

    await pInsUsuario('Joberson');
    pListUsuarios();

}

executar();