var apple,orange,watermelon,pomegranate,mango;
var appleimg,orangeimg,watermelonimg,pomegranateimg,mangoimg;
var timer;
var gamestate;
var form;
var fruit;
var first;


function preload(){

  appleimg = loadImage("images/apple.png")
  orangeimg = loadImage("images/orange.png")
  watermelonimg = loadImage("images/watermelon.png")
  pomegranateimg = loadImage("images/pomegranate.png")
  mangoimg = loadImage("images/mango.png")
}

function setup() {
  createCanvas(1200,800);

  form = new Form()


  

  apple = createSprite(900,200,50,50)
  apple.addImage(appleimg)
  apple.scale = 0.3

  orange = createSprite(700,200,50,50)
  orange.addImage(orangeimg)
  orange.scale = 0.3

  watermelon = createSprite(500,200,50,50)
  watermelon.addImage(watermelonimg)
  watermelon.scale = 0.3

  pomegranate = createSprite(300,200,50,50)
  pomegranate.addImage(pomegranateimg)
  pomegranate.scale = 0.3

  mango = createSprite(100,200,50,50)
  mango.addImage(mangoimg)
  mango.scale = 0.3

  timer = 2;

  gamestate = 0;
  
}

function draw() {
  background(0);
  
  if(gamestate === 0){
    textSize(20)
    fill("yellow")
    text("MEMORISE ALL OF THESE OBJECTS",400,100)
  }


  textSize(20)
  fill("white")
  text("timer: "+ timer,1000,50)

  


  if(frameCount % 60 == 0 && timer > 0){
    timer --
  }

  if(timer === 0){
    apple.visible = false;
    orange.visible = false;
    watermelon.visible = false;
    pomegranate.visible = false;
    mango.visible = false;

    gamestate = 1;
  }

  if(gamestate === 1){
    text("ENTER THE FIRST FRUIT",400,100)

    form.display()

    if(fruit === "mango"){
      text("you got it right!!! the answer was "+ fruit,400,200)
      text("press ENTER to continue",400,250)

      
    }
    if(keyWentDown(ENTER)){
      gamestate = 2
    }

  }

  if(gamestate === 2){
    text("ENTER THE SECOND FRUIT",400,100)

    form.display()

    if(fruit === "pomegranate"){
      text("you got it right!!! the answer was "+ fruit,400,200)
      gamestate = 3
    }

  }

  

  drawSprites();
}