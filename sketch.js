
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper,paperImage, dustbinImage;

function preload(){
  dustbinImage = loadImage("Dustbin.png")
  paperImage = loadImage("paper.png");
}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(580, 365, 100, 10);
  paper = new Paper(130, 280, 10);

 ground = new Ground(width/2, 380, width, 20);
 
}

function draw() {
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("red");
	text("This Game will teach you the importance of throwing away your trash.", 50, 200)
	text("        Press Up Arrow to Start, and Up to throw away the trash.", 50, 240)
	
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }

  if (gameState === "play") {
    rectMode(CENTER);
    background("cyan");
   
    
  
   
    

     ground.display();
  
     imageMode(CENTER);
     image(paperImage, paper.body.position.x, paper.body.position.y, 50,50);
     paper.display();
     
     dustbin.display();
     image(dustbinImage, 580, 320, 123,100);
 
  

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
