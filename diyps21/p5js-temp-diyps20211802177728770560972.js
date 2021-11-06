var img;
var initials ='sh'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 240; // off white background

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('heart.jpeg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
// img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(800, 600);  // canvas size
background(screenbg);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice); 
  }
}

function newkeyChoice(toolChoice) { 

 if (toolChoice == '1' ) {  // first tool, sketch
   
    strokeWeight(2);
    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool, black 
    
    strokeWeight(5);
    stroke(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') { // third tool, red

    strokeWeight(3);1
    stroke(237,20,0);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') { // fourth tool, yellow (holes)
     
    strokeWeight(3);
    stroke(235, 228, 26);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // fifth tool, pink (bg)
  
    fill(255, 184, 206);
    strokeWeight(0);
    rect(mouseX,mouseY,80,80);
    
  } else if (toolChoice == '6') { //sixth tool, yellow (body)
     
    fill(255, 235, 82);
    strokeWeight(0);
    rect(mouseX, mouseY, 20, 20);
  
  } else if (toolChoice == '7') { //seventh tool, brown (pants)
    
    fill(74, 38, 14);
    strokeWeight(0);
    rect(mouseX, mouseY, 20, 20);
    
  } else if (toolChoice == '8') { // eighth tool, [off] white (eyes)

    fill(225,225,225);
    strokeWeight(0);
    rect(mouseX, mouseY, 20, 20);
    
  } else if (toolChoice == '9') { //ninth tool, blue (eyebawls)

    fill(82, 217, 255);
    strokeWeight(0);
    rect(mouseX, mouseY, 20, 20);
    
  } else if (toolChoice == '0') { //tenth tool
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
    
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // 11th tool
    image(img, mouseX-25, mouseY-25, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
     key = ""; // reset the key so that it doesn't keep taking screenshots
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
    filename=initials+day() + hour() + minute() +second();
    saveCanvas(filename, 'jpg');
 // }
}
