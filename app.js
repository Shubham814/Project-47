var START = 0;
var PLAY = 1;
var INS = 2;
var END = 3;
var PAS = 4;
var gameState = START;


var form
var level = 1;
var target = 100;
var score = 0;

var rocketImg , bg , bulletImg;
var rocket,bullet,bulletGroup;

var continue1 , continue2;

var angle = 0;

var asteroid,asteroidImg,obstacleGroup;

var endSound,gameOver;


function preload(){
    rocketImg = loadImage("rocket.png");
    bulletImg = loadImage("bullet1.png");
    bg = loadImage("bg.jpg");
    asteroidImg = loadImage("asteroid.jpg");

    gameOver = loadImage("gameOver.jpg");

    endSound = loadSound("end.mp3");
}
function setup(){
    createCanvas(windowWidth-5,windowHeight-10);
    form = new Form();
    continue1 = new Continue();

    
        rocket = createSprite(width/2,height-100,50,50);
        rocket.addImage(rocketImg);
        rocket.scale =0.2;

       angleMode(DEGREES);

       angle = 0;
       obstacleGroup = createGroup();
       bulletGroup = createGroup();
    
}
function draw(){

    angle = angle + 5;

    if(gameState === START){
        background(37,41,116);
        form.display();
    }

    if(gameState === INS){
        clear();
        form.hide();
        background(37,41,116);

        fill("yellow");
        textSize(100);
        text("Story: " ,20 , 100);

        fill("white");
        textSize(25);
        text("Moon's aliens has sent aliens spaceship in asteroids to destroy our Earth." ,100 , 200);
        text("You are the hero of our planet you should save our planet and our people by destroying these." ,100 , 250);
        

        fill("yellow");
        textSize(100);
        text("Hints: " ,20 , 400);

        fill("white");
        textSize(25);
        text("1) Use Left, Right, Up, Down arrow to control the rocket." ,100 , 500);
        text("2) To shoot bullets press S or SPACE key." ,100 , 550);
        text("3) On the top of your screen there is the target you want to reach." ,100 , 600);

        
        
        continue1.display();
    }



    if(gameState === PLAY){

        background(bg);
        form.hide();
        continue1.hide();
      
    
        textSize(25);
        fill(255);

        text("Level " + level , 10,25);
        text("Target :" + target,10,75);

        textSize(30);
        fill(255);

        text("Score :" + score,width-150,50);

        if(level === 1  && score === 100){
            level = 2;
            target = 250;
            score = 0;
        }
        if(level === 2  && score === 250){
            level = 2;
            target = 500;
            score = 0;
        }
        if(level === 3  && score === 500){
            level = 2;
            target = 600;
            score = 0;
        }

        spawnObstacles();

        for(var i = 0; i < obstacleGroup.length; i++){
            if(obstacleGroup.get(i).isTouching(bulletGroup)){
                obstacleGroup.get(i).destroy();
                bulletGroup.get(i).destroy();
                score += 10;
                
            }
          }

          if(obstacleGroup.isTouching(rocket)){
              gameState = END;
          }

          
            
         

        
        // Code for key controls
        if(keyIsDown(37)){
            rocket.x = rocket.x - 20;
        }
        if(keyIsDown(39)){
            rocket.x = rocket.x + 20;
        }
        if(keyIsDown(38)){
            rocket.y = rocket.y - 20;
        }
        if(keyIsDown(40)){
            rocket.y = rocket.y + 20;
        }
        if(keyWentDown(32) || keyWentDown(83)){
            spawnBullets();
        }
        

        // Code for making the rocket look like that it is not crossing screen
        if(rocket.x < 0){
            rocket.x = 15;
        }
        if(rocket.x > width){
            rocket.x = width-15;
        }
        if(rocket.y > 635){
            rocket.y = 635;
        }

        
        

     

        drawSprites();
    }


    if(gameState === END){
        background(0);

        imageMode(CENTER);
        image(gameOver,width/2,height/2);
    }


    

}



function spawnBullets(){
        bullet = createSprite(rocket.x , rocket.y - 50 , 20,20);
        bullet.addImage(bulletImg);
        bullet.scale = 0.1;
        bullet.velocityY = -50;
        bulletGroup.add(bullet);
}

function spawnObstacles(){
    if(frameCount%60===0){
        push();
        translate(0,0);
        rotate(angle);
        asteroid = createSprite(random(50,width-50),-50,10,10);
        asteroid.addImage(asteroidImg);
        asteroid.velocityY = 10;
        asteroid.scale = 0.2;
        obstacleGroup.add(asteroid);
        pop();
    }
}