let jogador = document.getElementById('jogador');

let xInicial = 0;
let yInicial = 0;

function moverJogadorPara(x,y){
    let posX = x + "px";
    let posY = x + "px";

    jogador.style.top = posY;
    jogador.style.left = posX;
}

setInterval(function(){
    moverJogadorPara(xInicial++, yInicial++);
}, 5);