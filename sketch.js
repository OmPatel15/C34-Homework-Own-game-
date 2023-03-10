
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, rightside, leftside, platform

var ball
var balls=[]

var cannon,cannonBall




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES)
  angle = 15
 
  
  ground = new Box(200,400,width+10,25,"grey");
  
  leftside = new Box(250,353,15,70,"yellow");
  rightside = new Box(350,353,15,70,"yellow");
  platform = new Box(50,200,100,20,"yellow");

  cannon = new Cannon(50, 110, 100, 50, angle);


}


function draw() {

  background(51);
  Engine.update(engine);

  
  ground.display()
  leftside.display()
  rightside.display()
  platform.display()



  for (var i = 0; i < balls.length; i++)
    showCannonBalls(balls[i], i);
  
  cannon.display()
  showCannonBalls()
  keyPressed()


 
  
} 

function showCannonBalls(ball, index) {
  if (ball) {
    ball.display();
    }
  }

  function keyPressed() {
    if (keyCode === DOWN_ARROW) {
      var cannonBall = new CannonBall(cannon.x, cannon.y);
      cannonBall.trajectory = [];
      Matter.Body.setAngle(cannonBall.body, cannon.angle);
      balls.push(cannonBall);
    }
  }
  
  function keyReleased() {
    if (keyCode === DOWN_ARROW) {
      balls[balls.length - 1].shoot();
    }
  }
