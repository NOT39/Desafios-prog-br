let video = document.getElementById("video1");

function retroceder(){
    video.currentTime -= 15;
}

function avancar(){
    video.currentTime += 15;
}

function diminuirVel(){
    video.playbackRate -= 0.1;
}

function aumentarVel(){
    video.playbackRate += 0.1;
}

function iniciar(){
    video.play();
}

function parar(){
    video.pause();
    video.currentTime = 0
}
