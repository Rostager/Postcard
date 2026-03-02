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
        //Background 
       this.sceneBG = this.add.image(width/2,playHeight/2,'testBG')
        //Object examples of making a clickable object and FindableObject
        this.testImage2 = new ClickableObject(this,100,250,'testImg',"A Brave wariors remains...\n I wonder why he left his\n weapon? Maybe he became \n a monk?")
        if(!this.scene.manager.getScene('uiScene').itemsFound[0])
        {
            this.testImage3 = new FindableObject(this,850,250,'testImg','menuScene',0)
        }
       
      //this needs to be in a scene we dont go back to , like between the menu and first play scene, this will keep relaunching a new ui  
     // this.ui =  this.scene.launch('uiScene')
    }


}