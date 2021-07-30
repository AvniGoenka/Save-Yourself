var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var database;
var scoreVal=0;

function preload(){
  back_img = loadImage("images/public.jpg");
  player_img = loadImage("images/mask.png");
  fruit1_img = loadImage("images/coronaB.png");
  fruit2_img = loadImage("images/coronaR.png");
  fruit3_img = loadImage("images/coronaG.png");
  fruit4_img = loadImage("images/battery.png");
  fruit5_img = loadImage("images/battery2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1400, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
   background(back_img);
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}