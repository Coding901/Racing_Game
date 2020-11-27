class Player{
constructor(){
    this.name = null
    this.distance = 0
    this.index = 0
}
updateplayerCount(count){
    database.ref('/').update(
        {
            playerCount:count
        }
    )

}
updatename(){
var playerIndex = "players/player"+this.index;
database.ref(playerIndex).set(
    {
name:this.name,
distance:this.distance
    }
)

}
getValue(){
    var pCL = database.ref('playerCount');
pCL.on("value",function(data){
playerCount = data.val()
})

}
static getPlayerinfo(){


    var playerInfoLocation = database.ref('players')
    playerInfoLocation.on("value",function(data){
        allPlayers = data.val()
    })
}




}