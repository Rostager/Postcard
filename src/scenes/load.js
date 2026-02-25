class Load extends Phaser.Scene
{
    constructor(){
        super('loadScene')
    }

    preload()
    {
       this.load.image('testImg','./assets/images/testImg.webp')
    }

    create()
    {
        this.scene.start('playScene')
    }
}