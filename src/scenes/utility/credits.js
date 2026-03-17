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
        //Fade the camera in since it gets faded out in the last scene
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        //Add texts for the difference sections of the credits
        this.credits = this.add.text(width/2,height/2,"Made by: Michael And Robert Stager\nfor Cadian Hickman.",creditConfig).setOrigin(0.5)
        this.title = this.add.text(width/2,height + 100,"Remix Our Memories ",creditConfig).setOrigin(0.5)
        this.nathanThanks = this.add.text(width/2,height + 150,"Special Thank you to Nathan Altice,\nfor such an amazing journy\nand inspiring and motivating us\nto produce such great work.",creditConfig).setOrigin(0.5)
        //mainmenuButton and logic
        this.mainMenuButton = this.add.image(width/2, height-100,'yoshiSit').setAlpha(0).setInteractive()
        this.mainMenuButton.on('pointerdown',()=>{
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
            y: -100,
            duration: 5000
        });
        this.tweens.add({
            targets: this.nathanThanks,
            y: height / 2,
            duration: 5000,
            onComplete: () => {
                this.time.delayedCall(4000, () => {
                    this.tweens.add({
                        targets: this.nathanThanks,
                        y: -150,
                        duration: 5000,
                        onComplete: () => {
                            this.tweens.add({
                                targets: this.title,
                                y: height / 2,
                                duration: 5000,
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