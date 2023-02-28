const imagens = [

{'id': '1' , 'url': './images/chrono.jpg'},

{'id': '2' , 'url': './images/inuyasha.jpg'},

{'id': '3' , 'url': './images/tenchi.jpg'},

{'id': '4' , 'url': './images/tenjhotenge.jpg'},

{'id': '5' , 'url': './images/yuyuhakusho.jpg'},

{'id': '6' , 'url': './images/ippo.png'},

]

const containerItems = document.querySelector('#container-items');


const loadImages = (imagens , container) => {

imagens.forEach (image =>{

container.innerHTML += `
<div class="item">
<img src= "${image.url}"
</div>

`

})

}

loadImages(imagens, containerItems);

let items = document.querySelectorAll('.item');



const previous = () =>{
// Lembrete appendChild é o método que joga o elemento para o último da lista
    containerItems.appendChild(items[0]); 
     items = document.querySelectorAll('.item');

}

const next = () =>{
     const lastItem = items[items.length -1];
        containerItems.insertBefore( lastItem , items[0])
         items = document.querySelectorAll('.item');
    
    }

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
