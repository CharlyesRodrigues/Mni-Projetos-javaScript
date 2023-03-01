'use strict';

/* Criando um json */

const letras = {
'A': 'boom.wav',
'S': 'clap.wav',
'D': 'hihat.wav',
'F': 'kick.wav',
'G': 'openhat.wav',
'H': 'ride.wav',
'J': 'snare.wav',
'k': 'tink.wav',
'L': 'tom.wav' 

}




/**Criando um elemento HTML */
 const criarDiv = (texto) => {

 const div = document.createElement('div');
 div.classList.add('key');
 div.textContent = texto;
 div.id = texto;
 document.getElementById('container').appendChild(div);


 }

 const exibir = (sons) => {
Object.keys(sons).forEach(criarDiv);


 }


 const tocarSom = (som) =>{

    const audio =  new Audio(`./sound/${letras[som]}`);
      audio.play();
}

 const ativarDiv =(evento ) =>{
const som = evento.target.id;
tocarSom (som);
 }
 
 exibir(letras);
 document.getElementById('container').addEventListener('click', ativarDiv);


