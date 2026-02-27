class Intro extends Phaser.Scene
{
    constructor(){
        super('introScene')
    }

    create()
    {
        this.backgroundImage = this.add.image(width/2,height/2,'introBG').setOrigin(0.5,0.5)
        this.postcard = this.add.image(width/2,height/2,'postcardFront')
        this.postcard.setInteractive({
             pixelPerfect: true,
            alphaTolerance: 1
        })
        //This handles clicking the postcard, flipping it, spinning and sucking the player into it then opening a new scene.
    this.postcard.on('pointerdown', () => {
    this.postcard.disableInteractive();

    this.tweens.add({
        targets: this.postcard,
        scaleX: 0,
        duration: 300,
        ease: 'Linear',
        yoyo: true,

        onYoyo: () => {
            this.postcard.setTexture('postcardBack');
        },

        onComplete: () => {
          this.time.delayedCall(1000,()=>{
            this.tweens.add({
                targets: this.postcard,
                scale: 8,          
                angle: 720,        
                duration: 1000,
                ease: 'Cubic.easeIn',

        onComplete: ()=>{ this.scene.start('playScene') }
            })

            })
        }
    })
})
    }

//When sending the player to the play scene we need to launch the ui
// this.ui =  this.scene.launch('uiScene')

}