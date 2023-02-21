const lampada = document.getElementById('lamapada');
const ligando = document.getElementById('ligar');
const desligando = document.getElementById('desligar');
const quebrar = document.getElementById('lamapada');


function ligar(){

    alert ("Alguém esta tentando me ligar")
}
function desligar(){

    alert ("Alguém esta tentando me desligar")
}


ligando.addEventListener('click', ligar)
desligando.addEventListener('click',desligar)