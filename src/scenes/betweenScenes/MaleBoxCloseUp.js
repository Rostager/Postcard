class MaleBoxCloseUp extends Phaser.Scene
{
    constructor(){
        super('maleBoxCloseUpScene')
    }

    create()
    {   
        //add black bg so there isn't red clipping when the portal bg is rotating
        this.add.rectangle(0,0,width,playHeight,0x000000).setOrigin(0,0)
        this.sceneBG = this.add.image(width/2,playHeight/2,'portal').setOrigin(0.5,0.5)
        this.letterHand = this.add.image(width/2,playHeight/2,'letterHand').setOrigin(0.5,0.5)
        this.bottle = new FindableObject(this,225,180,'mailBox','towerUnlockedScene',3).play('bottleAnim').setOrigin(0.5,0.5)
        
        //background rotate slowly
        this.tweens.add({
            targets: this.sceneBG,
            angle: 360,
            duration: 30000,
            repeat: -1
        })
        this.typewriterEvent = null;
        this.descriptionText = this.add.text(450,10,'',{
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