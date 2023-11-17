let pSizeConst = 75; // Constant for puddleSize that gets defaulted to
let pTimeConst = 0; // Constant for puddleTime that gets defaulted to

let puddleSize = pSizeConst;
let puddleTime = pTimeConst;

// Mouse position is stored on click
let storedMouseX; 
let storedMouseY;

let colorBlue; // Color Blue Variable

function setup() {
  createCanvas(1920, 1080);
  background(0);
  frameRate(60);
}

function mousePressed() {
  storedMouseX = mouseX;
  storedMouseY = mouseY;
}

function draw() {
  if (mouseIsPressed == true) {
    puddleSize = puddleSize + (8*sin(puddleTime)); // Causes puddle size to vary and adds... interesting graphical effects to the edges of puddles; multiplier to sin controls size of bulging
    puddleTime = puddleTime + 0.04; // Controls rate of enlargement / sine wave "bulging"
    fill((15*sin(puddleTime)), (120*sin(puddleTime-PI)), puddleSize); 
    ellipse(storedMouseX, storedMouseY, puddleSize, puddleSize);
  } else {
    puddleSize = pSizeConst;
    puddleTime = pTimeConst;
  }

}



function keyPressed() {
  if (keyCode === BACKSPACE) {
    background(0);
  }
}

