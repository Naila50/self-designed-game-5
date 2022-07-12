var form;
var gameState= 0;
var database;
var score = 0;
var frameCount = 0;
var flag = false;

function preload(){
  back_img = loadImage("images/image main shinchan.jpg")
}
function setup() {
  createCanvas(1250,590);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();
}

function draw() {
  background();
 if(flag===true){
  game.play()



 }
  
}

