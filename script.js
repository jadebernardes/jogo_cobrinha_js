let canvas= document.getElementById("snake");
//renderiza o desenho dentro do canvas
let context = canvas.getContext("2d");
let box = 32;

//funcao que desenha e define a cor do BG
//fillStyle define o estilo: cor etc
//fillRect desenha o jogo. 4 parametos (x, y, altura e largura)
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();