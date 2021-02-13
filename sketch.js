//The Global Car Safety Organisation program worth $1000 
const World =  Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

//varring the names 
var world,engine;
var bullet,wall;
var speed,weight;
var height;
var thickness;

function setup() {
  createCanvas(1600,400);
 
  //setting the values randomly 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(23,83);

  //car 
  bullet= createSprite(50,260,50,50);
  bullet.shapeColor=color(39,67,230);
 bullet.velocityX = speed;
  //wall
  wall=createSprite(1200,200, thickness, height/2)
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);  
if (bullet.isTouching(wall)) {
  bullet.velocityX=0;
}
//DAMAGE
var damage = 0.5*weight*speed*speed/thickness*thickness*thickness
//.When the collision happens, based on damage calculations, determine the color of the wall as red or green. See the examples below.
//If the damage is greater than 10, then the wall is not effective against the bullet.535,81

if(damage<4&&bullet.isTouching(wall)){
bullet.shapeColor = color(0, 255, 0);
text("GOOD",535,81);
}
if(damage>10&&bullet.isTouching(wall)){
  bullet.shapeColor = color(255,0,0);
  text("LETHAL!!",535,81);
}
  drawSprites();
  //console.log(mouseX,mouseY);
}