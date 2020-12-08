const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles=[]
var plinkos=[]
var divisions=[]

var engine, world;

function setup() {
  createCanvas(800,800);
  engine=Engine.create()
  world=engine.world
 ground=new Ground(50,700,400,20)
  for (var j=40;j <=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for (var j=15;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for (var j=50;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,275))
  }
}

function draw() {
  background(0);
  Engine.update(engine); 
  for (var j=0;j <=plinkos.length;j++){
    plinkos[j].display()
  }
  ground.display() 
  drawSprites();

}