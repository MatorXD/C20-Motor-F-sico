
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let galar;

var ball;
var floor;
var ball2;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  galar=World.create();

  var floor_option={
    isStatic:true
  };

  var ball_option={
    restitution:0.95,
    frictionAir:0.01
  };

  ball=Bodies.circle(100,10,20,ball_option);
  World.add(galar,ball);

  floor=Bodies.rectangle(200,370,400,20,floor_option);
  World.add(galar,floor);
  
  ball2=Bodies.circle(150,10,20);
  World.add(galar,ball2);
}
function draw() 
{
  background(200);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  rect(floor.position.x,floor.position.y,400,20);
  ellipse(ball2.position.x,ball2.position.y,20);
}
