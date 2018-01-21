var numberOfPoints=0;
var points = [];
var stop = false;

function setup() { // runs once
 createCanvas(400,550);
 noFill();
  rect(50,300,200,200); //coordinate system
  fill(0);
}

function draw() {
}

function mouseReleased() { //called every time mousebutton is released
if ((mouseX>50) && (mouseX<250) && (mouseY>300) && (mouseY<500)) {
   //is mouse clicked within graphing area?
  fill(204, 101, 192, 127); //purple fill
  stroke(127, 63, 120); //blackish  outline
  ellipse(mouseX, mouseY, 10, 10); //draw point
  saveAPoint(mouseX,mouseY); //save point in array
  numberOfPoints++; //increment nr o points counter
  }
if (numberOfPoints == 3) { //print after three clicks
  print(points);
    //stop = true;
}  
}

function saveAPoint(x,y) {
  var onePoint = [];
  onePoint = [x,y];
  append (points,onePoint);
}  
  
function clearGraph() {
   fill(255); //white fill
    noStroke(); // no border
    rect(0,290,500,500); //clears graphing area
    fill(0); //black fill return
    stroke(0); //black border return
}
