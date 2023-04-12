//Carter lambo
// 2/6/23
// Avatar
let x
 let speed1X
let y 
let speed1Y



function setup() {
  createCanvas(400, 400);
  
  
  x = 25
  speed1X = 2
  y = 25
  speed1Y = .5
  egg1 = new Egg(x, y, .2);
}

function draw() {
  background(220, 100, 100);

  egg1.show();
  egg1.move();
  
}


class Egg {
  constructor( x, y, s){
  
  this.x = x;
  this.y = y;
  this.s = s;
  
  }
  
  move(){
    this.y = this.y + speed1Y
    this.x = this.x + speed1X
    if (this.x >= 330 || this.x <= -20){
      speed1X = speed1X * -1
    }
    if (this.y >= 330 || this.y <= -10){
    speed1Y = speed1Y * -1
    }
  }
  show(){
  push();
  translate(this.x, this.y)
  scale(this.s)
  
  ellipse(200, 200, 250, 350)
  line(200, 25, 200, 40)
  line(200, 40, 190, 50)
  line(190, 50, 210, 60)
  line(210, 60, 200, 80)
  line(200, 80, 220, 100)
  pop();
  }
}
