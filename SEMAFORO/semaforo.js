
const img = document.getElementById('img');
const buttons = document.getElementById('buttons');


const trafficLght =(event) =>{
console.log(event.target.id);


}



buttons.addEventListener ('click', trafficLght);
