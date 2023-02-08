let sprites;
let animation = 9;
let current = 0;
let a = 0;
let b = 0;
let c = 80;
let d = 80;
let x = 0;
let moves = 0;
let direction = 1;

function preload() {
  sprites1 = loadImage("sprites/sprites1.png");
  sprites2 = loadImage("sprites/sprites2.png");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  walkAnimation1 = new WalkAnimation(sprites1, 80, 80, 200, 200, 9);
  walkAnimation2 = new WalkAnimation(sprites2, 80, 80, 100, 100, 9);
}

function draw() {
  background(220);
  walkAnimation1.draw();
  walkAnimation2.draw();
}
  
function keyPressed() {
  walkAnimation1.keyPressed(RIGHT_ARROW, LEFT_ARROW);
  walkAnimation2.keyPressed(UP_ARROW, DOWN_ARROW);
}
  
function keyReleased() {
  walkAnimation1.keyReleased(RIGHT_ARROW, LEFT_ARROW);
  walkAnimation2.keyReleased(UP_ARROW, DOWN_ARROW);
}

class WalkAnimation {
  constructor(sprites, c, d, dx, dy, animation) {
    this.sprites = sprites;
    this.c = c;
    this.d = d;
    this.dx = dx;
    this.dy = dy;
    this.a = 0;
    this.b = 0;
    this.animation = animation;
    this.current = 0;
    this.direction = 1;
    this.moves = 0;
  }
  
  draw() {
    if(this.moves != 0) {
      this.a = this.current % this.animation;
    }
    else {
      this.a = 0;
    }
    translate(this.dx, this.dy);
    scale(this.direction, 1);
    image(this.sprites, 0, 0, this.c, this.d, this.a * this.c, this.b * this.d, this.c, this.d); 
    if(frameCount % 6 == 0) {
      this.current ++;
    }
    this.dx += this.moves;
  }

  keyPressed(right, left) {
    if(keyCode === right) {
      this.moves = 1;
      this.direction = 1;
      this.current = 0;
     }
    else if(keyCode === left) {
      this.moves = -1;
      this.direction = -1;
      this.current = 0;
    }
  }
  
  keyReleased(right, left) {
    if(keyCode === right || keyCode === left) {
      this.moves = 0;
    }
  }
}