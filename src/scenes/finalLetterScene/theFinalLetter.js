class TheFinalLetter extends Phaser.Scene {
    constructor() {
        super('theFinalLetterScene');
    }

    create() {
        //PLAY BGM
        this.scene.stop('uiScene')
        this.bgm = this.sound.add('IntroBGM', {
            loop: true,
            volume: 0.30
        });
        this.bgm.play();

         //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            
        });
    }
}