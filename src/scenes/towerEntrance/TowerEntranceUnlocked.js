class TowerEntranceUnlocked extends Phaser.Scene {
    constructor() {
        super("towerEntranceUnlockedScene")
    }

    create(){
        this.add.rectangle(0,0,width,playHeight,0x000000).setOrigin(0,0) //Backdrop of opened door
        this.towerDoorway = new DoorWay(this, 482, 170, 'towerDoorClosed', 'elevatorRoomScene', 'towerDoorOpen').setOrigin(0.5,0.5).setScale(1.2)
        this.towerEntranceBG = this.add.image(0,0,'towerEntranceBG').setOrigin(0,0)

        //this.towerMirror = this.add.image(30,4,'towerMirror').setOrigin(0,0)
        this.mirror = new ClickableObject (this, 132, 150, 'brokenMirror', "Its so fragile...").setOrigin(0.5,0.5)

        //MAKE CRAZY VERSION ONCE FINISHED
        this.eye = new ClickableObject ( this, 805, 69, 'eyeBlink', "Its watching you...").setOrigin(0.5,0.5).play('eyeBlinkAnim')
        this.mouth = new ClickableObject ( this, 805, 215, 'mouthSheet', "It seems to be smiling...").setOrigin(0.5,0.5).play('mouthAnim').setAngle(90).setScale(0.80)

    }
}