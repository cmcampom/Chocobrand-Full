var input;

var img_bases = [];
var pantalla = 0;

var wCrema = false;
var wChips = false;

var sel1 = 0;
var img_crema;
var img_chips;


precio_total = 20;

function setup() {
    canvas = createCanvas(1280 * .8, 720 * .8);
    canvas.parent('canvas');
    input = document.getElementById("nm");

    frameRate(30);
    cargarImgs();


    input = createInput();
    input.position(550 + 15, 400);
    input.class('cla');
    input.attribute('placeholder', 'Nombre');
}

function cargarImgs() {
    img_bases.push({precio: 20, img: loadImage("assets/bases/bc.png"), name: 'Clásica'});
    img_bases.push({precio: 25, img: loadImage("assets/bases/bch.png"), name: 'Maíz'});
    img_bases.push({precio: 27, img: loadImage("assets/bases/bn.png"), name: 'Chocomaní'});

    img_crema = loadImage("assets/crema.png");
    img_chips = loadImage("assets/chips.png");

}

function pintarCupCake() {
    var x = 300;
    var y = 300;

    if (pantalla === 2) {
        x = 512;
        y = 250;
    }

    imageMode(CENTER);

    image(img_bases[sel1].img, x, y, 300, 300);
    if (wCrema)
        image(img_crema, x, y, 300, 300);

    if (wChips)
        image(img_chips, x, y, 300, 300);


    if (pantalla == 0) {
        input.position(550 + 15, 400);
    } else {
        input.position(-10000, -10000);
    }
}

function draw() {
    background(240);
    noStroke();
    textSize(30);
    textAlign(LEFT);
    fill(0);
    textStyle(BOLD);
    text('Chocobrand', 40, 40);
    text('Builder', 860, 40);
    textStyle(NORMAL);

    //CUADRO DEL CUPCAKE
    fill(255);
    stroke(200);
    // rect(100, 100, 400, 400);
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
    text('Selecciona la base', 550 + 200, 100 + 40);
    fill(0);

    text('Dale un nombre', 550 + 200, 100 + 40 + 200);

    for (var i = 0; i < img_bases.length; i++) {
        fill(240);
        if (i === sel1) {
            stroke(255, 0, 0);
        } else {
        }
        if (mouseX > 560 + (i * 150) && mouseX < 560 + (i * 150) + 80 && mouseY > 200 && mouseY < 200 + 80) {
            fill(200);
            cursor();
        }
        rect(560 + (i * 150), 200, 80, 80);
        fill(0);
        textSize(12);
        textAlign(CENTER, CENTER);
        noStroke();


        text(img_bases[i].name, 560 + 40 + (i * 150), 200 + 100);
        image(img_bases[i].img, 560 + (i * 150) + 40, 200 + 40, 60, 60);

    }
}


function botonesPantallas() {
    textSize(12);

    if (pantalla > 0) {
        fill(150);

        if (mouseX > 550 && mouseX < 550 + 190 && mouseY > 500 && mouseY < 500 + 40) {
            fill(100);
            textStyle(BOLD);
        }

        rect(550, 500, 190, 40, 10);
        fill(255);
        text('Atrás', 550 + 95, 520);


    }

    fill(150);
    if (mouseX > 760 && mouseX < 760 + 190 && mouseY > 500 && mouseY < 500 + 40) {
        fill(100);
        textStyle(BOLD);

    }

    rect(760, 500, 190, 40, 10);
    fill(255);

    var t = 'Siguiente';

    if (pantalla === 2) {
        t = 'Finalizar';
    }
    text(t, 760 + 95, 520);


}

function mousePressed() {
    if (mouseX > 760 && mouseX < 760 + 190 && mouseY > 500 && mouseY < 500 + 40) {
        if (pantalla < 2) {
            pantalla++;
        } else {
            // TODO VER COMO SOLUCIONAR ESTO
        }

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
                    precio_total = img_bases[i].precio;
                    wCrema = false;
                    wChips = false;

                    break;
                }
            }

            break;
        case 1:


            if (mouseX > 550 + 5 + 50 + 100 && mouseX < 550 + 5 + 50 + 100 + 40 && mouseY > 100 + 40 + 53 && mouseY < 100 + 40 + 53 + 12) {
                wCrema = !wCrema;

                if (wCrema) {
                    precio_total += 5;
                } else {
                    precio_total -= 5;

                }
            }


            if (mouseX > 550 + 5 + 50 + 100 && mouseX < 550 + 5 + 50 + 100 + 40 && mouseY > 100 + 40 + 53 + 30 && mouseY < 100 + 40 + 53 + 30 + 12) {
                wChips = !wChips;

                if (wChips) {
                    precio_total += 7;
                } else {
                    precio_total -= 7;

                }

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
        fill(150);

        posCrem = 550 + 5 + 50 + 100;
    }
    ellipse(posCrem, 100 + 40 + 53 + 6, 15, 15);


    if (wChips) {
        fill(255, 0, 0);
        0
        posChips = 550 + 5 + 50 + 100 + 40;
    } else {
        fill(150);
        posChips = 550 + 5 + 50 + 100;
    }
    ellipse(posChips, 100 + 40 + 53 + 6 + 30, 15, 15);


    textAlign(CENTER, CENTER);
    fill(0);
    text(input.value(), 550 + 200, 100 + 40 + 150);
    textSize(15);
    fill(0, 100);
    text('$ ' + precio_total, 550 + 200, 100 + 40 + 180);

}

posChips = false;


function tres() {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    fill(0);
    rect(512, 400, 200, 40, 10);
    textSize(14);
    textStyle(BOLD);
    fill(255);
    text(input.value(), 512, 400);

    fill(0);
    var seleccionado = img_bases[sel1].name;
    if (wChips) seleccionado += '+ chips ';
    if (wCrema) seleccionado += '+ Crema ';

    text(seleccionado, 512, 400 + 30);
    text('$ ' + precio_total, 512, 400 + 50);
    rectMode(CORNER);
}

function pintarPantalla(pantalla) {

    switch (pantalla) {
        case 0:
            fill(255);
            rect(550, 100, 400, 400);
            ini();
            break;
        case 1:
            fill(255);
            rect(550, 100, 400, 400);
            dos();
            break;
        case 2:
            tres();
            break;
    }
}

function pintarOps() {


}