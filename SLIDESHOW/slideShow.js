'use strict';

const images = [

{'id': '1' , 'url': './images/chrono.jpg'},

{'id': '2' , 'url': './images/inuyasha.jpg'},

{'id': '3' , 'url': './images/ippo.png'},

{'id': '4' , 'url': './images/tenchi.jpg'},

{'id': '5' , 'url': './images/tenjhotenge.jpg'},

{'id': '6' , 'url': './images/yuyuhakusho.jpg'},

]

const container = document.querySelector('#container-items');


const loadImages = (images , container) => {

images.forEach (image =>{

container .innerHTML += `
<div class="item">
<img src= "${image.url}"
</div>

`

})

}

loadImages(images, container);