class RobertArmCloseUp extends Phaser.Scene
{
    constructor()
    {
        super("robertArmCloseUpScene")
    }
 
    create(){
        //PlayVoiceOver
         this.voiceOver = this.sound.add('handVoice', {
            loop: false,
            volume: 0.60
        })
        this.voiceOver.play();
        //USE THIS TO KILL voiceOver AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.voiceOver.stop();
            
        })

        //background, Objects, and Clickables
        this.add.rectangle(0,0,width,playHeight,0x000000).setOrigin(0,0) //add black bg so there isn't red clipping when the portal bg is rotating
        this.sceneBG = this.add.image(width/2,playHeight/2,'portal').setOrigin(0.5,0.5)
        this.letterHand = this.add.image(width/2,playHeight/2,'letterHand').setOrigin(0.5,0.5)
        this.robertArm = new FindableObject(this,225,180,'robertArm','elevatorRoomPaintedScene',5).setOrigin(0.5,0.5). setScale(2).setAngle(45)
        
        this.typewriterEvent = null;
        this.descriptionText = this.add.text(450,10,'',{
            fontFamily:'Georgia',
            fontSize: '20px',
            color:'0xffffff'
        }).setAngle(0)

        //This is where you write the letter text. Can't actually indent so sorry this is ugly lmao
        this.typewriterEffect("This hand remembers what the rest of me nearly forgot. \nIt remembers scissors, pigment, and the quiet relief of \nturning hurt into form. When I could no longer carry \nmyself cleanly, art held the pieces for me. Take it now. \nPaint the waiting canvases. Let creation keep what \nsorrow could not.\n\n                                                                      - Robert")

        //background rotate slowly
        this.tweens.add({
            targets: this.sceneBG,
            angle: 360,
            duration: 30000,
            repeat: -1
        })
    }

    typewriterEffect(fullText) {
    // kill the old typing event if one is still running
    if (this.typewriterEvent) {
        this.typewriterEvent.remove(false)
        this.typewriterEvent = null;
    }

    let index = 0
    const speed = 10

    this.descriptionText.setText('')

    this.typewriterEvent = this.time.addEvent({
        delay: speed,
        repeat: fullText.length - 1,
        callback: () => {
            this.descriptionText.setText(this.descriptionText.text + fullText[index])
            index++;

            // cleanup when finished
            if (index >= fullText.length) {
                this.typewriterEvent = null
            }
        }
    })
    }
}