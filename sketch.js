const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var ground,engine,world

var xforce=0,yforce=0;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(200,350,1000,20);
 net = new Ground(200,300,10,200);
  ball = new Ball(150,50,10);

  paddle = new Paddle(300,200,20,100);
  paddle2 = new Paddle(100,200,20,100);
  // create renderer
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 400,
        height: 400,
        showAngleIndicator: true,
    }
});

Render.run(render);
 

}

function draw() {
  background(0,0,0);  

  Engine.update(engine);
  ground.display();
 net.display();
  ball.display();
  paddle.display();
  paddle2.display();
  //AI
  //Matter.Body.setPosition(paddle2.body,{x:paddle2.body.position.x,y:ball.body.position.y}); 
 paddle.control_with_arrow(UP_ARROW,DOWN_ARROW,LEFT_ARROW,RIGHT_ARROW,96);
 paddle2.control_with_arrow(87,83,65,68,32);
}

