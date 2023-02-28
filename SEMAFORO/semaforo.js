
const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;

const trafficLight = (event) => {

    turnOn[event.target.id]();
// Antes do comando acima podemos veirificar
// os eventos de cada botão , através do coando
// a seguir console.log(event)
 }

/*  Criando um objeto com  4   function*/
const turnOn = {

    'red':       () => img.src = "./images/vermelho.png",
    'yellow':    () => img.src = "./images/amarelo.png",
    'green':     () => img.src = "./images/verde.png",
    'automatic': () => setInterval(changeColor, 1000)

}

const changeColor = () => {

    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();

}

const nextIndex = () => {
    /**
     * 
     * Exemplo de ternário com a mesma funcionalidade do IF a seguir
     * 
     *  colorIndex = colorIndex < 2 ? ++ colorIndex:0; 
     * 
     */

    if (colorIndex < 2) {

        colorIndex++

    } else {

        colorIndex = 0;
    }


}






buttons.addEventListener('click', trafficLight);
