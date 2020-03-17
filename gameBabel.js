// criar o canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// imagem de fundo
let bgReady = false;
const bgImage = new Image();
bgImage.onload = function(){
    bgReady = true;
};
bgImage.src = 'images/background.jpg';

//imagem do herói
let heroReady = false;
const heroImage = new Image();
heroImage.onload = function(){
    heroImage = true;
};