class TowerEntranceUnlocked extends Phaser.Scene {
    constructor() {
        super("towerEntranceUnlockedScene")
    }

    create(){

        //Background, Objects, and Clickables
        this.add.rectangle(0,0,width,playHeight,0x000000).setOrigin(0,0) //Backdrop of opened door
        this.towerDoorway = new DoorWay(this, 482, 170, 'towerDoorClosed', 'elevatorRoomScene', 'towerDoorOpen').setOrigin(0.5,0.5).setScale(1.2)
        this.towerEntranceBG = this.add.image(0,0,'towerEntranceBG').setOrigin(0,0)
        this.mirror = new ClickableObject (this, 132, 150, 'brokenMirror', "Its so fragile...").setOrigin(0.5,0.5)
        this.eye = new ClickableObject ( this, 805, 69, 'eyeRoll', "It's gone insane").setOrigin(0.5,0.5).play('rollingEyeAnim')
        this.mouth = new ClickableObject ( this, 805, 215, 'mouth2Sheet', "It's gone insane").setOrigin(0.5,0.5).play('mouthAnim2').setAngle(90).setScale(0.80)

        //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.sound.stopByKey('closeUpBGM')
            
        })
    }
}