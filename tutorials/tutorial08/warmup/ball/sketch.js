const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


const changeBallColor = ev => {
    console.log(ev.code);
    if (ev.code == 'KeyR') {
        color = 'red';
    }
}

let x = 200;
let speed = 5;
let width = 50;
let color = 'black';
let y = 10;

function draw() {
    // frameRate(1);
    clear();

    if (x >= 500 - width/2) {
        //speed = -5;
        speed *= -1;
        //width *= .5;
    } else if (x <= 150 + width/2) {
        speed *= -1;
        //width *= 2;
    }

    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight); // left wall
    rect(500, 0, 50, canvasHeight); // right wall

    // draw circle:
    fill(color);
    circle(x, canvasHeight/2, width);
    x += speed;
    //console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}


const moveController = ev => {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        y -= 2;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 2;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 2;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 2;
    } else if (ev.code == 'Space') {
        width += 2;
    } else if (ev.code == 'Escape') {
        width -= 2;
    } else if (ev.code == 'KeyR') {
        ev = 'KeyR';
    }

    // redraw circle:
    clear();
    noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);