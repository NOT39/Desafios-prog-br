// Carne - 400 gr por pessoa          + de 6hrs - 650gr
// Cerveja - 1200 ml por adulto          + de 6hrs - 2000ml
// Bebida - 1000ml por pessoa             + de 6hrs - 1500ml

// Crianças valem por 0,5

function Calcular(){
    let adultos = parseInt(document.getElementById("adultos").value);
    let criancas = parseInt(document.getElementById("criancas").value);
    let horas = parseFloat(document.getElementById("horas").value);

    carne = document.getElementById("carne");
    cerveja = document.getElementById("cerveja");
    bebida = document.getElementById("bebida");

    if (horas <= 6){
        carne.textContent = (adultos * 0.4) + (criancas * 0.2);
        cerveja.textContent = adultos * 1.2;
        bebida.textContent = adultos + (criancas * 0.5)
    }
    else {
        carne.textContent = (adultos * 0.65) + (criancas * 0.325);
        cerveja.textContent = adultos * 2;
        bebida.textContent = (adultos * 1.5) + (criancas * 0.75)
    }

    document.getElementsByClassName("resultado")[0].style.display = "inline";

}