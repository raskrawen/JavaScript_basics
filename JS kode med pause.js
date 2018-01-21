var i=0;
var id;

function setup() {
 createCanvas(1000,1000); 
rect(50,50,50,50);
//noFill();
textSize(30);
id = setInterval(sleeper,1000); //pause på 1 sekund
}

function draw() {
   
  }

function sleeper() {
    i++;
    //fill(255);
    fill(255); //white fill
    noStroke(); // no border
    rect(400,400,300,40); //erase old text with white box
    fill(0); //black fill
    stroke(0); //black border
    //noFill();
    //strokeWeight(2);
    text("i: " + i,400,400, [300], [40]); // new text
    noFill(); // empty box
    rect(50+i*10,50,50,50); 
if (i==5) { // end code when i=5
  clearInterval(id); //end of loop
}
  
}
