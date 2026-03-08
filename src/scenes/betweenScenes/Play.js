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
        
        //Dev Stuff DeleteLater -------------------------------------------
        //Background 
        this.sceneBG = this.add.image(width/2,playHeight/2,'devBG')
        //Object examples of making a clickable object and FindableObject
        this.testImage2 = new DoorWay(this,100,250,'michaelComputer','michaelRoomScene')
        this.toTowerDoor = new DoorWay(this,400,250,'testImg','towerDoorScene' )
        this.toRobertRoomDoor = new DoorWay(this,700,250,'testImg','robert-room' )
        //Dev Stuff DeleteLater -------------------------------------------
        

        this.maleBox = this.add.sprite(90,125,'mailBox').play('mailBoxAnim')
        //EXAMPLE OF HOW TO SET UP AN IMPORTANT ITEM TO NOT SPAWN NEXT TIME YOU VISIT THE SCENE.
        //if(!this.scene.manager.getScene('uiScene').itemsFound[0])
       // {
           // this.testImage3 = new FindableObject(this,850,250,'testImg','introScene',0)
       // }
    }


}