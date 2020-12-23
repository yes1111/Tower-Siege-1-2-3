const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0

function preload(){
    pImg = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    g1 = new Ground(600, 300, 400, 20)
    b1 = new Box(500, 275, 30, 40)
    b2 = new Box(530, 275, 30, 40)
    b3 = new Box(560, 275, 30, 40)
    b4 = new Box(590, 275, 30, 40)
    b5 = new Box(620, 275, 30, 40)
    b6 = new Box(650, 275, 30, 40)
    b7 = new Box(680, 275, 30, 40)
    b8 = new Box(530,235,30,40)
    b9 = new Box(560,235,30,40)
    b10 = new Box(590,235,30,40)
    b11 = new Box(620,235,30,40)
    b12 = new Box(650,235,30,40)
    b13 = new Box(560,195,30,40)
    b14 = new Box(590,195,30,40)
    b15 = new Box(620,195,30,40)
    b16 = new Box(590,155,30,40)
    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon);

    Slingshot = new SlingShot(this.polygon,{x:100,y:200})
}

function draw(){
        background("orange");
        Engine.update(engine);
text("Score : "+score,width-100,40)
        g1.display();
        b1.display();
        b2.display();
        b3.display();
        b4.display();
        b5.display();
        b6.display();
        b7.display();
        b8.display();
        b9.display();
        b10.display();
        b11.display();
        b12.display();
        b13.display();
        b14.display();
        b15.display();
        b16.display();
        b1.score();
        b2.score();
        b3.score();
        b4.score();
        b5.score();
        b6.score();
        b7.score();
        b8.score();
        b9.score();
        b10.score();
        b11.score();
        b12.score();
        b13.score();
        b14.score();
        b15.score();
        b16.score();


imageMode(CENTER)
image(pImg, polygon.position.x, polygon.position.y, 40, 40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    Slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Slingshot.attach(this.polygon);
    }
}