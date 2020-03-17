'use strict';

// criar o canvas
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// imagem de fundo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = 'images/background.png';

//imagem do herói
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = 'images/hero.png';

//imagem do monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = 'images/monster.png';

//objetos do jogo
var hero = {
    speed: 256 //movimento em pixels por segundo 
};
var monster = {};
var monsterCaught = 0;

// controle do teclado
var keysDown = {};
window.addEventListener('keydown', function (e) {
    keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
    delete keysDown[e.keyCode];
}, false);

// reseta o jogo quando o jogador pega o monstro
var reset = function reset() {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    //posiciona o monstro randomicamente na tela
    monster.x = 32 + Math.random() * (canvas.width - 64);
    monster.y = 32 + Math.random() * (canvas.height - 64);
};

//atualizar os objetos do jogo
var update = function update(modifier) {
    if (38 in keysDown) {
        //pressionar a tecla para cima
        hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) {
        //pressionar a tecla para baixo
        hero.y += hero.speed * modifier;
    }

    if (37 in keysDown) {
        //pressionar a tecla para esquerda
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) {
        //pressionar a tecla para direita
        hero.x += hero.speed * modifier;
    }
};
