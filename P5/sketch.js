var input;

var img_bases = [];
var pantalla = 0;

var wCrema = false;
var wChips = false;

var sel1 = 0;

function setup() {
    canvas = createCanvas(1280 * .8, 720 * .8);
    canvas.parent('canvas');
    input = document.getElementById("nm");
    console.log(input);
    frameRate(30);
    cargarImgs();
}

function cargarImgs() {
    img_bases.push({img: loadImage("assets/bases/bc.png"), name: 'Clásica'});
    img_bases.push({img: loadImage("assets/bases/bch.png"), name: 'Maíz'});
    img_bases.push({img: loadImage("assets/bases/bn.png"), name: 'Chocomaní'});
}

function pintarCupCake() {
    imageMode(CENTER);
    image(img_bases[sel1].img, 300, 300, 300, 300);
}

function draw() {
    background(240);
    noStroke();
    textSize(30);
    text('Chocobrand', 40, 40);
    text('builder', 860, 40);
    //CUADRO DEL CUPCAKE
    fill(255);
    stroke(200);
    rect(100, 100, 400, 400);
    noStroke();
    pintarCupCake();

    pintarPantalla(pantalla);
    botonesPantallas();
}


function ini() {
    textSize(25);
    fill(0);
    rect(550, 100, 400, 80);
    textAlign(CENTER, CENTER);
    fill(250);
    text('¡Dale un nombre!', 550 + 200, 100 + 40);

    var i = 0;
    for (var i = 0; i < img_bases.length; i++) {
        fill(200);
        rect(560 + (i * 150), 200, 80, 80);
        fill(0);
        textSize(12);
        textAlign(CENTER, CENTER);
        text(img_bases[i].name, 560 + 40 + (i * 150), 200 + 100);
        image(img_bases[i].img, 560 + (i * 150) + 40, 200 + 40, 60, 60);

    }
}


function botonesPantallas() {
    textSize(12);

    if (pantalla > 0) {
        fill(150);
        rect(550, 500, 190, 40);
        fill(0);
        text('Atrás', 550 + 95, 520);
    }

    fill(150);
    rect(760, 500, 190, 40);
    fill(0);

    text('Siguiente', 760 + 95, 520);

}

function mousePressed() {
    if (mouseX > 760 && mouseX < 760 + 190 && mouseY > 500 && mouseY < 500 + 40) {
        pantalla++;
        console.log(pantalla);
    }

    if (mouseX > 550 && mouseX < 550 + 190 && mouseY > 500 && mouseY < 500 + 40) {
        pantalla--;
    }


    switch (pantalla) {
        case 0:
            rect(560 + (i * 150), 200, 80, 80);

            for (var i = 0; i < img_bases.length; i++) {
                if (mouseX > 560 + (i * 150) && mouseX < 560 + (i * 150) + 80 && mouseY > 200 && mouseY < 200 + 80) {
                    sel1 = i;
                    break;
                }
            }

            break;
        case 1:

            if (mouseX > 560 + (i * 150) && mouseX < 560 + (i * 150) + 80 && mouseY > 200 && mouseY < 200 + 80) {

            }

            if (mouseX > 560 + (i * 150) && mouseX < 560 + (i * 150) + 80 && mouseY > 200 && mouseY < 200 + 80) {

            }

            break;
        case 2:

            break;
    }
}

function dos() {

    textSize(25);
    fill(0);
    rect(550, 100, 400, 80);
    textAlign(CENTER, CENTER);
    fill(250);
    text('¡Dale un nombre!', 550 + 200, 100 + 40);
    fill(0);
    textSize(14);

    textAlign(LEFT);
    text('Crema:', 550 + 5, 100 + 40 + 60);
    text('Chips', 550 + 5, 100 + 40 + 60 + 30);

//cuadros de seleccioín
    fill(230);

    rect(550 + 5 + 50 + 100, 100 + 40 + 53, 40, 12);
    rect(550 + 5 + 50 + 100, 100 + 40 + 53 + 30, 40, 12);


    fill(150);
    var posCrem = 0;

    if (wCrema) {
        fill(255, 0, 0);
        posCrem = 550 + 5 + 50 + 100 + 40;
    } else {
        posCrem = 550 + 5 + 50 + 100;
    }
    ellipse(posCrem, 100 + 40 + 53 + 6, 15, 15);
    posChips = false;


    if (wChips) {
        posChips = 550 + 5 + 50 + 100 + 40;
    } else {
        posChips = 550 + 5 + 50 + 100;
    }

    ellipse(posChips, 100 + 40 + 53 + 6 + 30, 15, 15);

}


function tres() {
    textSize(25);
    fill(0);
    rect(550, 100, 400, 80);
    textAlign(CENTER, CENTER);
    fill(250);
    text('¡Dale un nombre!', 550 + 200, 100 + 40);

}

function pintarPantalla(pantalla) {
    fill(255);
    rect(550, 100, 400, 400);

    switch (pantalla) {
        case 0:
            ini();
            break;
        case 1:
            dos();
            break;
        case 2:
            tres();
            break;
    }
}

function pintarOps() {


}