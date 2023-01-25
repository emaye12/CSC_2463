function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(235, 100, 75);

  stroke(0, 0, 100);
  strokeWeight(5);
  fill(130, 100, 60);
  ellipse(200, 200, 200, 200);
  
  stroke(0, 0, 100);
  strokeWeight(5);
  fill(360, 100, 100);
  star(200, 200, 100, 40, 5);
 
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}