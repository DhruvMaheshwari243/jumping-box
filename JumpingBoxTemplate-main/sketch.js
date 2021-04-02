var canvas;
var music;
var red1,blue1,green1,yellow1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    red1 = createSprite(750,585,50,20);
    fill("red");
    blue1 = createSprite(450,785,50,20);
    fill("blue")
    green1 = createSprite(150,785,50,20);
    fill("green");
    yellow1 = createSprite(50,785,50,20)
    fill("yellow");


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


drawSprites()
    //add condition to check if box touching surface and make it box
}
