class GameState{
contructor(){}
getData(){
    var gSL = database.ref('gameState')
gSL.on("value",function(data){
    gameState = data.val()
})
}
updateState(state){
database.ref('/').update({
    gameState:state
})
}
start(){
    if (gameState === 0) {
        player = new Player()
        player.getValue()
        form = new Form()
        form.display()
    }
}

play(){
Player.getPlayerinfo()
if (allPlayers !== undefined) {
    var  y = 150
    for(var i in allPlayers){
text(allPlayers[i].name+" "+allPlayers[i].distance,200,y)
y = y+50

    }
}
if (keyDown(UP_ARROW)) {
    player.distance = player.distance + 50
    player.updatename()
}


}

}