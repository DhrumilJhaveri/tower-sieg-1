const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ground,ground1;
var ball,rope;

function setup() {
  createCanvas(1000,800);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(500,780,1000,50);
  ground1=new Ground(600,400,500,50);
  
  box1=new Box(600,350,70,70);
  box2=new Box(500,350,70,70);
  box3=new Box(400,350,70,70);
  box4=new Box(700,350,70,70);
  box5=new Box(800,350,70,70);
  box6=new Box(400,300,70,70);
  box7=new Box(500,300,70,70);
  box8=new Box(600,300,70,70);
  box9=new Box(700,300,70,70);
  box10=new Box(800,300,70,70);

  ball=new Ball(200,100,40);
  rope=new Slingshot(ball.body,{x:200,y:100});
  
}

function draw() {
  Engine.update(engine);

  background(0);  
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

ground1.display();
  ball.display();
  rope.display();
  
}




function mouseDragged(){

      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  rope.fly();
  

}

function keyPressed(){
  if(keyCode === 32){
     rope.attach(ball.body);
     Matter.Body.setPosition(ball.body,{x:200,y:100});
     
     
  }
}