//pointer events that we will prob use
//1. 'pointerdown' for clicking
//2. 'pointerover' for hoving

class Play extends Phaser.Scene
{
    constructor()
    {
        super("playScene")
    }

    create()
    {
        console.log(playHeight + "  " + playWidth)
        this.add.image(width/2,playHeight/2,'testBG')
       
        this.testImage2 = new ClickableObject(this,100,250,'testImg',"A Brave wariors remains...\n I wonder why he left his\n weapon? Maybe he became \n a monk?")
        this.testImage3 = new FindableObject(this,850,250,'testImg','menuScene')
        console.log(this.testImage2.x + "  " + this.testImage2.y)
       
      //this needs to be in a scene we dont go back to , like between the menu and first play scene, this will keep relaunching a new ui  
      this.ui =  this.scene.launch('uiScene')
    }


}