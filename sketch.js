const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
var engine, world;
var score=0

function setup() {
  createCanvas(800,800);
  engine=Engine.create()
  world=engine.world
 ground=new Ground(400,790,1200,20)
 for(var k=0;k<width;k=k+80){
   divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
 }
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
  ground.display() 
  fill("white")
  textSize(20)
  text("score:"+score,700,30)
  for (var i=0;i <plinkos.length;i++){
    plinkos[i].display()
  }
  for (var i=0;i < divisions.length;i++){
    divisions[i].display()
  }
  if(frameCount%60==0){
particles.push(new Particle(random(width/2-10,width/2+10),10,10))
score++
  }
  textSize(50)
  if(score>10){
  fill("red")
    text("Game Over",300,400)
  }
  for (var i=0;i < particles.length;i++){
    particles[i].display()
  }
  drawSprites();

}