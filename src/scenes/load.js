class Load extends Phaser.Scene
{
    constructor(){
        super('loadScene')
    }

    preload()
    {
       this.load.image('testImg','./assets/images/testImg.webp')
       this.load.image('hudImg','./assets/images/Hud.png')
    }

    create()
    {
        this.scene.start('playScene')
    }
}