class StairWell extends Phaser.Scene
{
    constructor()
    {
        super("stairWellScene")
    }

    create()
    {
        //Background 
       this.sceneBG = this.add.image(width/2,playHeight/2,'testBG')
        //Object examples of making a clickable object and FindableObject
        this.testImage2 = new ClickableObject(this,100,250,'testImg',"A Brave wariors remains...\n I wonder why he left his\n weapon? Maybe he became \n a monk?")
        this.toMichaelsRoom = new DoorWay(this,600,250,'testImg','michaelRoomScene')
        this.toRobertsRoom = new DoorWay(this,100,300,'testImg','robertRoomScene')

    }


}