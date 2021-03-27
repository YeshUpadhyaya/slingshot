
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,boy,treeImg,slingshot,stoneImg;
function preload(){
	treeImg=loadImage("tree.png");
	stoneImg=loadImage("stone.png");
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=Bodies.rectangle(650,595,width,10,{isStatic:true});
	World.add(world,ground)
	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30); 
	mango3=new mango(1010,140,30); 
	mango4=new mango(1000,70,30); 
	mango5=new mango(1100,70,30); 
	mango6=new mango(1000,230,30); 
	mango7=new mango(900,230,25); 
	mango8=new mango(1140,150,25); 
	mango9=new mango(1100,230,25); 
	mango10=new mango(1200,200,25);
	mango11=new mango(1120,50,25); 
	mango12=new mango(900,160,25);
	stone=Bodies.circle(250,420,20);
	World.add(world,stone);
	var option={
		pointA:{x:250,y:350},
		bodyB:stone,
		stiffness:0.05
	}
	slingshot=Matter.Constraint.create(option);
	World.add(world,slingshot);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  rect(ground.position.x,ground.position.y,1300,10);
  drawSprites();
	imageMode(CENTER);
	image(treeImg,1050,300,500,600);
	image(stoneImg,stone.position.x,stone.position.y,40,40);

  mango1.display(); 
  mango2.display(); 
  mango3.display();
   mango4.display();
    mango6.display();
	 mango7.display();
	  mango8.display();
	   mango9.display();
	    mango10.display();
		 mango11.display();
mango12.display();
collide(stone,mango1);
collide(stone,mango2);
collide(stone,mango3);
collide(stone,mango4);
collide(stone,mango5);
collide(stone,mango6);
collide(stone,mango7);
collide(stone,mango8);
collide(stone,mango9);
collide(stone,mango10);
collide(stone,mango11);
collide(stone,mango12);

}

function mouseDragged (){
	Matter.Body.setPosition(stone,{x:mouseX,y:mouseY});
}
function mouseReleased (){
	slingshot.bodyB=null;
}

function collide(S,M){
	Sbodie=S.position
	Mbodie=M.mangoes.position
	var distance=dist(Sbodie.x,Sbodie.y,Mbodie.x,Mbodie.y);
	if(distance<=M.r+20){
		Matter.Body.setStatic(M.mangoes,false)
	}
}