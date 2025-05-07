

class Environment{
 
  constructor(){
  rectMode(CENTER);
  }

  render(){

    //(# of Pages - 1 * width) / (60 * desired time) = desired time


    fill(100);
    rect(sunnybg1x, height/2, width, height);
    sunnybg1x -= width*6/16200;
    fill(200)
    rect(sunnybg2x, height/2, width, height);
    sunnybg2x -= width*6/16200;
   
  
    if (sunnybg1x <= -width / 2) {
      sunnybg1x = width*3/ 2;
      counter++;
    }
  
    if (sunnybg2x <= -width / 2) {
      sunnybg2x = width*3/ 2;
      counter++;
    }
  }
}