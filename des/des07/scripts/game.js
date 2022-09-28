let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let gameOver = false;
let symbols = ['red', 'blue']

// Adiciona o valor do player ao tabuleiro
function handleMove(position){

    if(gameOver){
        return;
    }

    if (board[position] == ''){
        board[position] = symbols[playerTime];

        if (playerTime == 0){
            playerTime = 1;
        }else{
            playerTime = 0;
        }
    } else {
        alert('Essa posição já esta ocupada!');
    }
}