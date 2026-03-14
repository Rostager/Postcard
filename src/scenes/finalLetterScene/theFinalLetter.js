//TODO FOR THIS SCENE, ADD TEXT THAT TWEENS UP THE SCREEN AND THEN AT THE END IT WILL FADE TO BLACK AND THEN END. CREDITS 

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

        this.bgImage = this.add.image(width/2,height/2,'finalLetterBG')
         //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            
        });
    }
}