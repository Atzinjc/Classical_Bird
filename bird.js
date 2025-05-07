class Bird{

 
  constructor(py, spd, gravity){

    this.py = py;
    this.spd = spd;
    this.gravity = gravity;
    
  }

  render(){
  fill(200,70,75);
  ellipse(width/3, this.py, 25, 25);
  ellipse(width/3, this.py + height+25, 25, 25);
  this.py = this.py + this.spd;
  this.spd = this.spd + this.gravity;

  if (this.py > height) {
    this.py = height;
  }
 }
}

function keyReleased(){
  if (keyCode == 32 ) {
    bird.spd = (bird.spd * 3/4) - 3
  }
  console.log(keyCode)
}