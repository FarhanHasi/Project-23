const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,angle;
var player, playerBase,playerArcher,base,archer;
var baseimage,arrowimage,playerimage;



function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  //playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(width-1500,height-490,200,200,options);
  World.add(world, playerBase);

    angle = 270;
   archer = new PlayerArcher(width-1380,height-680,150,210,angle);
}

function draw() {

  image(backgroundImg,0,0,windowWidth,windowHeight);
  Engine.update(engine);

  text(mouseX+','+mouseY,mouseX,mouseY);

  push();
  imageMode(CENTER);
  image(baseimage,playerBase.position.x,playerBase.position.y,250,200);
  pop();
 
  
   archer.display();
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}




