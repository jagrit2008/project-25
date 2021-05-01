
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render =Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(width/2, 650, width, 10   );


	box1=new Dustbin(width/2,635,200,20)
	box2=new Dustbin(width/2-100,600,20,100)
	box3=new Dustbin(width/2+100,600,20,100)
	//Create the Bodies Here.
 paper=new Paper(150,150,70,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  box1.display();
  box2.display();
  box3.display();

  ground.display();
paper.display();

  drawSprites();
 
}
function keyPressed(){

    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-70})

    }
  }


