
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	roof = new Ground(750,50,700,40)
	bobObject1 = new Bob(550,600,100);
	bobObject2 = new Bob(650,600,100);
	bobObject3 = new Bob(750,600,100);
	bobObject4 = new Bob(850,600,100);
	bobObject5 = new Bob(950,600,100);
	//rope1 = new Rope(bobObject1.body,roof.body,{x:-200,y:200});
	//rope2 = new Rope(bobObject2.body,roof.body,{x:-100,y:200});
	rope3 = new Rope(bobObject3.body,roof.body,{x:0,y:20});
	//rope4 = new Rope(bobObject4.body,roof.body,{x:100,y:200});
	//rope5 = new Rope(bobObject5.body,roof.body,{x:200,y:200});
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("red");
  roof.display();
  //rope1.display();
  //rope2.display();
  rope3.display();
  //rope4.display();
  //rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50})

	}
}



