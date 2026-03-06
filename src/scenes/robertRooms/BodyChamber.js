class BodyChamber extends Phaser.Scene
{
    constructor()
    {
        super("robert-bodyChamber")
    }

    create()
    {
        //Background 
        this.sceneBG = this.add.image(width/2,playHeight/2,'testBG')
        //Object examples of making a clickable object and FindableObject (hover class call to see parameters )
        this.testImage2 = new ClickableObject(this,100,250,'testImg',"Robert Room.\n I wonder why he left his\n weapon? Maybe he became \n a monk?")
       
    }


}