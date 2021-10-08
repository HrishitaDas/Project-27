var bob1, bob2, bob3, bob4, bob5;
var roof;
var chain1, chain2, chain3, chain4, chain5;




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(320,575);
	bob2 = new Bob(360,575);
	bob3 = new Bob(390,575);
	bob4 = new Bob(430,575);
	bob5 = new Bob(450,575);

	roof = new Roof(400,250,230,20);

	chain1 = new Chain(bob1.body,{x:400, y:250})
	chain2 = new Chain(bob2.body,{x:320, y:250})
	chain3 = new Chain(bob3.body,{x:300, y:250})
	chain4 = new Chain(bob4.body,{x:450, y:250})
	chain5 = new Chain(bob5.body,{x:480, y:250})
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
chain5.display();
  








 
}



