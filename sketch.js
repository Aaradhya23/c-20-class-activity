var fixedRect;
var movingRect;
var fixedRect1;

function setup()
{
  createCanvas(1000,600);

  movingRect= creatsprite(650,400,50,100);
  fixedRect=creatsprite(200,400,50,100);
  fixedRect1=creatsprite(700,200,50,50);
  
  fixedRect1.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() 
{
  background("yellow");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,fixedRect))   
  {

    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  else if(isTouching(movingRect,fixedRect1))   
  {
    fixedRect1.shapeColor = "red";
    movingRect.shapeColor = "red";
  
  }
  
  else 
  { 
    fixedRect1.shapeColor = "green";
    fixedRect.shapeColor = "green"; 
    movingRect.shapeColor = "green";

  }
  
  drawSprites();       
}

function isTouching(movingRect,fixedRect) 

{
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    
  return true;
  }
  else
  {
   
    return false;
  
  }
}






















