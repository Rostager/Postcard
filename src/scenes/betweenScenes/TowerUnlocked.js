class TowerUnlocked extends Phaser.Scene
{
    constructor()
    {
        super("towerUnlockedScene")
    }

    create()
    {
        this.bgm = this.sound.add('grassBGMKicks', {
            loop: true,
            volume: 0.10
        });
        this.bgm.play();
        
        //Background/Unclickable Objects
        this.sceneBG = this.add.image(width/2,playHeight/2,'playBG')
        this.cloud1 = this.add.image(0,0,'cloud').setOrigin(0,0).setAlpha(.4)
        this.towerCloud = this.add.image(391,0,'towerCloud').setOrigin(0,0)
        
       // this.chainRight = this.add.tileSprite(500,200,'chain')
       
       
        this.chainLeft1 = this.add.tileSprite(200,-50 ,0,0,'chain').setAngle(315)
        this.chainLeft2 = this.add.tileSprite(100,75 ,0,0,'chain').setAngle(290)
        this.chainRight1 = this.add.tileSprite(785,-50 ,0,0,'chain').setAngle(-315)
        this.longTowerRight1 = this.add.image(700,258,'longTower').setOrigin(0.5,1).setScale(0.5)
        this.chainRight2 = this.add.tileSprite(885,75 ,0,0,'chain').setAngle(-290)
        this.towerUnlocked = new DoorWay(this,459,135,'tower','michaelRoomScene')
        
        this.letterBack = this.add.image(628 ,-7,'lettersBack').setOrigin(0,0)
        this.maleBox = new ClickableObject(this,712 + 71 ,210+59,'maleboxOpen','I hope Malebox is okay...').setOrigin(0.5,0.5)
        this.letterFront = this.add.image(528 ,-47,'lettersFront').setOrigin(0,0)
        this.sawGround = new ClickableObject(this,126 + 128 ,120 + 128,'sawGround','Where did this gear come\n from? \n Or is it a saw?').setOrigin(0.5,0.5)
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

         //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            
        });
    }

    update(time,delta){
        this.chainLeft1.tilePositionY -= 750* delta/1000
        this.chainLeft2.tilePositionY -= 750* delta/1000
        this.chainRight1.tilePositionY -= 750* delta/1000
        this.chainRight2.tilePositionY -= 750* delta/1000
    }


}