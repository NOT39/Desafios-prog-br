document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
});

function handleClick(event){

    let position = event.target.id;

    handleMove(position);
    updateSquares();
}


// Atualiza o tabuleiro pintando de acordo com o array "board"
function updateSquares(){

    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != ''){
            square.style.backgroundColor =  symbol;
        }
    })
}