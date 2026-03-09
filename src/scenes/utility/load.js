class Load extends Phaser.Scene
{
    constructor(){
        super('loadScene')
    }

    preload()
    {
       //load images---------------
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
       this.load.image('devBG','./assets/images/RobertRoom/DevScene.png')
       //Michaels room
        this.load.image('michaelRoomBG','./assets/images/MichaelRoom/MichaelsRoomBG.png')
        this.load.image('michaelComputer','./assets/images/MichaelRoom/computer.png')
        this.load.image('michaelFurnace','./assets/images/MichaelRoom/furnace.png')
        this.load.image('michaelPillow','./assets/images/MichaelRoom/Pillow.png')
        this.load.image('michaelShield','./assets/images/MichaelRoom/shield.png')
        this.load.image('michaelShieldCloseUp','./assets/images/MichaelRoom/michaelShieldCloseUp.png')
        this.load.image('michaelComputerBG','./assets/images/MichaelRoom/ComputerBG.png')
        this.load.image('michaelFurnaceCloseUp','./assets/images/MichaelRoom/FurnaceCloseUp.png')
        this.load.image('michaelCreationFile','./assets/images/MichaelRoom/CreationFile.png')
        this.load.image('michaelImgFile','./assets/images/MichaelRoom/computerFile.png')
        this.load.image('michaelArm','./assets/images/MichaelRoom/michaelArmWhite.png')
        this.load.image('michaelShelf','./assets/images/MichaelRoom/shelf.png')
        this.load.image('michaelShelfOpen','./assets/images/MichaelRoom/shelfOpen.png')

        //load spritesheets---------------
       //load audio------------------
       this.load.audio('fireSound','./assets/sounds/fire.wav')
       //load fonts------------------
       this.load.font('uiFont','./assets/fonts/Faith.ttf')
    }

    create()
    {
        this.scene.start('introScene')
    }
}