const eng = Matter.Engine;
const bod = Matter.Bodies;
const wor = Matter.World;

var engine, world, ball, ground;
function setup() {
  createCanvas(400,400);
  engine = eng.create();
  world = engine.world;
  
  var options={
    restitution: 2
  }
  ball = bod.rectangle(200,200,50,50,options);
  
  wor.add(world,ball);
  var gOptions={
    isStatic: true
  }
  ground = bod.rectangle(200,390,200,20, gOptions);
  wor.add(world,ground);
}


function draw() {
  background(0);  
  eng.update(engine);
  ellipse(ball.position.x, ball.position.y, 50, 50);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,10);
}