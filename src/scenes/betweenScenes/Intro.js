class Intro extends Phaser.Scene
{
    constructor(){
        super('introScene')
    }

    create()
    {
        //PLAY BGM
        this.bgm = this.sound.add('IntroBGM', {
            loop: true,
            volume: 0.30
        });
        this.bgm.play();

        //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            
        });
        //background and envelope
        this.backgroundImage = this.add.image(width/2,height/2,'introBG').setOrigin(0.5,0.5)
        this.envelope = this.add.image(width/2,height/2,'introEnvelope').setOrigin(0.5,0.5).setInteractive({
            pixelPerfect: true,
            alphaTolerance: 1
        })
        this.postcard = this.add.image(width/2,height/2,'letterPortalFront').setAlpha(0)
        //I lowkey need to explain the envelope, the way its setup 
        this.envelope.on('pointerover',()=>{
            this.envelope.setTint(0xe7e7e7)
        })
        this.envelope.on('pointerout',()=>{
            this.envelope.clearTint()
        })


        this.envelope.on('pointerdown',()=>{
            this.envelope.disableInteractive()
            this.postcard.setInteractive({
                 pixelPerfect: true,
                 alphaTolerance: 1
        })
        this.postcard.setAlpha(1)
        
        })

        
        //This handles clicking the postcard, flipping it, spinning and sucking the player into it then opening a new scene.
    this.postcard.on('pointerdown', () => {
    this.postcard.disableInteractive()

    this.tweens.add({
        targets: this.postcard,
        scaleX: 0,
        duration: 300,
        ease: 'cubic.easeIn',
        yoyo: true,

        onYoyo: () => {
            this.postcard.setTexture('letterPortalBack')
        },

        onComplete: () => {
            this.postcard.setAlpha(0)
            this.postcard = this.add.sprite(width/2 + 15,height/2,'postcardBack').setOrigin(0.5,0.5)
            this.postcard.anims.play('letterPortalAnim')
          this.time.delayedCall(1000,()=>{
            this.tweens.add({
                targets: this.postcard,
                scale: 8,          
                angle: 720,        
                duration: 1000,
                ease: 'Cubic.easeIn',

        onComplete: ()=>{ 
            this.scene.start('playScene')
            this.ui =  this.scene.launch('uiScene') }
            })
            })
        }
    })
})
    }

//When sending the player to the play scene we need to launch the ui
// this.ui =  this.scene.launch('uiScene')

}