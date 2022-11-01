const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const buildings = [
    { initialX: 0, initialY: 200, width: 200, primaryColor:'#A6BFC9', secondaryColor: '#EF233C' },
    { initialX: 1300, initialY: 450, width: 200, primaryColor:'#363537', secondaryColor: '#9EE37D' },
    { initialX: 1500, initialY: 100, width: 200, primaryColor:'grey', secondaryColor: 'yellow' },
    { initialX: 200, initialY: 350, width: 200, primaryColor:'#2B2D42', secondaryColor: 'white' }
]


function setting() {
    createCanvas(canvasWidth, canvasHeight);

    fill('white');
    stroke('black');
    rect(0, 700, 1700, 400);

    fill('#034078');
    rect(0, 0, 1700, 700);

    drawLandscapeObject();
    tree();
    fill('yellow');
    stroke('yellow');
    circle(data.x, data.y, data.d);

    drawCreature(450, 650, 50, 'white', 'black');
    drawCreature(550, 600, 75, 'white', 'orange');
    drawCreature(1200, 600, 150, '#648d8e', '#afc272');

    fill('black');
    stroke('black');
    textAlign(CENTER);
    textSize(26);
    text("Drag the 'star' on top of the tree! Hold Space to make it snow!", canvasWidth/2, canvasHeight/1.25);
}


function tree() {
    //bottom section
    beginShape();
    fill('green');
    stroke('green');
    vertex(650, 500);
    vertex(750, 400);
    vertex(950, 400);
    vertex(1050, 500);
    endShape(CLOSE);

    //lower middle section
    beginShape();
    fill('green');
    stroke('green');
    vertex(600, 600);
    vertex(700, 500);
    vertex(1000, 500);
    vertex(1100, 600);
    endShape(CLOSE);

    //upper middle section
    beginShape();
    fill('green');
    stroke('green');
    vertex(700, 400);
    vertex(800, 300);
    vertex(900, 300);
    vertex(1000, 400);
    endShape(CLOSE);

    //top section
    beginShape();
    fill('green');
    stroke('green');
    vertex(750, 300);
    vertex(850, 200);
    vertex(950, 300);
    endShape(CLOSE);    
    
    //trunk
    fill('#563F1B');
    stroke('#563F1B');
    rect(800, 600, 100, 100);

    treeLights();
}

const light = [
{ lightX: 684, lightY: 575},
{ lightX: 699, lightY: 547},
{ lightX: 716, lightY: 567},
{ lightX: 747, lightY: 540},
{ lightX: 751, lightY: 572},
{ lightX: 799, lightY: 545},
{ lightX: 835, lightY: 583},
{ lightX: 870, lightY: 552},
{ lightX: 952, lightY: 564},
{ lightX: 1026, lightY: 581},
{ lightX: 1018, lightY: 553},
{ lightX: 932, lightY: 521},
{ lightX: 890, lightY: 555},
{ lightX: 836, lightY: 505},
{ lightX: 740, lightY: 462},
{ lightX: 700, lightY: 510},
{ lightX: 772, lightY: 426},
{ lightX: 830, lightY: 417},
{ lightX: 936, lightY: 483},
{ lightX: 969, lightY: 468},
{ lightX: 917, lightY: 410},
{ lightX: 854, lightY: 351},
{ lightX: 805, lightY: 361},
{ lightX: 775, lightY: 369},
{ lightX: 789, lightY: 267},
{ lightX: 823, lightY: 248},
{ lightX: 853, lightY: 253},
{ lightX: 869, lightY: 309},
{ lightX: 917, lightY: 353},
{ lightX: 891, lightY: 271},
{ lightX: 832, lightY: 310},
{ lightX: 874, lightY: 465},
{ lightX: 798, lightY: 486},    
]

let idx = 0;
let index = 0;

function getRandomColor() {
    const palette = ['#2DF02D', '#ce0d0d', '#FFD700', '#ba0c0c', '#3225de', '#8314b9'];
    idx = idx + .0005;
    if (idx > 0 && idx < 1) {
        index = 0;
    } else if (idx > 1 && idx < 2) {
        index = 1;
    } else if (idx > 2 && idx < 3) {
        index = 2;
    } else if (idx > 3 && idx < 4) {
        index = 3;
    } else if (idx > 4 && idx < 5) {
        index = 4;
    } else if (idx > 5 && idx < 6) {
        index = 5;
    }
    if (idx >= 6) {
        idx = 0;
    }
    return palette[index];
    }


function treeLights() {
    for (let count = 0; count < 32; count++) {
    fill(getRandomColor());
    stroke(getRandomColor());
    circle(light[count].lightX, light[count].lightY, 10)
    }
}

const presents = [
    { X: 925, Y: 650, Width: 50, X2: 940, W2: 20, Color:'red', Color2: 'yellow' },
    { X: 1030, Y: 625, Width: 50, X2: 1048, W2: 15, Color:'blue', Color2: 'yellow' },
    { X: 700, Y: 660, Width: 75, X2: 730, W2: 15, Color:'green', Color2: 'red' },
    { X: 615, Y: 630, Width: 40, X2: 630, W2: 10, Color:'purple', Color2: 'blue' }
]

function drawLandscapeObject() {
    for (let counter = 0; counter < 4; counter++) {
    let height = 700 - buildings[counter].initialY;
    fill(buildings[counter].primaryColor);
    stroke(buildings[counter].primaryColor);
    rect(buildings[counter].initialX, buildings[counter].initialY, buildings[counter].width, height);
    fill(buildings[counter].secondaryColor);
    stroke(buildings[counter].secondaryColor);
    rect(buildings[counter].initialX + (buildings[counter].width/10), buildings[counter].initialY + (height/10), buildings[counter].width/5, height/7.5);
    rect(buildings[counter].initialX + buildings[counter].width/1.5, buildings[counter].initialY + (height/10), buildings[counter].width/5, height/7.5);
    rect(buildings[counter].initialX + (buildings[counter].width/10), buildings[counter].initialY + (height/3), buildings[counter].width/5, height/7.5);
    rect(buildings[counter].initialX + buildings[counter].width/1.5, buildings[counter].initialY + (height/3), buildings[counter].width/5, height/7.5);
    rect(buildings[counter].initialX + (buildings[counter].width/10), buildings[counter].initialY + (height/1.8), buildings[counter].width/5, height/7.5);
    rect(buildings[counter].initialX + buildings[counter].width/1.5, buildings[counter].initialY + (height/1.8), buildings[counter].width/5, height/7.5);
    rect(buildings[counter].initialX + (buildings[counter].width/10), buildings[counter].initialY + (height/1.3), buildings[counter].width/5, height/7.5);
    rect(buildings[counter].initialX + buildings[counter].width/1.5, buildings[counter].initialY + (height/1.3), buildings[counter].width/5, height/7.5);
    
    height = 700 - presents[counter].Y;
    stroke('black');
    fill(presents[counter].Color);
    rect(presents[counter].X, presents[counter].Y, presents[counter].Width, height);
    fill(presents[counter].Color2);
    rect(presents[counter].X2, presents[counter].Y, presents[counter].W2, height);
    rect(presents[counter].X2, presents[counter].Y - 10, presents[counter].W2, 10);

}
}

function drawGrid(canvasWidth, canvasHeight, color='black') {
    textSize(10);
    textStyle(NORMAL);
    // strokeColor(color);
    
    stroke(color);
    fill(color);
    for (let x = 0; x < canvasWidth; x += 100) {
		for (let y = 0; y < canvasHeight; y += 100) {
			strokeWeight(1);
			line(x, 0, x, canvasHeight);
			line(0, y, canvasWidth, y);
            if ((x + 100) % 200 == 0 && (y + 100) % 200 == 0) {
			    strokeWeight(8);
                point(x, y);
                strokeWeight(0);
                text(`(${x}, ${y})`, x + 5, y + 20);
            }
            strokeWeight(1);
		}
	}
    stroke(0);
    fill(0);
}

const snowflakes = [];

function randInt(min, max) { 
	return Math.floor(randDecimal(min, max));
}
function randDecimal(min, max) { 
	return Math.random() * (max - min + 1) + min;
}

function drawSnowflake() {
    const snowflake = {
        x: Math.random() * (1600 - 1) + 1,
        y: 0,
        d: Math.random()* 40 + 3,
        speed: 1 * randDecimal(1, 10) - .5,
        color: 'white'
    }
    snowflakes.push(snowflake)
}

const data = {
    x: 100,
    y: 100,
    d: 50,
    color: 'white'
}

function moveController(ev) {
    if (ev.code == 'Space') {
        drawSnowflake();
    }
}

function mouseDragged() {
    let d = dist(data.x, data.y, mouseX, mouseY);
    if (d < data.d/2 || data.color == 'red') {
        data.x = mouseX;
        data.y = mouseY;
    } 
}

function draw() {
    clear();
    setting();
    // 2. loop through the bubbles list and draw / animate each bubble:
    for (const snowflake of snowflakes) {
        fill(snowflake.color);
        stroke(snowflake.color);
        circle(snowflake.x, snowflake.y, snowflake.d);
        snowflake.y += snowflake.speed;

        if (snowflake.y > 1400) {
            snowflake.y = 0;
        }
    }
}


function drawCreature(centerX, centerY, size, primaryColor2, secondaryColor2) { //centerX, centerY, size, primaryColor, secondaryColor
    let cX = size/5;
    let cY = size/2;
    let cZ = cY + size/2;
    let cA = cY * .5
    stroke(primaryColor2);
    fill(primaryColor2);
    circle(centerX, centerY, size); //100 300 100
    stroke(secondaryColor2);
    fill(secondaryColor2);
    circle(centerX - cX, centerY - cX, size * .12); //75 285 12 left eye
    fill(secondaryColor2);
    circle(centerX + cX, centerY - cX, size * .12); //125 285 12 right eye
    fill(secondaryColor2);
    rect(centerX - cY, centerY - cY, size, size * .25); //50 250 100 25 hat bottom
    fill(secondaryColor2);
    rect(centerX - cA, centerY - cZ, size * .5, size * .5) //75 200 50 50 hat top
    fill(secondaryColor2);
    circle(centerX, centerY, size * .15); //100 300 15 nose
    stroke(secondaryColor2);
    noFill();
    arc(centerX, centerY, size/2, size/2, 0.5, -10, OPEN);
    strokeWeight(1);
}


document.addEventListener('keydown', moveController);

