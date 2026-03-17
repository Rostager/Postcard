//Config for credit text
let creditConfig = {
    fontFamily:'Georgia',
        fontSize: '50px',
        color: '#ffffff'
}
class Credits extends Phaser.Scene
{
    constructor()
    {
        super('creditsScene')
    }

    create()
    {
        //PLAY BGM
        this.bgm = this.sound.add('grassBGM', {
            loop: true,
            volume: 0.10
        });
        this.bgm.play();
       this.cameras.main.fadeIn(1000, 0, 0, 0); 
       this.credits = this.add.text(width/2,height/2,"Made by: Michael And Robert Stager\nfor Cadence Hickman.\n\nMusic and Sounds By:Michael Stager\nAnimations by: Robert Stager",creditConfig).setOrigin(0.5)
       this.title = this.add.text(width/2,height + 100,"Remix Our Memories ",creditConfig).setOrigin(0.5)
       this.nathanThanks = this.add.text(width/2,height + 150,"Special Thanks to Nathan Altice",creditConfig).setOrigin(0.5)
       this.nathanImage = this.add.image(width/2, 420, "nathanPic").setOrigin(0.5,0.5).setAlpha(0)
       //mainmenuButton and logic
       this.mainMenuButton = this.add.image(width/2, height-100,'yoshiSit').setAlpha(0).setInteractive()
        this.mainMenuButton.on('pointerdown',()=>{
            this.bgm.stop()
            this.scene.start('mainMenuScene')
        })
        this.mainMenuButton.on('pointerover',()=>{
            this.mainMenuButton.setScale(this.mainMenuButton.scale + 0.1)
        })
        this.mainMenuButton.on('pointerout',()=>{
            this.mainMenuButton.setScale(this.mainMenuButton.scale - 0.1)
        })
        
        this.time.delayedCall(4000, () => {
    this.tweens.add({
        targets: this.credits,
        y: -150,
        duration: 5000
    })


    this.tweens.add({
        targets: this.nathanThanks,
        y: height / 2,
        duration: 5000,
        onComplete: () => {
            this.tweens.add({
                targets: this.nathanImage,
                alpha: 1,
                yoyo: true,
                duration: 3000
            })
            this.time.delayedCall(4000, () => {
                this.tweens.add({
                    targets: this.nathanThanks,
                    y: -100,
                    duration: 5000,
                    onComplete: () => {
                        this.tweens.add({
                            targets: this.title,
                            y: height / 2,
                            duration: 4000,
                            onComplete: () => {
                                this.tweens.add({
                                    targets: this.mainMenuButton,
                                    alpha: 1,
                                    duration: 800
                                })
                            }
                        })
                    }
                })
            })
        }
    })
})
}
}