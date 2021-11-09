var caixa;

function setup() {
  createCanvas(400,400);

  caixa = createSprite(200,200,20,20);
}

function draw() {
  background(30);

  if (keyDown ('right')){

caixa.x = caixa.x + 3 ;

}

if (keyDown('left')) {
caixa.x = caixa.x - 3;

}

  drawSprites();
}




