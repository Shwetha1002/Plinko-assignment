var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle ;
var turn = 0;
var gameState = "play";
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 //particle = new Particle(50,100,10)

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(40)
 text("500 ",10,600);
 textSize(40)
 text("500 ",90,600);
 textSize(40)
 text("500 ",170,600);
 textSize(40)
 text("500 ",250,600);
 textSize(40)
 text("100 ",330,600);
 textSize(40)
 text("100 ",410,600);
 textSize(40)
 text("100 ",490,600);
 textSize(40)
 text("200 ",570,600);
 textSize(40)
 text("200 ",650,600);
 textSize(40)
 text("200 ",730,600);

  Engine.update(engine);
 
 
  if(particle != null) {
    particle.display();
  

  if(particle.body.position.y > 760 && particle.body.position.x < 300){
    score = score + 500;
    particle = null;
    if(turn >=5 ){
      gameState = "end"
      textSize(70)
      text("Game Over", 400,400)
    }


  }
  if(particle.body.position.y > 760 && particle.body.position.x > 300){
    if(particle.body.position.x < 600){
      score = score + 100;
      particle = null;
      if(turn >=5 ){
        gameState = "end"
        textSize(70)
        text("Game Over", 400,400)
      }
    }
    
else if(particle.body.position.x > 600 && particle.body.position.x < 900){

  score = score + 100;
  particle = null;
  if(turn >=5 ){
    gameState = "end"
    textSize(70)
    text("Game Over", 400,400)
}

  }
} 
  }
  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
 for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed() {
  if(gameState !== "end"){
    //turn++
    particle = new Particle(mouseX, 10, 10, 10);
   // particle.display();
  }

}