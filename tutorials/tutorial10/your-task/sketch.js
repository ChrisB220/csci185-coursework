const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
let backgroundColor = 'white';
const palette = [ '#1b998b', '#ed217c', '#2d3047', '#fffd82', '#ff9b71'];
const palette2 = [ '#165B33', '#146B3A', '#F8B229', '#EA4630', '#BB2528'];
let primaryColor = 'white';
let secondaryColor = 'black';
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    clear();
    drawCreature(canvasWidth/2, canvasHeight/2, 200, primaryColor, secondaryColor);
    text("Press Space to change colors and W to reset color. Click to create more snowmen!", 700, 120);
}

// replace this function with YOUR creature!
function drawCreature(centerX, centerY, size, primaryColor, secondaryColor) { //centerX, centerY, size, primaryColor, secondaryColor
    let cX = size/5;
    let cY = size/2;
    let cZ = cY + size/2;
    let cA = cY * .5
    fill(primaryColor);
    circle(centerX, centerY, size); //100 300 100
    fill(secondaryColor);
    circle(centerX - cX, centerY - cX, size * .11); //75 285 12 left eye
    fill(secondaryColor);
    circle(centerX + cX, centerY - cX, size * .11); //125 285 12 right eye
    fill(secondaryColor);
    rect(centerX - cY, centerY - cY, size, size * .25); //50 250 100 25 hat bottom
    fill(secondaryColor);
    rect(centerX - cA, centerY - cZ, size * .5, size * .5) //75 200 50 50 hat top
    fill(secondaryColor);
    circle(centerX, centerY, size * .15); //100 300 15 nose
    stroke(secondaryColor);
    noFill();
    arc(centerX, centerY, size/2, size/2, 0.5, -10, OPEN);
    strokeWeight(1);
}

function mouseClicked() {
    drawCreature(mouseX, mouseY, Math.random()* 50 + 50, primaryColor, secondaryColor);
}

function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'Space') {
        const idx = randInt(0, palette.length - 2);
        const idx2 = randInt(0, palette2.length - 2);
        primaryColor = palette[idx];
        secondaryColor = palette2[idx2];
        console.log(primaryColor);
        console.log(secondaryColor);
        drawCreature(canvasWidth/2, canvasHeight/2, 200, primaryColor, secondaryColor);
    } else if (ev.code == 'KeyW') {
        primaryColor = 'white';
        secondaryColor = 'black';
        drawCreature(canvasWidth/2, canvasHeight/2, 200, primaryColor, secondaryColor);
    }
}

document.addEventListener('keydown', moveController);



