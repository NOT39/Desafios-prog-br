let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let gameOver = false;
let symbols = ['red', 'blue'];

// Adiciona o valor do player ao tabuleiro
function handleMove(position) {

    if (gameOver) {
        console.log('O jogo acabou!');
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];

        if (playerTime == 0) {
            playerTime = 1;
        } else {
            playerTime = 0;
        }

        isWin();

    } else {
        alert('Essa posição já esta ocupada!');
    }
}

function isWin() {
    winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    winCondition.forEach(element => {
        let squareA = board[element[0]];
        let squareB = board[element[1]];
        let squareC = board[element[2]];
        console.log(squareA);

        if (squareA != '') {
            if (squareA == squareB && squareB == squareC) {
                gameOver = true;
            }
        }
    });
}