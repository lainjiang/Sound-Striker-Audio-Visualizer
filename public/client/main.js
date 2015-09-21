var mouse;
var count = 0;

var playing = false;

function preload() {
  // serve sound file
  soundFormats('m4a');
  sound = loadSound('assets/circling.m4a');
}

function setup() {
  mouse = createVector(mouseX,mouseY);
  createCanvas(windowWidth,windowHeight);
  MnowPos = createVector(500,500);
  Macc = createVector(2,-2);
  noStroke();
  fill(0);
  rectMode(CENTER);
  background(255);

  colorA = color(48,222,179);

  amp = new p5.Amplitude();
  
  // textAlign(CENTER);
  // fill(100);
  // noStroke();
  // text("Click to play sound", width/2, height/2);
  frameRate(20);
}
function draw() {
  background(255);
  // mouse.set(mouseX,mouseY);

  var level = amp.getLevel();
  var size = map(level, 0, 1, 0, 20);

  var x1 = mouseX;
  var y1 = mouseY;
  // ellipse(width/2, height/2, size, size);
  
  for (var i = 0; i < size; i++){
    var noiseRaw = noise(x1, y1);
    var noiseRot = map(noiseRaw, 0.2, 0.8, 0, PI*2 );
    var x2 = x1 + sin(noiseRot) * random(size * 20, size * 40);
    var y2 = y1 + cos(noiseRot) * random(size * 20, size * 40);

    stroke(0);
    line(x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
  }

  // for(var i = 0; i < particles.length; i++){
  //   particles[i].update();
  //   particles[i].draw();
  //   var noiseRaw = noise(particles[i].nowPos.x * 0.006, particles[i].nowPos.y * 0.006);
  //   var noiseRot = map(noiseRaw, 0.2, 0.8, 0, PI*2 );
  //   particles[i].acc.set(cos(noiseRot)*3, sin(noiseRot)*3);
  // }

  // if(particles.length < 100){
  //   MnowPos.set(mouse);
  //   MnowPos.add(random(-10, 10), random(-10, 10));
  //   // particles[i] = new Particle(MnowPos,Macc,colorA);
  //   // set color based on where the particle is generated
  //   // var mLoc = int(map(mouseX, 0, width, 0, 4));
  //   // if(mLoc === 0){
  //   //   particles[i] = new Particle(MnowPos,Macc,colorA);
  //   // }
  //   // else if(mLoc == 1){
  //   //   particles[i] = new Particle(MnowPos,Macc,colorB);
  //   // }
  //   // else if(mLoc == 2){
  //   //   particles[i] = new Particle(MnowPos,Macc,colorC);
  //   // }
  //   // else if(mLoc == 3){
  //   //   particles[i] = new Particle(MnowPos,Macc,colorD);
  //   // }
  // }
  // for(var j = 0; j < particles.length; j++){
  //   if(particles[j].nowPos.x >= width-10 || particles[j].nowPos.x <= 10 || particles[j].nowPos.y >= height-10 || particles[j].nowPos.y <= 10  || particles[j].lifeCount <= 0){
  //     particles.splice(j,1);
  //   }
  // }

}

function mousePressed() {
  if (!playing) {
    sound.play();
    playing = true;
  }
  else {
    sound.pause();
    playing = false;
  }
}

// function Particle(posN, accN, colorIn){
//   this.nowPos=createVector(posN.x,posN.y);
//   this.acc = createVector(accN.x, accN.y);
//   this.lifeCount = random(100,400);
//   this.colorN = colorIn;
// }

// Particle.prototype.update = function(){
//   this.lifeCount--;
//   this.nowPos.add(this.acc);
// };

// Particle.prototype.draw = function(){
//   fill(this.colorN);
//   ellipse(this.nowPos.x, this.nowPos.y, 2, 2);
// };