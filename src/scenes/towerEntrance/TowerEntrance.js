class TowerEntrance extends Phaser.Scene {
    constructor() {
        super("towerEntranceScene")
    }

    create(){
        this.mirrorClicks = 0
        this.mirrorBroken = false
        this.towerDoorClickable = new ClickableObject(this, 482, 170, 'towerDoorClosed', "The door is locked tight.").setOrigin(0.5,0.5).setScale(1.2)
        this.towerDoorway = new DoorWay(this, 1500, 135, 'towerDoorClosed', 'towerEntranceScene', 'towerDoorOpen').setOrigin(0.5,0.5).setScale(1.2)
        this.towerEntranceBG = this.add.image(0,0,'towerEntranceBG').setOrigin(0,0)

        //this.towerMirror = this.add.image(30,4,'towerMirror').setOrigin(0,0)
        this.mirror = new ClickableObject (this, 132, 150, 'towerMirror', "Its so fragile...").setOrigin(0.5,0.5)
        this.mirrorBrokenFindable = new FindableObject(this,3000,4 + 150,'towerMirror','mirrorShardCloseUpScene', -1).setOrigin(0.5,0.5).setFrame(3) //Not doorway because its resetting sprite to default

        this.eye = new ClickableObject ( this, 805, 69, 'eyeBlink', "Its watching you...").setOrigin(0.5,0.5).play('eyeBlinkAnim')
        this.mouth = new ClickableObject ( this, 805, 215, 'mouthSheet', "It seems to be smiling...").setOrigin(0.5,0.5).play('mouthAnim').setAngle(90).setScale(0.80)

        this.mirror.on('pointerdown', () => {
            if (this.mirrorBroken) return

            this.mirrorClicks++

            // Move to the next frame each click
            this.mirror.setFrame(this.mirrorClicks)

            // If frame 3 is the final broken frame, stop there
            if (this.mirrorClicks >= 3) {
                this.mirrorBroken = true
            }
        })

        this.eye.on('pointerover', () => {
            this.eye.anims.pause()
            this.eye.setFrame(2)
        })

        this.eye.on('pointerout', () => {
            this.eye.anims.play('eyeBlinkAnim')

        })
    }

    update(){
        /* Objective: If player clicks the mirror 
                    add a crack to the glass
                    play a crack sound
                    add a tally to a tracker
                    on the third or 5th crack the mirror breaks 
                    mirror becomes a findable shard of glass
        */
       if (this.mirrorBroken) {
        this.mirror.x = 1500 //Send it off screen
        this.mirrorBrokenFindable.x = 132
       }
    }

}