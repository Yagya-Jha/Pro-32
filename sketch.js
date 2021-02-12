const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,B11,B12,B13,B14,B15,B16;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var g1,g2,g3;
var score=0;
var polygon,slingS;
var r = 56;
var g = 44;
var b = 44;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    g1 = new Ground(600,590,width,20);
    g2 = new Ground(550,500,400,20);
    g3 = new Ground(950, 300, 300, 20);

    b1 = new Box(850,250,50,70);
    b2 = new Box(900,250,50,70);
    b3 = new Box(950,250,50,70);
    b4 = new Box(1000,250,50,70);
    b5 = new Box(1050,250,50,70);

    b6 = new Box(950,180,50,70);
    b7 = new Box(900,180,50,70);
    b8 = new Box(1000,180,50,70);

    b9 = new Box(950,110,50,70);

    B1 = new Box(400,450,50,70);
    B2 = new Box(450,450,50,70);
    B3 = new Box(500,450,50,70);
    B4 = new Box(550,450,50,70);
    B5 = new Box(600,450,50,70);
    B6 = new Box(650,450,50,70);
    B7 = new Box(700,450,50,70);

    B8 = new Box(450,380,50,70);
    B9 = new Box(500,380,50,70);
    B10= new Box(550,380,50,70);
    B11= new Box(600,380,50,70);
    B12= new Box(650,380,50,70);

    B13= new Box(500,310,50,70);
    B14= new Box(550,310,50,70);
    B15= new Box(600,310,50,70);

    B16= new Box(550,240,50,70);

    polygon = new Polygon(200,200,20);
    slingS = new SlingShot(polygon.body,{x:200,y:200});

    getBackground();
    }
function draw(){
    background(r,g,b);
    Engine.update(engine);
    drawSprites();
    g1.display();
    g2.display();
    g3.display();

    fill(129, 203, 236,b1.Visiblity);
    b1.display();

    fill(129, 203, 236,b2.Visiblity);
    b2.display();
    
    fill(129, 203, 236,b3.Visiblity);
    b3.display();
    
    fill(129, 203, 236,b4.Visiblity);
    b4.display();
    
    fill(129, 203, 236,b5.Visiblity);
    b5.display();
    
    fill(129, 203, 236,B1.Visiblity);
    B1.display();
    
    fill(129, 203, 236,B2.Visiblity);
    B2.display();
    
    fill(129, 203, 236,B3.Visiblity);
    B3.display();
    
    fill(129, 203, 236,B4.Visiblity);
    B4.display();
    
    fill(129, 203, 236,B5.Visiblity);
    B5.display();
    
    fill(129, 203, 236,B6.Visiblity);
    B6.display();
    
    fill(129, 203, 236,B7.Visiblity);
    B7.display();


    fill(50, 208, 207,b6.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,b6.Visiblity);
    b6.display();

    fill(50, 208, 207,b7.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,b7.Visiblity);
    b7.display();

    fill(50, 208, 207,b8.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,b8.Visiblity);
    b8.display();

    fill(50, 208, 207,B13.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,B13.Visiblity);
    B13.display();

    fill(50, 208, 207,B14.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,B14.Visiblity);
    B14.display();

    fill(50, 208, 207,B15.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,B15.Visiblity);
    B15.display();

    fill(129, 129, 129,B16.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,B16.Visiblity);
    B16.display();

    fill(255, 201, 206,b9.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,b9.Visiblity);
    b9.display();
    
    fill(255, 201, 206,B8.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,B8.Visiblity);
    B8.display();
    
    fill(255, 201, 206,B9.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,B9.Visiblity);
    B9.display();
    
    fill(255, 201, 206,B10.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,B10.Visiblity);
    B10.display();
    
    fill(255, 201, 206,B11.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,B11.Visiblity);
    B11.display();
    
    fill(255, 201, 206,B12.Visiblity);
    strokeWeight(4);
    stroke(0,0,0,B12.Visiblity);
    B12.display();

    stroke(46, 210, 214)
    slingS.display();
    polygon.display();
    strokeWeight(1);
    stroke(0);
    fill(255);
    textSize(28);
    text("Drag the polygon to destroy the blocks",320,40);
    textSize(15);
    strokeWeight(0);
    text("Press Space to get a second Chance to Play!!",820,550);
    
    
    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();
    b8.score();
    b9.score();

    B1.score();
    B2.score();
    B3.score();
    B4.score();
    B5.score();
    B6.score();
    B7.score();
    B8.score();
    B9.score();
    B10.score();
    B11.score();
    B12.score();
    B13.score();
    B14.score();
    B15.score();
    B16.score();
    text("Score: "+score,820,40);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});    
}

function mouseReleased(){
    slingS.fly();
   }

   function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(polygon.body,{x:250,y:250});
       slingS.attach(polygon.body);
    }
}

async function getBackground(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1800){
        r=200;
        g=255;
        b= 255;
    }
    else{
        if(hour<0600 && hour>1800){
        r=0;
        g=0;
        b=0;
    }else{
        r = 56;
        g = 44;
        b = 44;
    }
          }

}