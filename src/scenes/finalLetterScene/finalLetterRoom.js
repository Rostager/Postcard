class FinalLetterRoom extends Phaser.Scene {
    constructor() {
        super('finalLetterRoomScene');
    }

    create() {
        //Tracks maiden logics
        this.maidenClicks = 1
        this.maidenLocked = false

        this.UiScene = this.scene.manager.getScene('uiScene')
        this.UiScene.dot.y = 375

        //PLAY BGM
        this.bgm = this.sound.add('IntroBGM', {
            loop: true,
            volume: 0.30
        })
        this.bgm.play()
        //Declare images and interactables 
        this.sceneBG = this.add.image(width / 2, playHeight / 2, 'letterRoomBG')
        this.robertGhost = new ClickableObject(this, 100, 190,'robertGhost', 'Remix our memories').setOrigin(0.5,0.5).setAlpha(0.25)
        this.michaelGhost = new ClickableObject(this, 860, 190,'michaelGhost', 'Remix our memories').setOrigin(0.5,0.5).setAlpha(0.25)

        this.ironMaiden = new ClickableObject(this, 495, 180,'ironMaiden', 'The Iron Maiden').setOrigin(0.5,0.5)
        this.ironMaidenShut = new ClickableObject(this, 495, 1000,'ironMaidenShut', 'The Iron Maiden Shut','metalOpenSFX').setOrigin(0.5,0.5)
        this.ironMaidenopen = this.add.image(495,1000,'ironMaidenOpen').setOrigin(0.5,0.5)
        this.finalLetter = new DoorWay(this, 490, 1000, 'envelopeFinal', "theFinalLetterScene").setOrigin(0.5,0.5)
        
        //Iron maiden events and logics
        this.ironMaiden.on('pointerdown', () => {
            if (this.maidenLocked) return
            // Move to the next frame each click
            this.ironMaiden.setFrame(this.maidenClicks)

            // If frame 3 is the final broken frame, stop there
            if (this.maidenClicks >= 2) {
                this.maidenLocked = true
                this.sound.play('metalSlamSFX')
                this.ironMaidenShut.setY(180)
                this.ironMaiden.setY(1000)
            }

            this.maidenClicks++
        })

        this.ironMaidenShut.on('pointerdown', () => {
            this.ironMaidenopen.setY(180)
            this.ironMaidenShut.setY(1000)
            this.finalLetter.setY(330)
        })

         //USE THIS TO KILL BGM AND OTHER AUDIO
            this.events.once('shutdown', () => {
            this.bgm.stop()
            
        })
    }
}