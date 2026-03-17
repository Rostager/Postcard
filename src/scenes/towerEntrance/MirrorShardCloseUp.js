class MirrorShardCloseUp extends Phaser.Scene
{
    constructor()
    {
        super("mirrorShardCloseUpScene")
    }

    create(){

         //PLAY voiceover
        this.voiceOver = this.sound.add('mirrorVoice', {
            loop: false,
            volume: 0.60
        });
        this.voiceOver.play();
        //USE THIS TO KILL voiceOver AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.voiceOver.stop();
            
        });
        //add black bg so there isn't red clipping when the portal bg is rotating
        this.add.rectangle(0,0,width,playHeight,0x000000).setOrigin(0,0)
        this.sceneBG = this.add.image(width/2,playHeight/2,'portal').setOrigin(0.5,0.5)
        this.letterHand = this.add.image(width/2,playHeight/2,'letterHand').setOrigin(0.5,0.5)
        this.mirrorShard = new FindableObject(this,225,180,'mirrorShard','towerEntranceUnlockedScene',4).setOrigin(0.5,0.5)
        // this.shard = new FindableObject(this,225,180,'mailBox','towerUnlockedScene',3).play('bottleAnim').setOrigin(0.5,0.5)






        this.typewriterEvent = null;
        this.descriptionText = this.add.text(450,10,'',{
            fontFamily:'Georgia',
            fontSize: '20px',
            color:'0xffffff'
        }).setAngle(0)

        this.typewriterEffect("A mirror is patient, but never kind. If you \nwish to know yourself, you must look until the \nsurface resists you, until the face you have carried \nfor so long begins to crack at the edges. What falls \naway was never steady. What remains is a shard small, \nsharp, and honest. Take it with you. The way forward \nopens only to those who can endure their own reflection.\n\n                                                                      - Robert")
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