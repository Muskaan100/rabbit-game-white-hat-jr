var garden,rabbit;
var gardenImg,rabbitImg;
var apple , appleImg;
var leaf , leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple-1.png");
  leafImg=loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
  

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  apples();
  createleaves();
  drawSprites();
}
function apples () {
  if((frameCount%80)===0){
  apple = createSprite(random(50 , 350),40 , 10 ,10)
  apple.addImage(appleImg);
  apple.scale=0.07
  apple.velocityY=3
  rabbit.depth = apple.depth ; 
  apple.depth = rabbit.depth - 3 ;
  }
  }
  function createleaves (){
  if((frameCount%120)===0){
  leaf = createSprite(random(60 , 380),40 , 10 ,10)
  leaf.addImage(leafImg);
  leaf.scale=0.07;
  leaf.velocityY=2;
  rabbit.depth = leaf.depth ; 
  leaf.depth = rabbit.depth - 4 ; 
  }
}