function setup() {
  createCanvas(300, 300);
  noStroke();
}

function draw() {
  colorMode(HSB);
  background(0, 0, 100);
  colorMode(RGB);

  fill( 255, 0, 0, 100);
  ellipse(150, 120, 150, 150);
  
  fill(0, 0, 255, 100);
  ellipse(100, 200, 150, 150);
  
  fill(0, 255, 0, 100);
  ellipse(200, 200, 150, 150);
}