
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper, paperI;
var dustbin, dustbinI;

function preload()
{
	paperI = loadImage("paper.png");
	dustbinI = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(500,490,1000,20);

	paper = new Paper(100,100,20);

	dustbin = new Dustbin(900,425);

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background("lightblue");
  
  	paper.display();
	ground.display();
	dustbin.display();

	launch();
  	drawSprites();
 
}

function launch(){
	if(keyWentDown(UP_ARROW) || keyWentDown("w")){
		Body.applyForce(paper.body,paper.body.position,{x:77,y:-77});
	}
}


