var PLAY = 1;
var END = 0;
var DONE = 2;
var LOSE = 3;
var gameState = PLAY;

var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var banana1,banana2,banana3,banana4,banana5,banana6,banana7,banana8;
var FoodGroup, obstacleGroup;
var obstacle1,obstacle2,obstacle3,obstacle4;
var survivalTime;
var jungleImg,jungle;

function preload(){ 
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") 
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImg = loadImage("jungleImg.png");
 
}

function setup() {
  createCanvas(displayWidth,displayHeight)

  jungle = createSprite(0,0,600,600);
  jungle.addImage(jungleImg);
  jungle.scale = 2.5;
 
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,displayWidth,10);
  ground.x = ground.width/2;
  console.log(ground.x);

  banana1 = createSprite(250,300,20,20);
  banana1.addImage(bananaImage);
  banana1.scale = 0.1;
  
  banana2 = createSprite(500,200,20,20);
  banana2.addImage(bananaImage);
  banana2.scale = 0.1;

  banana3 = createSprite(700,268,20,20);
  banana3.addImage(bananaImage);
  banana3.scale = 0.1;
  
  banana4 = createSprite(900,150,20,20);
  banana4.addImage(bananaImage);
  banana4.scale = 0.1;
  
  banana5 = createSprite(1000,300,20,20);
  banana5.addImage(bananaImage);
  banana5.scale = 0.1;

  banana6 = createSprite(1200,200,20,20);
  banana6.addImage(bananaImage);
  banana6.scale = 0.1;
  
  banana7 = createSprite(1490,300,20,20);
  banana7.addImage(bananaImage);
  banana7.scale = 0.1;
  
  banana8 = createSprite(1700,200,20,20);
  banana8.addImage(bananaImage);
  banana8.scale = 0.1;

  obstacle1 = createSprite(400,322,20,20);
  obstacle1.addImage(obstacleImage);
  obstacle1.scale = 0.12;

  obstacle2 = createSprite(600,322,20,20);
  obstacle2.addImage(obstacleImage);
  obstacle2.scale = 0.12;

  obstacle3 = createSprite(900,322,20,20);
  obstacle3.addImage(obstacleImage);
  obstacle3.scale = 0.12;

  obstacle4 = createSprite(1400,322,20,20);
  obstacle4.addImage(obstacleImage);
  obstacle4.scale = 0.12;
  
  
  
  
  //obstacleGroup = createGroup();
  
}


function draw() {
  background(255);
  if(gameState === PLAY){

    jungle.velocityX = -3 

  if (jungle.x < 0){
      jungle.x = jungle.width/2;
  }
  
    // CONTROLS FOR THE MONKEY
   if(keyDown("UP_ARROW")){
    monkey.velocityY = -14;
   }   
   if(keyDown("RIGHT_ARROW")){
    monkey.x = monkey.x+6;
   } 
   if(keyDown("LEFT_ARROW")){
    monkey.x = monkey.x-6;
   }
    
   monkey.velocityY = monkey.velocityY +1;
   monkey.collide(ground);

   ground.velocityX = -4;
    
   if(ground.x>0){
    ground.x = ground.width/2;
   }

   if(banana1.isTouching(monkey)){
     banana1.destroy();
   }

  if(banana2.isTouching(monkey)){
    banana2.destroy();
  }

  if(banana3.isTouching(monkey)){
    banana3.destroy();
  }

  if(banana4.isTouching(monkey)){
    banana4.destroy();
  }
   
  if(banana5.isTouching(monkey)){
    banana5.destroy();
  }
   
  if(banana6.isTouching(monkey)){
    banana6.destroy();
  }

  if(banana7.isTouching(monkey)){
    banana7.destroy();
  }

  if(banana8.isTouching(monkey)){
    banana8.destroy();
  }

  if(obstacle1.isTouching(monkey)){
    monkey.destroy();
    gameState = LOSE;
  }

  if(obstacle2.isTouching(monkey)){
    monkey.destroy();
    gameState = LOSE;
  }

  if(obstacle3.isTouching(monkey)){
    monkey.destroy();
    gameState = LOSE;
  }

  if(obstacle4.isTouching(monkey)){
    monkey.destroy();
    gameState = LOSE;
  }

  if(monkey.x>1800){
    gameState=END;
  }

  if(gameState===END){
    jungle.destroy();
    monkey.destroy();
    banana1.destroy();
    banana2.destroy();
    banana3.destroy();
    banana4.destroy();
    banana5.destroy();
    banana6.destroy();
    banana7.destroy();
    banana8.destroy();
    

    ground.destroy();
    obstacle1.destroy();
    obstacle2.destroy();
    obstacle3.destroy();
    obstacle4.destroy();

    gameState=DONE;
    
  }

  if(gameState===DONE){
    fill("black");
    textSize(100);
    text("You Win!",900,400);
  }
   
  if(gameState===LOSE){

    jungle.destroy();

    monkey.destroy();
    banana1.destroy();
    banana2.destroy();
    banana3.destroy();
    banana4.destroy();
    banana5.destroy();
    banana6.destroy();
    banana7.destroy();
    banana8.destroy();

    ground.destroy();
    obstacle1.destroy();
    obstacle2.destroy();
    obstacle3.destroy();
    obstacle4.destroy();
    fill("black");
    textSize(100);
    text("You Lose!",900,400);
  }
   
  }
  drawSprites();
  fill("black");
  textSize(30)
  text("Start",40,400);
  text("Finish",displayWidth-120,400);

}
    
    //food();
    //spawnObstacles();
    
 /*   if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
      
    }
  }
  
  
  }
  
  
*/

/*function food() {
  if(frameCount%80 === 0){
  banana = createSprite(700,200,20,20);
  banana.velocityX = -6;
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.lifetime = 150;
    
  FoodGroup.add(banana);
    
  }
}*/

/*function spawnObstacles() {
  if(frameCount%300 === 0){
  obstacle = createSprite(700,322,20,20);
  obstacle.velocityX = -6;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.12;
  obstacle.lifetime = 150;
    
  obstacleGroup.add(obstacle);
  
}
}
 */ 




