function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 100, 'hotpink');
    drawCircle(200, 100, 50, 'navy');
    drawCircle(300, 100, 100, 'teal');
    drawCircle(400, 100, 50, 'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 100, 62.5, 'teal');
    drawOval(200, 200, 62.5, 100, 'hotpink');
    drawOval(300, 200, 100, 62.5, 'navy');
    drawOval(400, 200, 62.5, 100, 'teal');

    // Exercise 3:
    drawBullseye(100, 300, 100);
    drawBullseye(200, 300, 50);
    drawBullseye(300, 300, 100);
    drawBullseye(400, 300, 50);

    // Exercise 4:
    drawFace(100, 400, 50);
    drawFace(200, 400, 100);
    drawFace(300, 400, 50);
    drawFace(400, 400, 100);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY); //100 200 100 62.5
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size) {
    fill('teal');
    circle(centerX, centerY, size); //100 300 100
    fill('navy');
    circle(centerX, centerY, size * .75); //100 300 75
    fill('teal');
    circle(centerX, centerY, size * .5); //100 300 50
    fill('navy');
    circle(centerX, centerY, size * .25); //100 300 25
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, faceColor='yellow') {
    fill(faceColor);
    circle(centerX, centerY, size); //100 400 50
    fill('black');
    let sf = size / 6;
    circle(centerX-sf, centerY-sf, sf); //92 392 8   left eye
    circle(centerX+sf, centerY-sf, sf); //108 392 8    right eye

    // make a mouth
    strokeWeight(size / 20);
    // line(
    //     centerX - sf * 2, //x1
    //     centerY + sf, //y1
    //     centerX + sf * 2, //x2
    //     centerY + sf, //y2
    // ) //x1, y1, x2, y2
    noFill();
    arc(centerX, centerY, size/2, size/2, 0.5, -10, OPEN);
    strokeWeight(1);
}
