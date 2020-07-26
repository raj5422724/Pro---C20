var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 400, 40, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 3;
  movingRect = createSprite(700, 400, 80, 40);
  movingRect.shapeColor = "green";
  movingRect.velocityX = -3;
  console.log(movingRect.x);
}

function draw() {
  background(255,255,255);  

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 && movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&& fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2&& movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2) {

    movingRect.shapeColor = "magenta";
    fixedRect.shapeColor = "indigo";
    movingRect.velocityX = -(movingRect.velocityX);
    fixedRect.velocityX = -(fixedRect.velocityX);

  } else{

    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }

  drawSprites();
}