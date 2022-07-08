var bgImg, bg
var jet, jetImg
var enemyJet,enemyjetImg
var enemyjetGroup

function preload(){
bgImg = loadImage("Sky.png")
jetImg = loadImage("jet.png")
enemyjetImg = loadImage("enemyJet.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 5

  jet = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 jet.addImage(jetImg)
   jet.scale = 0.3
   jet.debug = true
   jet.setCollider("rectangle",0,0,300,300)
   
enemyjetGroup = new Group()
}

function draw() {
  background(0);
  
  if(keyDown("UP_ARROW")||touches.length>0){
    jet.y = jet.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   jet.y = jet.y+30
  }

  drawSprites();
  enemy();
}

function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    enemyJet = createSprite(random(500,1100),random(100,500),40,40)

    enemyJet.addImage(enemyjetImg)
    enemyJet.scale = 0.5
    enemyJet.velocityX = -3
    enemyJet.debug= true
    enemyJet.setCollider("rectangle",0,0,400,400)
   
    enemyJet.lifetime = 400
   enemyjetGroup.add(enemyJet)
  }

}
