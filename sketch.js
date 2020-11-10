var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {
  createCanvas(600,600);
  monkey = createSprite(200,447,10,5);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.2;
  
  ground = createSprite(300,500,900,10);
  ground.velocityX=3;
  ground.x=ground.width/2;
  //console.log(ground.x);
  
  FoodGroup = new Group();
}

function draw() {
  background(255);
  if(ground.x<550){
    ground.x=300
  }
  if(keyDown("space")){
    monkey.velocityY = -8
  }
  if(frameCount % 80 === 0){
    Banana();
  }
  if(frameCount % 300 === 0){
    Obstacles();
  }
  monkey.velocityY += 0.5
  monkey.collide(ground)
  drawSprites(); 

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,100,40);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,400,40);
}

function Banana(){
    banana = createSprite(300,Math.round(random (120,200)),10,5);
  banana.addImage(bananaImage);
  banana.scale=0.15;
  banana.velocityX= -3
  banana.lifetime=100
  FoodGroup.add(banana)
}

function Obstacles(){
  obstracle = createSprite(Math.round(random(255,600)),470,10,5);
  obstracle.scale=0.15
  obstracle.velocityX= -4;
  obstracle.addImage(obstacleImage)
  obstracle.lifetime=100
}



