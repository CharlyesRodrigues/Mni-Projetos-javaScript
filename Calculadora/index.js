'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id *=tecla]');
const operadores = document.querySelectorAll('[id *=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;

const operadorPendente = () => operador !== undefined;

const calcular = () => {
    if (operadorPendente()) {
        const numeroAtual = parseFloat(display.textContent);
        novoNumero = true;
    const resultado = eval (`${numeroAnterior} ${operador} ${numeroAtual}`);
    atualizarDisplay(resultado);
        
    /* Comando abaixo Substituido pelo comando eval acima
       
       
         if (operador == '+') {
            atualizarDisplay(numeroAnterior + numeroAtual);

        } else if (operador == '-') {
            atualizarDisplay(numeroAnterior - numeroAtual);

        }else if (operador == '*') {
            atualizarDisplay(numeroAnterior * numeroAtual);

        } else if (operador == '/') {
            atualizarDisplay(numeroAnterior / numeroAtual);

        }*/

    }

}

const atualizarDisplay = (texto) => {

    if (novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    } else {
        display.textContent += texto;
    }

}


const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);


/** ForEach captura o evento de cada botão  */
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));


const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent);
        
    }
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));

const ativarIgual =()=>{
calcular();
operador = undefined;

}

document.getElementById('igual').addEventListener('click', ativarIgual)



const  limparDisplay =()=>  display.textContent =''; 

document.getElementById('limparDisplay').addEventListener('click', limparDisplay);

const limparCalculo = () => {
limparDisplay();
operador = undefined ;
novoNumero = true;
numeroAnterior = undefined ;   

}

document.getElementById('limparCalculo').addEventListener('click', limparCalculo);

const removerUltimoNumero = () => display.textContent = display.textContent.slice( 0 ,-1);


document.getElementById('backspace').addEventListener('click',removerUltimoNumero );