const verde = document.getElementById('verde');
const amarelo = document.getElementById('amarelo');
const vermelho = document.getElementById('vermelho');
const automatico = document.getElementById('automatico');
const picture = document.getElementById('imagem');


function esverdear(){
picture.src='./images/verde.png';
}
function amarelar(){
picture.src='./images/amarelo.png';
}
function avermelhar(){
picture.src = './images/vermelho.png';
}


verde.addEventListener('click', esverdear);
vermelho.addEventListener ('click' , avermelhar);
amarelo.addEventListener ('click', amarelar)