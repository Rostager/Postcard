//TODO FOR THIS SCENE, ADD TEXT THAT TWEENS UP THE SCREEN AND THEN AT THE END IT WILL FADE TO BLACK AND THEN END. CREDITS 

class TheFinalLetter extends Phaser.Scene {
    constructor() {
        super('theFinalLetterScene');
    }

    create() {
        //PLAY BGM
        this.scene.stop('uiScene')
        this.bgm = this.sound.add('artBGM', {
            loop: true,
            volume: 0.30
        });
        this.bgm.play();

        this.bgImage = this.add.image(width/2,height/2,'finalLetterBG')
         //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            
        });

       //FOR TYPEWRITTER EFFECT FOR LETTER
        this.typewriterEvent = null;
        this.descriptionText = this.add.text(90,100,'',{
            fontFamily:'Georgia',
            fontSize: '20px',
            color:'#ffffff'
        }).setAngle(0)
        //This is where you write the letter text.
        this.typewriterEffect("With in these walls of choas its up to you to decide your path. I grew up in the same house hold\n you did and I understand how it can feel as if they are trying to make you collapse. You must\nself reflect, deciding who you want to become. It may seem as destruction is the path to\nsalvation, yet only temperary. In creation you will find meaning ")
        


    }

    typewriterEffect(fullText) {
    // kill the old typing event if one is still running
    if (this.typewriterEvent) {
        this.typewriterEvent.remove(false);
        this.typewriterEvent = null;
    }

    let index = 0;
    const speed = 10;

    this.descriptionText.setText('');

    this.typewriterEvent = this.time.addEvent({
        delay: speed,
        repeat: fullText.length - 1,
        callback: () => {
            this.descriptionText.setText(this.descriptionText.text + fullText[index]);
            index++;

            // cleanup when finished
            if (index >= fullText.length) {
                this.typewriterEvent = null;
            }
        }
    });
}
}