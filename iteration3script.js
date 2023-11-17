let puddleTime = 50;

function setup() {
  createCanvas(1920, 1080);
  background(0);
  frameRate(60);
}

function draw() {
}

function mousePressed() {
  fill(0, 0, 255);
  puddleTime = puddleTime + (random(-20, 20));
  if (puddleTime < 10) {
    puddleTime = 10;
  } 
  else if (puddleTime > 100) {
    puddleTime = 100;
  }
  ellipse(mouseX, mouseY, puddleTime, puddleTime);
  
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    background(0);
  }
}

