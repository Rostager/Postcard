class TowerEntrance extends Phaser.Scene {
    constructor() {
        super("towerEntranceScene")
    }

    create(){
        this.mirrorClicks = 0
        this.mirrorBroken = false
        this.towerEntranceBG = this.add.image(0,0,'towerEntranceBG').setOrigin(0,0)
        //this.towerMirror = this.add.image(30,4,'towerMirror').setOrigin(0,0)
        this.mirror = this.add.sprite(30,4,'towerMirror',0).setOrigin(0,0).setInteractive()
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
    }

    update(){
        /* Objective: If player clicks the mirror 
                    add a crack to the glass
                    play a crack sound
                    add a tally to a tracker
                    on the third or 5th crack the mirror breaks 
                    mirror becomes a findable shard of glass
        */

    }

}