let tela = document.getElementById('tela');

let ctx = tela.getContext('2d');


// --------- LINE e RECT ---------

// ctx.moveTo(0,0);
// ctx.lineTo(250, 250);
// ctx.lineTo(500, 0);
// ctx.strokeStyle = "blue";
// ctx.lineWidth = 5;
// ctx.stroke();

// ctx.fillStyle = "orange";
// ctx.fillRect(0, 251, 100, 250);

// ctx.strokeStyle = "red";
// ctx.lineWidth = 1;
// ctx.strokeRect(200, 3, 100, 100)

// ctx.rect(400, 251, 100, 250);
// ctx.fillStyle = "gray";
// ctx.lineWidth = 2;
// ctx.strokeStyle = "purple";
// ctx.stroke();
// ctx.fill();
// ctx.clearRect(450, 301, 10, 10);



// --------- PATH ---------

// ctx.beginPath();

// ctx.lineWidth = 5;
// ctx.strokeStyle = "red";
// ctx.moveTo(0, 500);
// ctx.lineTo(500, 0);
// ctx.stroke();

// ctx.beginPath();

// ctx.lineWidth = 3;
// ctx.strokeStyle = "blue";
// ctx.fillStyle = "green";
// ctx.moveTo(0, 0);
// ctx.lineTo(400, 400);
// ctx.lineTo(300, 400);
// ctx.closePath();
// ctx.stroke();
// ctx.fill();



// --------- CIRCLE e ANIMAÇÕES ---------

// let circle = {
//     x : 250,
//     y : 250,
//     raio : 100,
//     inicio : 0,
//     fim : 0
// }
// Os ângulos são em radianos (???)

// function drawCircle(c){

//     ctx.beginPath();
//     ctx.rect(0, 0, 500, 500);
//     ctx.fillStyle = 'beige';
//     ctx.fill();

//     ctx.beginPath();
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = 5;
//     ctx.fillStyle = 'blue';
    
//     ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);
//     ctx.fill();
//     ctx.stroke();
// }

// setInterval(function(){

//     if(circle.fim < 2 * Math.PI){
//         circle.fim += 0.1;
//         circle.x += 1;
//     }

//     drawCircle(circle);

// }, 50)



// --------- IMAGENS ---------

// let img = document.getElementById('logo');
let img = new Image();
img.src = "./NotCoffe.png"

img.onload = desenharImg;

function desenharImg(){
    ctx.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2)
}
