var ast, astImg;
var bg, bgImg;
var alien, alienImg;
var food,foodImg;
var edges;
var score;

function preload(){
    astImg=loadImage("ast.png");
    bgImg=loadImage("bg.jpg");
    alienImg=loadImage("alien.png");
    alienImg=loadImage("alien2.png");
    alienImg=loadImage("alien3.png");
    alienImg=loadImage("alien4.png");
    foodImg=loadImage("food.png");
    foodImg=loadImage("food2.png");
    foodImg=loadImage("food3.png");
}
function setup(){
    createCanvas(800,400);
    bg=createSprite(400,200,800,400);
    ast= createSprite(40,100,20,20);
    food=createSprite(600,100,20,20);
}
function draw(){
    //background("grey")
    edges=createEdgeSprites();
    ast.collide(edges);
    bg.addImage(bgImg);
    bg.scale=0.25;
    bg.velocityX=-3;
    ast.addImage(astImg);
    ast.scale=0.2;
    ast.velocityY=0;
    food.addImage(foodImg);
    food.scale=0.5;

    console.log(bg.x);

    if(keyDown("UP_ARROW")){
        ast.velocityY=-3;
    }
    if(keyDown("DOWN_ARROW")){
        ast.velocityY=3;
    }
    if(bg.x<350){
        bg.x=450;
     }

    spawnAliens();
    drawSprites();

}

function spawnAliens(){
    if(frameCount%120===0){
    alien=createSprite(800,200,20,20);
    alien.y=random(50,450);
    alien.addImage(alienImg);
    alien.scale=0.2;
    alien.velocityX=-3;
    }
}