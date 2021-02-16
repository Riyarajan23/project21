var car,speed,weight,wall
function setup() {
  createCanvas(1600,400);
  speed=random (55,90);
  weight=random (400,1500);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed 
  car.shapeColor="yellow";
  wall=createSprite (1200,200,40,200);
}

function draw() {
  background(255,255,255);  
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var d = 0.5*weight*speed*speed/22509
    if (d >180){
      car.shapeColor="red"
    }
    if (d<=180){car.shapeColor="green"}
  }
  drawSprites();
}