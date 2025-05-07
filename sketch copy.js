
let environment, bird;
let counter = 0;
let spaceTransitioning = false;
let bgColor;
let birdIsCold = false;
let state = 0;
let birdCantBreathe = false;
// let width = 1920;
// let height = 1080;

let violinConcerto;

function preload() {
  violinConcerto = loadSound('Mendelsshn violin concerto.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    sunnybg1x = width/2;
    sunnybg2x = sunnybg1x*3;
    cloudybg1x = width/2;
    cloudybg2x = cloudybg1x*3;
    
    environment = new Environment();
    bird = new Bird(100, 0.5, 0.05);

    textFont('Georgia');
    textAlign(CENTER);

    startButton = createButton('Start Game');
    startButton.position(width / 2 - 70, height / 2 + 40);
    startButton.style('font-size', '18px');
    startButton.style('padding', '10px 20px');
    startButton.style('font-family', 'Georgia');
    startButton.mousePressed(startGame);
}

function startGame(){
  state = 1;
  startButton.hide();
}

function draw() {
  background(240, 230, 200); // Soft parchment-like tone
  fill(80, 50, 20);
  textSize(48);
  text("Classical Bird", width / 2, height / 2 - 40);

  textSize(16);
  fill(0);
  text("A poetic flight through classical skies", width / 2, height / 2);
 
 
 
  if (state === 1) {
    draw1(); // Placeholder for your main game
  }
}




function draw1() {

  if (!violinConcerto.isPlaying()) {
    violinConcerto.play();
  }
 
  environment.render();
  bird.render();

  console.log(counter);
  console.log(bird.spd," ", bird.gravity);
  console.log(counter);
  
  if(bird.py < 0){
 
    if (spaceTransitioning == false){
      bird.gravity = 0.025;
      spaceTransitioning == true;
    }}else{
      bgColor = 200
      bird.gravity = 0.05
    }
  if (bird.py > 0){
    if (spaceTransitioning == true){
      
    }
  }


  if(bird.spd > 20 && birdIsCold == false){
    birdIsCold = true;
  }
  if (bird.py < -height && birdCantBreathe == false){
    birdCantBreathe = true;
  }
  
  console.log(birdIsCold)

  if(birdIsCold == true){
    draw2();
  }

  if(birdCantBreathe == true){
    draw3();
  }
}

function draw2(){  
  background(0);
  textFont("Georgia");
  textSize(64);
  fill(255, 0, 0);
  text("i need shelter...", width / 2, height / 2 - 30);
}

function draw3(){
  fill(255,0,0);
  background(100);
  textSize(64);
  text("i can't...", width/2, height/2);
}

function draw4(){

}