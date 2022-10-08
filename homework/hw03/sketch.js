function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    drawCreature(100, 600, 100, 'white', 'black');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

function drawCreature(centerX, centerY, size, primaryColor, secondaryColor) { //centerX, centerY, size, primaryColor, secondaryColor
    let cX = size/5;
    let cY = size/2;
    let cZ = cY + size/2;
    let cA = cY * .5
    fill(primaryColor);
    circle(centerX, centerY, size); //100 300 100
    fill(secondaryColor);
    circle(centerX - cX, centerY - cX, size * .12); //75 285 12 left eye
    fill(secondaryColor);
    circle(centerX + cX, centerY - cX, size * .12); //125 285 12 right eye
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

