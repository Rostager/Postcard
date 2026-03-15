class FurnaceCloseUp extends Phaser.Scene
{
    constructor()
    {
        super('furnaceCloseUpScene')
    }
    create()
    {

         this.sceneBG = this.add.image(width/2,playHeight/2,'michaelFurnaceCloseUp')
         this.arm = new FindableObject(this,96,122,'michaelFurnaceArm','michaelRoomScene',1)
         this.fireSound = this.sound.add('fireSound', {
         loop: true,
         volume: 0.1
            });

        this.fireSound.play();
        this.voiceOver = this.sound.add('LeviathanVoice', {
            loop: false,
            volume: 0.50
        })
        this.voiceOver.play()

        this.events.once('shutdown', () => {
            if (this.fireSound) {
            this.fireSound.stop()
            this.voiceOver.stop()
            }
        });

        //FOR TYPEWRITTER EFFECT FOR LETTER
        this.typewriterEvent = null;
        this.descriptionText = this.add.text(515,10,'',{
            fontFamily:'Georgia',
            fontSize: '20px',
            color:'0xffffff'
        }).setAngle(0)
        //This is where you write the letter text.
        this.typewriterEffect("Beneath the Leviathan Cross I stand,\nWhen cruelty grows, it’s us who feed it,\nWhen mercy is present, it’s us who grant it.\nWhen souls are shared, it’s us who bound it.\nWhen greed is fruitful, it’s us who suffer.\nWhen we are sick, it’s us who heals.\nWhen friends return, it’s us who greet.\nWhen the Leviathan judges, it’s us who stare.\n\nTo wait for salvation is to wait in vain,\nHumanity destroys, and humanity creates,\nThis is our burden, beneath the Leviathan.\nNo god made war, no god made greed.\nBeneath the Leviathan Cross I stand,\nKnowing the world was shaped by human hands.")
        


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