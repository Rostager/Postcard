//TODO FOR THIS SCENE, ADD TEXT THAT TWEENS UP THE SCREEN AND THEN AT THE END IT WILL FADE TO BLACK AND THEN END. CREDITS 

class TheFinalLetter extends Phaser.Scene {
    constructor() {
        super('theFinalLetterScene');
    }

    create() {
        
         this.input.setDefaultCursor('')
        this.scene.stop('uiScene')
        this.bgm = this.sound.add('grassBGM', {
            loop: true,
            volume: 0.05
        });
        this.bgm.play();
        this.voiceOver = this.sound.add('finalLetterVoice', {
            loop: false,
            volume: 0.60
        });
        this.voiceOver.play();

        this.bgImage = this.add.image(width/2,height/2,'finalLetterBG')
        this.homeButton = this.add.image(200,playHeight+100,'stamp').setAlpha(0).setInteractive()
        
        //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            this.voiceOver.stop();
            
        });

       //FOR TYPEWRITTER EFFECT FOR LETTER
        this.typewriterEvent = null;
        this.descriptionText = this.add.text(40,20,'',{
            fontFamily:'Georgia',
            fontSize: '20px',
            color:'#ffffff'
        }).setAngle(0)
        //This is where you write the letter text.
        this.typewriterEffect("When you found yourself entrapped in chaos, you kept going? As you stare into a lake of memories\nso still you can't tell the difference between the reflection and reality, you realize it doesn't\nmatter anyway. We showed you our spirit, an energy that can hardly be contained, and it was up\nto you to find self-reflection, something one must find before truly creating any meaning in\nthis world. Creation, what a beautiful thing. As you grow older, you will come to learn that\ncreation is your guiding light in this dark world. As you create, you immortalize yourself\ninto this world; you immortalize your thoughts, your meanings, your memories. If it wasn't\nfor creation, all we could cause is destruction, yet without creation, we have nothing to\ndestroy, leaving you in a space inescapable, untouchable, unsaveable. As you climb out of this\ndark cavern, I ask: would you travel the barren wasteland with a sword by your side or a\nshield? As the sun beats on the creations you made, what will you defend them with? What image\nwill be burned into your back? As you remixed our memories, you have already begun the journey\nof self-understanding. And as your feet continue to burn, dragging in the hot sand of this\nbarren wasteland, I need you to remember one thing: nobody got you this far but yourself. Oh\nLeviathan, if you must judge, I beg you, judge fairly. I beg you to see me as I see you, a\nhuman being, one made from creation and one taken by destruction.\n\n\n\n                                                                                                                   Forever in a place unreachable,\n                                                                                                                          Michael & Robert Stager")
        //Might use this as credits display as well.
        this.homeButton.on('pointerdown',()=>{
           this.cameras.main.fadeOut(1000, 0, 0, 0); 
           this.time.delayedCall(1000,()=>{
             this.scene.start('creditsScene')
           })
        })
         this.homeButton.on('pointerover',()=>{
            this.homeButton.setScale(this.homeButton.scale + 0.1)
        })
        this.homeButton.on('pointerout',()=>{
            this.homeButton.setScale(this.homeButton.scale - 0.1)
        })

    }

    typewriterEffect(fullText) {
    // kill the old typing event if one is still running
    if (this.typewriterEvent) {
        this.typewriterEvent.remove(false);
        this.typewriterEvent = null;
    }

    let index = 0;
    const speed = 50;

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
                this.homeButton.setAlpha(1)
            }
        }
    });
}
}