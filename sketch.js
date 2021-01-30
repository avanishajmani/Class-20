var fixed
var move

function setup() {
  createCanvas(800,400);
  move = createSprite(400, 200, 50, 50);
  move.shapeColor = "blue"
  fixed = createSprite(300,100,50,50);
  fixed.shapeColor = "green"
  
}

function draw() {
  background(255,255,255);  
  drawSprites();

  move.x = mouseX
  move.y = mouseY

  icollide()

}
function icollide() {
  if(move.x - fixed.x <= move.width/2 + fixed.width/2 && 
    fixed.x - move.x <= move.width/2 + fixed.width/2 &&
    move.y - fixed.y <=move.height/2 + fixed.height/2 &&
    fixed.y - move.y <= move.height/2 + fixed.height/2) {
    fixed.shapeColor = "purple"
    move.shapeColor = "yellow"

  }
else{
  fixed.shapeColor = "green"
  move.shapeColor = "blue"

}

}
