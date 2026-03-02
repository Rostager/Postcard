class Load extends Phaser.Scene
{
    constructor(){
        super('loadScene')
    }

    preload()
    {
       //load images
       this.load.image('testImg','./assets/images/testImg.png')
       this.load.image('hudImg','./assets/images/Hud.png')
       this.load.image('testBG','./assets/images/testBG.png')
       this.load.image('backArrow','./assets/images/backArrow.png')
       this.load.image('introBG','./assets/images/introBG.png')
       this.load.image('postcardFront','./assets/images/postcardFront.png')
       this.load.image('postcardBack','./assets/images/postcardBack.png')
       this.load.image('introEnvelope','./assets/images/intro-Envelope.png')
       this.load.image('pointerDefault','./assets/images/Pointer.png')
       this.load.image('pointerHover','./assets/images/Hover.png')
       this.load.image('pointerHold','./assets/images/Hold.png')
       //load audio
       
       //load fonts
       this.load.font('uiFont','./assets/fonts/Faith.ttf')
    }

    create()
    {
        this.scene.start('introScene')
    }
}