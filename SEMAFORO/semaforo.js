
const img = document.getElementById('img');
const buttons = document.getElementById('buttons');


const trafficLght =(event) =>{

turnOn[event.target.id]();

}

/*  Criando um objeto com  arrow function*/
const turnOn = {

    'red' : ()=> img.src="./images/vermelho.png",
    'yellow' : ()=>img.src="./images/amarelo.png",
    'green' : ()=>img.src="./images/verde.png"

}


buttons.addEventListener ('click', trafficLght);