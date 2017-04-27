//grid width and height
var bw = 400;
var bh = 400;
//padding around grid
var p = 10;
//size of canvas
var cw = bw + (p * 2) + 1;
var ch = bh + (p * 2) + 1;

var $canvas = $('<canvas/>').attr({width: cw, height: ch}).appendTo('body');

var context = $canvas.get(0).getContext("2d");

function drawBoard() {
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }


    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }

    context.strokeStyle = "black";
    context.stroke();
}

function createSnake() {
    var snakeContent = "<div id='snake' class='snake-snakebody'></div>";

    $canvas.after(snakeContent);
}

var direction = 0,
    animation = false,
    upKey = 38,
    downKey = 40,
    leftKey = 37,
    rightKey = 39;

$(document).keydown(function (e) {
    var key = e.which;

    if (key >= leftKey && key <= downKey) {
        moveSnake(key);
    }
});

function moveSnake(key) {
    var interval = 500,
        snakePos = $snake.position(),
        snakeTop = snakePos.top,
        snakeLeft = snakePos.left,
        offset = snakeTop - 30,
        direction = {top: offset};

    if (downKey === key) {
        offset = snakeTop + 30;
        direction = {top: offset};
    } else if (leftKey === key) {
        offset = snakeLeft - 30;
        direction = {left: offset};
    } else if (rightKey === key) {
        offset = snakeLeft + 30;
        direction = {left: offset};
    }

    if (animation) {
        animation.stop();
    }
    animation = $snake.animate(direction, interval, function () {
        //callback
        moveSnake(key);
    });
}

function spawnApples() {

}


drawBoard();
createSnake();
var $snake = $("#snake");