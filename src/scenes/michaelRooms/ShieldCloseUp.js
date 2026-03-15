class ShieldCloseUp extends Phaser.Scene
{
    constructor(){
        super('shieldCloseUpScene')
    }

    create()
    {
       //PLAY BGM
        this.bgm = this.sound.add('closeUpBGM', {
            loop: true,
            volume: 0.10
        });
        this.bgm.play();

         this.sceneBG = this.add.image(width/2,playHeight/2,'michaelShieldCloseUp')
         this.sheild = new FindableObject(this,144,0,'michaelShieldClose','michaelRoomScene',0)
            
    
         //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            
        });

    //FOR TYPEWRITTER EFFECT FOR LETTER
        this.typewriterEvent = null;
        this.descriptionText = this.add.text(523,13,'',{
            fontFamily:'Georgia',
            fontSize: '15px'
        }).setAngle(12)
        //This is where you write the letter text.
        this.typewriterEffect("I never wanted to be the sword,\nI never craved titanium caps to mask\nthe taste of iron as blood races down\nmy throat, I never wanted to sharpen\nmyself to better cut down others, I\nalways wanted to be the shield, The one\nthat protects when it stands up, And\nas I lay my head to rest I watch the\nones standing die,The sword acts as\nthe prompter, demanding one shall die,\nThe shield is the one answering that question,\nThe shield gets to decide who dies, not the sword.\n\nI fear a world where the strong feast on the weak.\nI fear the day the shields body lays hollow,\nI fear the day I lay my head to rest and watch the ones I care for die.\nI fear the day we value the shield as more dangerous then the sword will never come.\nI fear the shield, and the sword makes me sick")
        


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