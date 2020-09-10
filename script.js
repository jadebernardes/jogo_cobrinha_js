let canvas= document.getElementById("snake");
//renderiza o desenho dentro do canvas
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
//jogo começa automaticamente com a cobrinha indo para direita
let direction = "right";

//variavel da comidinha
let food = {
    //Math tira a parte flutuante do número (deixa o número inteiro)
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}



//funcao que desenha e define a cor do BG
//fillStyle define o estilo: cor etc
//fillRect desenha o jogo. 4 parametos (x, y, altura e largura)
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect (snake[i].x, snake[i].y, box, box);
    }
}


//desenhando a comidinha
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener("keydown", update);

//definindo as teclas para manipular a cobrinha
function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();
    drawFood();
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

