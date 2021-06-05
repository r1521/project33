const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;
var format;
var hours;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
background(backgroundImg)
}
    // add condition to check if any background image is there to add
if(hours){
    textSize(30);
    stroke("white")
    text('time:'+time+format,20,30)
    
}

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    data = await fetch('http://worldtimeapi.org/api/timezone/America/Bahia')
    var mydate = await data.json()
    var mytime = mydate.datetime
    hours = mytime.slice(11,13)

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset
if(hours>=4 && hours<= 6){
    bg = "sunrise1.png"
}else if(hours>=6 && hours<= 8){
    bg = "sunrise2.png"
}else if(hours>=23 && hours ==0){
    bg = "sunset10.png"
}else if(hours ==0 && hours<=3){
    bg = "sunset11.png"
}else{
    bg = "sunset12.png"
}
if(hours>12){
    time = hours-12
    format = 'PM'
}else{
    time = hours
    format = 'AM'
}

    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg)
}
