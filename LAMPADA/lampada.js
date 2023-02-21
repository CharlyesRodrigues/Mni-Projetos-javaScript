const lampada = document.getElementById('lampada');
const ligando = document.getElementById('ligar');
const desligando = document.getElementById('desligar');
const quebrando = document.getElementById('lampada');


function ligar(){

   lampada.src = "./images/ligada.jpg";
   lampada.alt = "lâmpada ligada";
}
function desligar(){
    lampada.src = "./images/desligada.jpg";
    lampada.alt = "lâmpada desligada";
}


ligando.addEventListener('click', ligar);
desligando.addEventListener('click',desligar);

lampada.addEventListener('mouseover', ligar);
lampada.addEventListener('mouseleave', desligar);