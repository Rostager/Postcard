class TowerDoor extends Phaser.Scene
{
    constructor()
    {
        super("towerDoorScene")
    }

    create()
    {
        

        //Background 
       this.sceneBG = this.add.image(width/2,playHeight/2,'testBG')
        //Object examples of making a clickable object and FindableObject
        this.testImage2 = new ClickableObject(this,100,250,'testImg',"A Brave wariors remains...\n I wonder why he left his\n weapon? Maybe he became \n a monk?")
        this.toStiarWell = new DoorWay(this,500,250,'testImg','stairWellScene')

         
       
    }


}