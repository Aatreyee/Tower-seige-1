const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;

var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  
  stand1 = new Ground(200,270,100,10);
  stand2 = new Ground(300,200,160,10);

  block1 = new Block(200,250,30,40);
  block2 = new Block(230,250,30,40);
  block3 = new Block(260,250,30,40);
  block4 = new Block(290,250,30,40);
  block5 = new Block(300,200,30,40);
  block6 = new Block(330,200,30,40);
  block7 = new Block(360,160,30,40);
  block8 = new Block(390,160,30,40);
 
  
 

}

function draw() {
  background("brown"); 
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block7.display();
  block8.display();
  //block9.display();

  
  stand1.display();
  stand2.display();

  
}

