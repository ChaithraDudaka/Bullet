var bullet,wall,thickness;
var speed,weight;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor=rgb(0,0,0);
  wall = createSprite(1200,height/2,thickness,height/2);
  wall.shapeColor=rgb(80,80,80);
  speed=random(223,90);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var deformation=0.5* weight * speed * thickness/(thickness*thickness*thickness);
    if(deformation>10){
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<10 ){
      bullet.shapeColor=color(0,255,0)  
    }
  }
  drawSprites();

}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
  return true
  }
  
  return false;
}