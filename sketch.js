var backgroundImage;
var city;


function preload(){
backgroundImage=loadImage("background.jpg")
  
}



function setup() {
  createCanvas(1200,800);
  
 city=createSprite(10,350.1500,1010)
 city.addImage(backgroundImage)
 city.scale=1
 city.x=city.width/2;
 city.velocityX=-3
}

function draw() {
 background(255);
  
 if(city.x<0){
   city.x=city.width/2
 }

  drawSprites();
 
}

