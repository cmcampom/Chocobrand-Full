var bgcolor;
var button;
var slider;
var input;
var nameP;

function setup() {
    canvas = createCanvas(400, 600);
    bgcolor = color(200);
    nameP = createP('Your name!');
    button = createButton("go");
    button.mousePressed(changeColor);

    slider = createSlider(10, 100, 86);
    input = createInput('type your name');
    console.log(input);
}

function changeColor() {
    bgcolor = color(random(255))
}

function draw() {
    background(bgcolor);
    fill(255, 0, 175);
    ellipse(100, 100, slider.value(), slider.value());
    nameP.html(input.value());
    text(input.value(), 10, 20);
}