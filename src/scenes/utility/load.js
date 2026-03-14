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
       this.load.image('introEnvelope','./assets/images/Intro-Envelope.png')
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
        //Play Room
        this.load.image('playBG','./assets/images/PlayRoom/PlayBG.png')
        this.load.image('tower','./assets/images/PlayRoom/Tower.png')
        this.load.image('towerCloud','./assets/images/PlayRoom/TowerCloud.png')
        this.load.image('cloud','./assets/images/PlayRoom/Cloud.png')
        this.load.image('michaelShelf','./assets/images/MichaelRoom/shelf.png')
        this.load.image('michaelShelfOpen','./assets/images/MichaelRoom/shelfOpen.png')
        this.load.image('chain','./assets/images/PlayRoom/Chain.png')
        this.load.image('longTower','./assets/images/PlayRoom/LongTower.png')
        this.load.image('playLetter','./assets/images/PlayRoom/PlayLetter.png')
        this.load.image('maleboxOpen','./assets/images/PlayRoom/MaleBoxPostClick.png')
        this.load.image('lettersFront','./assets/images/PlayRoom/LetterFront.png')
        this.load.image('lettersBack','./assets/images/PlayRoom/LetterBack.png')
        this.load.image('sawGround','./assets/images/PlayRoom/SawInGround.png')
        this.load.image('playBG2','./assets/images/PlayRoom/GroundForeground.png')
        

        //load spritesheets---------------
        this.load.spritesheet('mailBox','./assets/images/RobertRoom/MaleBoxAnimatedV2.png',{frameWidth: 180, frameHeight: 250})
        this.load.spritesheet('bottleSheet','./assets/images/PlayRoom/BottleSheet.png',{frameWidth: 427, frameHeight: 425})
        //load audio------------------
        this.load.audio('fireSound','./assets/sounds/fire.wav')
        //load fonts------------------
        this.load.font('uiFont','./assets/fonts/Faith.ttf')
        //load audio------------------
        this.load.audio('fireSound','./assets/sounds/fire.wav')
        this.load.audio('metal','./assets/sounds/metalDink.wav')
        this.load.audio('grassBGM','./assets/sounds/GrassFieldBGM.wav')
        this.load.audio('grassBGMKicks','./assets/sounds/GrassFieldBGMKicks.wav')
        //load fonts------------------
        this.load.font('uiFont','./assets/fonts/Faith.ttf')
    }

    create()
    {
        //create animations----------------
            this.anims.create({
                key: 'mailBoxAnim',
                frames: this.anims.generateFrameNumbers('mailBox',{start: 0, end: 1}),
                frameRate: 2,
                repeat: -1
            })

            this.anims.create({
                key: 'bottleAnim',
                frames: this.anims.generateFrameNumbers('bottleSheet',{start: 0, end: 3}),
                frameRate: 15,
                repeat: -1
            })
            
        this.scene.start('introScene')
    }
}