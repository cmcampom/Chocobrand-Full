var bgcolor;
var button;
var slider;
var input;
var nameP;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('canvas');
    background(240);
    input = document.getElementById("nm");
    console.log(input);
}

function draw() {
    text(input.value(), 10, 20);
}