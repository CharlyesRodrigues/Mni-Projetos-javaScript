const lampada = document.getElementById('lampada');
const ligando = document.getElementById('ligar');
const desligando = document.getElementById('desligar');
const quebrando = document.getElementById('lampada');



function isLampBroken() {

    return lampada.src.indexOf('quebrada') > - 1
}

function ligar() {
    if (!isLampBroken()) {
        lampada.src = "./images/ligada.jpg";
        lampada.alt = "lâmpada ligada";
    }
}

function desligar() {

    if (!isLampBroken()) {
        lampada.src = "./images/desligada.jpg";
        lampada.alt = "lâmpada desligada";
    }
}

function quebrar() {
    lampada.src = "./images/quebrada.jpg";
    lampada.alt = "lâmpada quebrada";

}


ligando.addEventListener('click', ligar);
desligando.addEventListener('click', desligar);

lampada.addEventListener('mouseover', ligar);
lampada.addEventListener('mouseleave', desligar);

quebrando.addEventListener('dblclick', quebrar);