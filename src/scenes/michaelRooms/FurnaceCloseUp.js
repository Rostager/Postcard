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
         volume: 0.5
            });

        this.fireSound.play();

        this.events.once('shutdown', () => {
            if (this.fireSound) {
            this.fireSound.stop();
            }
        });

        //FOR TYPEWRITTER EFFECT FOR LETTER
        this.typewriterEvent = null;
        this.descriptionText = this.add.text(633,17,'',{
            fontFamily:'Georgia',
            fontSize: '20px'
        }).setAngle(12)
        //This is where you write the letter text.
        this.typewriterEffect("this is a test to type writter\n")
        


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