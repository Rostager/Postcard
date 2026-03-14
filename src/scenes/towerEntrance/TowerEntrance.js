class TowerEntrance extends Phaser.Scene {
    constructor() {
        super("towerEntranceScene")
    }

    create(){
        this.towerEntranceBG = this.add.image(0,0,'towerEntranceBG').setOrigin(0,0)
        this.towerMirror = this.add.image(30,4,'towerMirror').setOrigin(0,0)

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