const imagens = [

{'id': '1' , 'url': './images/chrono.jpg'},

{'id': '2' , 'url': './images/inuyasha.jpg'},

{'id': '3' , 'url': './images/tenchi.jpg'},

{'id': '4' , 'url': './images/tenjhotenge.jpg'},

{'id': '5' , 'url': './images/yuyuhakusho.jpg'},

{'id': '6' , 'url': './images/ippo.png'},

]

const container = document.querySelector('#container-items');


const loadImages = (imagens , container) => {

imagens.forEach (image =>{

container .innerHTML += `
<div class="item">
<img src= "${image.url}"
</div>

`

})

}

loadImages(imagens, container);