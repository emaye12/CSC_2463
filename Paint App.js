var p;

function setup() {
  createCanvas(750, 500);
  colorMode(RGB);
  p = color(255, 255, 255);
}

function draw() {

  {
  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 0, 0);
  rect(0, 0, 25, 25);
  
  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 127, 0);
  rect(0, 25, 25, 25);
  
  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 255, 0);
  rect(0, 50, 25, 25);
  
  strokeWeight(1);
  stroke(255, 255, 255);
  fill(0, 255, 0);
  rect(0, 75, 25, 25);
  
  strokeWeight(1);
  stroke(255, 255, 255);
  fill(0, 255, 255);
  rect(0, 100, 25, 25);
  
  strokeWeight(1);
  stroke(255, 255, 255);
  fill(0, 0, 255);
  rect(0, 125, 25, 25);
  
  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 0, 255);
  rect(0, 150, 25, 25);

  strokeWeight(1);
  stroke(255, 255, 255);
  fill(127, 64, 0);
  rect(0, 175, 25, 25);

  strokeWeight(1);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  rect(0, 200, 25, 25);
  
  strokeWeight(1);
  stroke(255, 255, 255);
  fill(0, 0, 0);
  rect(0, 225, 25, 25);
  }
  if (mouseIsPressed) {
    if (mouseX < 35 && mouseY < 260) {
      p = get(mouseX, mouseY);
    }
    else {
    strokeWeight(10);
    stroke(p);
    noFill();
    line(mouseX, mouseY, pmouseX, pmouseY)
    }
  }
}