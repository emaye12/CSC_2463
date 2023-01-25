function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(0, 0, 0);
  angleMode(DEGREES);
 
  fill(60, 100, 100);
  arc(100, 100, 170, 170, 220, 140);
  
  fill(0, 70, 100);
  rect(215, 100, 170, 85);
  
  fill(0, 70, 100);
  arc(300, 100, 170, 170, 180, 360);
  
  fill(0, 0, 100);
  ellipse(260, 100, 50, 50);
  
  fill(0, 0, 100);
  ellipse(340, 100, 50, 50);
  
  fill(235, 100, 100);
  ellipse(260, 100, 25, 25);
  
  fill(235, 100, 100);
  ellipse(340, 100, 25, 25);
}