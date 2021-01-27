var hr = hour();
var mn = minute();
var sc = second();


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  map()
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,60,60,0,360);
  hrAngle = map(hr,60,60,60,360);
  drawSprites();

  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
}
