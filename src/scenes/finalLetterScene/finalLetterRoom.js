class FinalLetterRoom extends Phaser.Scene {
    constructor() {
        super('finalLetterRoomScene');
    }

    create() {
         this.UiScene = this.scene.manager.getScene('uiScene')
         this.UiScene.dot.y = 375
        //PLAY BGM
        this.bgm = this.sound.add('IntroBGM', {
            loop: true,
            volume: 0.30
        });
        this.bgm.play();

        this.sceneBG = this.add.image(width / 2, playHeight / 2, 'letterRoomBG');
        this.add.image(362,266,'tableFinal').setOrigin(0)
        this.finalLetter = new DoorWay(this, 420, 250, 'envelopeFinal', "theFinalLetterScene")
        
         //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            
        });
    }
}