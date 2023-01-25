function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

function draw() {
  background(100, 100, 100);
  
  stroke(0, 0, 0);
  fill(0, 0, 100);
  rect(215, 15, 170, 170);
  
  stroke(0, 0, 0);
  fill(0, 0, 100);
  ellipse(100, 100, 170, 170);
}