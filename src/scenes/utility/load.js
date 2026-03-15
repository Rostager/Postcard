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
       this.load.image('portal', './assets/images/PortalBackdrop.png')
       this.load.image('letterHand', './assets/images/LetterHand.png')
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
        this.load.image('michaelFurnaceArm','./assets/images/MichaelRoom/furnaceArm.png')
        this.load.image('michaelShieldClose','./assets/images/MichaelRoom/sheildCloseUp.png')
        this.load.image('creationFileCloseUp','./assets/images/MichaelRoom/creationCloseUp.png')
        this.load.image('creationFileBig','./assets/images/MichaelRoom/creationFileClose.png')
        this.load.image('computerImages','./assets/images/MichaelRoom/computerImages.png')
        this.load.image('tekkenPoster','./assets/images/MichaelRoom/tekkenPoster.png')
        this.load.image('yoshiSit','./assets/images/MichaelRoom/Yoshi.png')
        this.load.image('izzy','./assets/images/MichaelRoom/izzy.png')
        //FinalLetterRoom
        this.load.image('tableFinal','./assets/images/FinalLetterRoom/tableFinal.png')
        this.load.image('envelopeFinal','./assets/images/FinalLetterRoom/envelopeFinal.png')
        this.load.image('letterRoomBG','./assets/images/FinalLetterRoom/FinalLetterRoomBackGround.png')
        this.load.image('finalLetterBG','./assets/images/FinalLetterRoom/finalLetterBG.png')

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
        //TowerEntrance
        this.load.image('towerEntranceBG','./assets/images/TowerEntrance/TowerFrontDoor.png')
        this.load.image('mirrorShard','./assets/images/TowerEntrance/MirrorShard.png')
        this.load.image('towerDoorClosed','./assets/images/TowerEntrance/DoorClosed.png')
        this.load.image('towerDoorOpen','./assets/images/TowerEntrance/DoorOpen.png')
        this.load.image('brokenMirror','./assets/images/TowerEntrance/MirrorBroken.png')
        // this.load.image('towerMirror','./assets/images/TowerEntrance/Mirror.png')
        this.load.spritesheet('towerMirror','./assets/images/TowerEntrance/MirrorSheet.png',{frameWidth: 204, frameHeight: 300})

        //load spritesheets---------------
        this.load.spritesheet('mailBox','./assets/images/RobertRoom/MaleBoxAnimatedV2.png',{frameWidth: 180, frameHeight: 250})
        this.load.spritesheet('bottleSheet','./assets/images/PlayRoom/BottleSheet.png',{frameWidth: 427, frameHeight: 425})
        this.load.spritesheet('eyeBlink','./assets/images/TowerEntrance/EyeBlinkSheet.png',{frameWidth: 207, frameHeight: 122})
        this.load.spritesheet('mouthSheet','./assets/images/TowerEntrance/MouthSheet.png',{frameWidth: 207, frameHeight: 135})
        //load audio------------------
        this.load.audio('fireSound','./assets/sounds/fire.wav')
        //load fonts------------------
        this.load.font('uiFont','./assets/fonts/Faith.ttf')
        //load audio------------------
        this.load.audio('fireSound','./assets/sounds/fire.wav')
        this.load.audio('metal','./assets/sounds/metalDink.wav')
        this.load.audio('grassBGM','./assets/sounds/GrassFieldBGM.wav')
        this.load.audio('grassBGMKicks','./assets/sounds/GrassFieldBGMKicks.wav')
        this.load.audio('michaelRoomBGM','./assets/sounds/michaelRoomBGM.wav')
        this.load.audio('IntroBGM','./assets/sounds/introPostCardVoice.wav')
        this.load.audio('closeUpBGM','./assets/sounds/closeUpMusicPostCard.wav')
        this.load.audio('creationVoice','./assets/sounds/VoiceOvers/CreationLetter.wav')
        this.load.audio('LeviathanVoice','./assets/sounds/VoiceOvers/leviatahnletterPostcard.wav')
        this.load.audio('ShieldVoice','./assets/sounds/VoiceOvers/ShieldBearerVoice.wav')
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

            //Eye Blinking animation
            this.anims.create({
                key: 'eyeBlinkAnim',
                frames: this.anims.generateFrameNumbers('eyeBlink',{start: 0, end: 1}),
                frameRate: 2,
                repeat: -1
            })
            
            //Mouth animation
            this.anims.create({
                key: 'mouthAnim',
                frames: this.anims.generateFrameNumbers('mouthSheet',{start: 0, end: 5}),
                frameRate: 4,
                repeat: -1
            })
        this.scene.start('introScene')
    }
}