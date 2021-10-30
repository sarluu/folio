function setup() {
createCanvas(600, 600);
}

function draw() { 
  background(180, 220, 237);
  
//grass
  fill(110, 173, 109);
  rect(0,450,600,600);
  
//sun
  fill(255, 215, 66);
  arc(600,0,250,250,radians(0),radians(180));

  
//hair
fill(0,0,0);
arc(300, 360, 428, 580, radians(180), radians(0));
rect(86,360,428,180);

//head
fill(255,215,179);
ellipse(300,300,345,430);

//eyes
fill(0,0,0);
ellipse(190,320,20,20);
ellipse(410,320,20,20);

//mouth
strokeWeight(2);
line(250,400,400,380);

//hair (bangs)
arc(300, 260, 380, 350, radians(180), radians(0));
fill(201, 40, 40);
strokeWeight(0);
arc(310, 260, 400, 381, radians(180),radians(270));

//neck
fill(255,215,179);
rect(265,500,80,90);

//shirt
fill(60,60,60);
rect(205,530,200,200);
   
//shoulders
fill(255,215,179);
arc(210, 600, 140, 140,radians(180),radians(270));
arc(400, 600, 140, 140,radians(270),radians(0));

//ears
fill(255,215,179);
arc(305,530,100,100,radians(0),radians(180));
arc(135,330,60,60,radians(90),radians(270));

//also neck
arc(465,330,60,60,radians(270),radians(90));
fill(200,200,200)

//earrings
rect(120,350,5,90);
rect(475,350,5,90);
}
