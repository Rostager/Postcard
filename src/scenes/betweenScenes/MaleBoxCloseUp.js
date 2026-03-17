class MaleBoxCloseUp extends Phaser.Scene
{
    constructor(){
        super('maleBoxCloseUpScene')
    }

    create()
    {   

        //PLAY BGM
        this.bgm = this.sound.add('closeUpBGM', {
            loop: true,
            volume: 0.10
        });
        this.bgm.play();

        //add black bg so there isn't red clipping when the portal bg is rotating
        this.add.rectangle(0,0,width,playHeight,0x000000).setOrigin(0,0)
        this.sceneBG = this.add.image(width/2,playHeight/2,'portal').setOrigin(0.5,0.5)
        this.letterHand = this.add.image(width/2,playHeight/2,'letterHand').setOrigin(0.5,0.5)
        this.bottle = new FindableObject(this,225,180,'mailBox','towerUnlockedScene',3).play('bottleAnim').setOrigin(0.5,0.5) 
        //this.bottle = new FindableObject(this,225,180,'mailBox','finalLetterRoomScene',3).play('bottleAnim').setOrigin(0.5,0.5)
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
        //This is where you write the letter text. Can't actually indent so sorry this is ugly lmao
        this.typewriterEffect("Something writhes beneath the skin of all things. \nHere, in this jar, I have trapped a fragment of my \nessence, and it does not enjoy captivity. Search \nfor the relics. Recover each one. When all has been \nreturned, so may you.\n\n                                                                      - Robert")
        
         //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            
        });

    }

    typewriterEffect(fullText) {
    // kill the old typing event if one is still running
    if (this.typewriterEvent) {
        this.typewriterEvent.remove(false)
        this.typewriterEvent = null
    }

    let index = 0
    const speed = 10

    this.descriptionText.setText('')

    this.typewriterEvent = this.time.addEvent({
        delay: speed,
        repeat: fullText.length - 1,
        callback: () => {
            this.descriptionText.setText(this.descriptionText.text + fullText[index])
            index++

            // cleanup when finished
            if (index >= fullText.length) {
                this.typewriterEvent = null
            }
        }
    })
    }

    
}