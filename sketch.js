const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
  bg = loadImage("bg.jpg")
}
function setup() {
  createCanvas(1365,655);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(600,400,250,10);
  stand2 = new Stand(900,235,200,10);
 
  //level one
  block1 = new Block(510,380,30,40);
 // console.log(block1);
  block2 = new Block(540,380,30,40);
  block3 = new Block(570,380,30,40);
  block4 = new Block(600,380,30,40);
  block5 = new Block(630,380,30,40);
  block6 = new Block(660,380,30,40);
  block7 = new Block(690,380,30,40);
  //level two
  block8 = new Block(540,350,30,40);
  block9 = new Block(570,350,30,40);
  block10 = new Block(600,350,30,40);
  block11 = new Block(630,350,30,40);
  block12 = new Block(660,350,30,40);
  //level three
  block13 = new Block(570,320,30,40);
  block14 = new Block(600,320,30,40);
  block15 = new Block(630,320,30,40);
  //top
  block16 = new Block(600,290,30,40);

 //set 2 for second stand
  //level one
  blocks1 = new Block(840,215,30,40);
  blocks2 = new Block(870,215,30,40);
  blocks3 = new Block(900,215,30,40);
  blocks4 = new Block(930,215,30,40);
  blocks5 = new Block(960,215,30,40);
  //level two
  blocks6 = new Block(870,185,30,40);
  blocks7 = new Block(900,185,30,40);
  blocks8 = new Block(930,185,30,40);
  //top
  blocks9 = new Block(900,155,30,40);

  polygon = Bodies.circle(300,350,20);
  World.add(world,polygon);

slingShot = new sling(this.polygon,{x:300,y:350});
}
function draw() {
  background(bg); 

  textSize(25);
  fill("blue");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 290, 50);

  textSize(20);
  fill("red");
  text("Press Space to get Another Chance to Play!!", 880, 550);

  ground.display();
  stand1.display();
  stand2.display();
  
  //strokeWeight(2);
 // stroke(15);
 // fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 // fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
 // fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
 // fill("grey");
  block16.display();
//  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  //fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
 // fill("pink")
  blocks9.display();
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
slingShot.display();
}

 function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x: mouseX, y: mouseY})
} 

function mouseReleased(){
  slingShot.fly()
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.polygon,{x:300,y:350})
  slingShot.attach(this.polygon);   
  }
}