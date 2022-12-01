const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawElmo(100, 100, 100, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true);


    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:
function drawElmo(x, y, size, color, hasNose) {
    let cX = size/9
    let cY = size/8

    fill(color)
    circle(x, y, size); //500 500 400
    fill('white')
    circle(x - cX, y - cY, size * .1875)
    fill('black')
    circle(x - cX, y - cY, size * .0625)
    fill('white')
    circle(x + cX, y - cY, size * .1875)
    fill('black')
    circle(x + cX, y - cY, size * .0625)
    
    if (hasNose) {
    fill('#db5461');
    ellipse(x, y, size * .175, size * .25); 
    }
}