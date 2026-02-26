class Load extends Phaser.Scene
{
    constructor(){
        super('loadScene')
    }

    preload()
    {
       this.load.image('testImg','./assets/images/testImg.png')
       this.load.image('hudImg','./assets/images/Hud.png')
       this.load.image('testBG','./assets/images/testBG.png')
       this.load.image('backArrow','./assets/images/backArrow.png')

       this.load.font('uiFont','./assets/fonts/Faith.ttf')
    }

    create()
    {
        this.scene.start('playScene')
    }
}