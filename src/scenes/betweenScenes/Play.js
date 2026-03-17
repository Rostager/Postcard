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
        //PLAY BGM
        this.bgm = this.sound.add('grassBGM', {
            loop: true,
            volume: 0.10
        });
        this.bgm.play();

        //Background/Unclickable Objects
        this.sceneBG = this.add.image(width/2,playHeight/2,'playBG')
        this.cloud1 = this.add.image(0,0,'cloud').setOrigin(0,0).setAlpha(.4)
        this.towerCloud = this.add.image(391,0,'towerCloud').setOrigin(0,0)
       
        this.chainLeft1 = this.add.tileSprite(200,-50 ,0,0,'chain').setAngle(315)
        this.chainLeft2 = this.add.tileSprite(100,75 ,0,0,'chain').setAngle(290)
        this.chainRight1 = this.add.tileSprite(785,-50 ,0,0,'chain').setAngle(-315)
        this.chainRight2 = this.add.tileSprite(885,75 ,0,0,'chain').setAngle(-290)
        this.towerLocked = new ClickableObject(this,459,135,'tower','Maybe I should look around\nsome more')
        this.maleBox = new FindableObject(this,689,250,'mailBox','maleBoxCloseUpScene',9).setScale(.5).play('mailBoxAnim').setOrigin(0.5,0.5)
       
        //Handle Tweens for non clickable objects
        //This is for the clouds in the sky
        this.tweens.add({
            targets: this.cloud1,
            x: 960,
            duration: 80000,
            yoyo: true,
            repeat: -1
        })
        
    }

    update(time,delta){
        this.chainLeft1.tilePositionY -= -20* delta/1000
        this.chainLeft2.tilePositionY -= -20* delta/1000
        this.chainRight1.tilePositionY -= -20* delta/1000
        this.chainRight2.tilePositionY -= -20* delta/1000
    }

}