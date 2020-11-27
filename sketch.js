var ball;

var database;

var position;

var playerCount = 0;

var gameState = 0;

var game,form,player;

var allPlayers;


function setup(){
    createCanvas(500,500);
    database = firebase.database();
   game = new GameState() 
   game.getData();
   game.start();

}

function draw(){
    background("white");
    if (playerCount === 4) {
        game.updateState(1)
    }
    if (gameState === 1) {
        game.play()
    }
    drawSprites();
}

