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
bgImage.src = 'images/background.png';

//imagem do herói
let heroReady = false;
const heroImage = new Image();
heroImage.onload = function(){
    heroReady = true;
};
heroImage.src = 'images/hero.png';

//imagem do monstro
let monsterReady = false;
const monsterImage = new Image();
monsterImage.onload = function(){
    monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//objetos do jogo
const hero = {
    speed: 256 //movimento em pixels por segundo 
};
const monster = {};
let monsterCaught = 0;

// controle do teclado
const keysDown = {};
window.addEventListener('keydown', )