var ballx = 300;
var bally = 300;
var ballSize= 100;
var score = 0;
var gameState = "L1";
//var shtuff====================================================

function preload(){
  img= loadImage ('https://sarluu.github.io/luusar.github.io/soul.png');
  bg1 = loadImage ('https://sarluu.github.io/luusar.github.io/midway.png');
  bg2 = loadImage ('https://sarluu.github.io/luusar.github.io/pixearth.jpeg');
  bg3 = loadImage ('https://sarluu.github.io/luusar.github.io/hell.png');
} // end preloadz ===============================================

function setup() {
  bg = loadImage ('https://sarluu.github.io/luusar.github.io/midway.png');
  bg2 = loadImage ('https://sarluu.github.io/luusar.github.io/pixearth.jpeg');
  bg3 = loadImage ('https://sarluu.github.io/luusar.github.io/hell.png');
  createCanvas(750, 750);
  textAlign(CENTER);
  textSize(25);
  
} // end setup==================================================

function draw(){
  background (bg);
  if(gameState == "L1"){
    levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
}
  if(gameState == "L3"){
    levelThree();
  }
  if(gameState == "L4"){
    levelFour();
}
  fill('rgb(255,255,255)');
  text(("souls caught: " + score), width/2, 40);
} // end draw==========================================

function levelOne(){
  background(bg);
  text("✧ realm 1 ✧", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if (distToBall<ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +1;
  } 
     
  if(score>=5) {
    gameState= "L2"
  }      
  // line(ballx, bally, mouseX, mouseY); 
  image(img, ballx, bally, ballSize, ballSize);
  
} // end of level one===================================

function levelTwo(){
  background(bg2);
  text("✧ realm 2 ✧", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall < ballSize/2){
    ballx=random(width);
    bally=random(height);
      score = score + 1;
} 
  
  if (score>=10){
    gameState= "L3";
    //background(158,82,250);
  }
   // line(ballx,bally,mouseX,mouseY);
    image(img, ballx, bally, ballSize, ballSize);
} // end level two ====================================

function levelThree(){
  background(bg3);
  text("✧ realm 3 ✧", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall < ballSize/2){
    ballx=random(width);
    bally=random(height);
      score = score + 1;
    ballSize = ballSize - 5;
} 
  
  if (score>=15){
    gameState= "L4";
  }
   // line(ballx,bally,mouseX,mouseY);
    image(img, ballx, bally, ballSize, ballSize);
} // end level three  ==================================

function levelFour(){
  background(0);
  text("there is nothing left here..how many of us have you found?", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall < ballSize/2){
    ballx=random(width);
    bally=random(height);
      score = score + 1;
    ballSize = ballSize - 5;
} 
  
  if (score>=20){
    gameState= "L4";
  }
   // line(ballx,bally,mouseX,mouseY);
    image(img, ballx, bally, ballSize, ballSize);
} // end of game, no further realms to travel =======================
