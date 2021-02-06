var database;
var form,player,game;
var gameState=0;
var playerCount=0;
var allPlayers;
var car1,car2,car3,car4,cars
var c1,c2,c3,c4;
var track;
var finishedPlayers;
var finish=false;
var gold,silver,bronze;
function preload(){
  c1=loadImage("images/car1.png");
  c2=loadImage("images/car2.png");
  c3=loadImage("images/car3.png");
  c4=loadImage("images/car4.png");
  track=loadImage("images/track.jpg");
  gold=loadImage("images/gold.png")
  silver=loadImage("images/silver.png")
  bronze=loadImage("images/bronze.png")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  game=new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background("lightyellow");
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear()
    game.play()
  }
  if(finishedPlayers===4){
    game.update(2)
  }

  if(gameState===2){
    background("pink")
    game.end();
  }
    
    
  
}

