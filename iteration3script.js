let puddleNum = 0;

function setup() {
  createCanvas(1920, 1080);
  background(0);
}

function draw() {
}

function mouseClicked() {
  fill(0, 0, 255); 
  ellipse(mouseX, mouseY, 50, 50);
  
  let puddleNum = puddleNum + 1
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    background(0);
  }
}

