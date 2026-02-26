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
       //load audio
       
       //load fonts
       this.load.font('uiFont','./assets/fonts/Faith.ttf')
    }

    create()
    {
        this.ui =  this.scene.launch('uiScene')
        this.scene.start('playScene')
    }
}