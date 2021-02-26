const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
function setup() { 
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

  ground1=new Ground("240,700,400,15");

  
}

function draw() {

  background(255,255,255);
  Engine.update(engin);
ground1.display();

  
  drawSprites();
}