class Form {
constuctor(){
  
  this.input = createInput('Enter_Your_Name')
  this.button = createButton('Play')
  this.gMessage = createElement('h2')
}
display(){

var title = createElement('h1')
title.html("RacingGame")
title.position(250,250)


this.input.position(250,350)


this.button.position(250,450)



this.button.mousePressed(function(){
this.input.hide()
this.button.hide()
 
 player.name = input.value() 

playerCount = playerCount + 1; 
player.index = playerCount
player.updateplayerCount(playerCount)
player.updatename() 
this.gMessage.html('welcome!')
this.gMessage.position(250,400)   



});

}




}