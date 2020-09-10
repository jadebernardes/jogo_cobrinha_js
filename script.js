let canvas= document.getElementById("snake");
//renderiza o desenho dentro do canvas
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

//funcao que desenha e define a cor do BG
//fillStyle define o estilo: cor etc
//fillRect desenha o jogo. 4 parametos (x, y, altura e largura)
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect (snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();
    // criar a posição da cobrinha para o ponto de partida
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    //criar coordenadas da cobrinha por onde ela vai seguir
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);