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
        
        //Background/Unclickable Objects
        this.sceneBG = this.add.image(width/2,playHeight/2,'playBG')
        this.cloud1 = this.add.image(0,0,'cloud').setOrigin(0,0).setAlpha(.4)
        this.towerCloud = this.add.image(391,0,'towerCloud').setOrigin(0,0)
        //Clickable's
        this.towerLocked = new ClickableObject(this,459,135,'tower','The tower is locked.\n I wonder how to get in?')
        //Findables
        this.maleBox = new FindableObject(this,689,250,'mailBox','shieldCloseUpScene',0).setScale(.5).play('mailBoxAnim').setOrigin(0.5,0.5)
        //this.towerCloud =
        //this.testImage2 = new DoorWay(this,100,250,'michaelComputer','michaelRoomScene')
        //this.toTowerDoor = new DoorWay(this,400,250,'testImg','towerDoorScene' )
        //this.toRobertRoomDoor = new DoorWay(this,700,250,'testImg','robert-room' )
       
        //Handle Tweens for non clickable objects
        //Make better, this is for the clouds in the sky
        this.tweens.add({
            targets: this.cloud1,
            x: 960,
            duration: 80000,
            yoyo: true,
            repeat: -1
        })
        //EXAMPLE OF HOW TO SET UP AN IMPORTANT ITEM TO NOT SPAWN NEXT TIME YOU VISIT THE SCENE.
        //if(!this.scene.manager.getScene('uiScene').itemsFound[0])
       // {
           // this.testImage3 = new FindableObject(this,850,250,'testImg','introScene',0)
       // }
    }


}