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
        this.voiceOver = this.sound.add('ShieldVoice', {
            loop: false,
            volume: 0.50
        })
        this.voiceOver.play()

         this.sceneBG = this.add.image(width/2,playHeight/2,'michaelShieldCloseUp')
         this.sheild = new FindableObject(this,144,0,'michaelShieldClose','michaelRoomScene',0)
            
    
         //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop()
            this.voiceOver.stop()
            
        });

    //FOR TYPEWRITTER EFFECT FOR LETTER
        this.typewriterEvent = null;
        this.titleText = this.add.text(606,21,'Shield-Bearer Of Mine:',{
            fontFamily:'Georgia',
            fontSize: '15px',
            color: '0xffffff'
        }).setAngle(15)
        this.descriptionText = this.add.text(475,11,'',{
            fontFamily:'Georgia',
            fontSize: '15px',
            color: '0xffffff'
        }).setAngle(15)
        //This is where you write the letter text.
        this.typewriterEffect("I never wanted to be the sword,I never craved titanium caps\nto mask the taste of iron as blood races down my throat,\nI never wanted to sharpen myself to better cut down others,\nI always wanted to be the shield,\nThe one that protects when it stands up,\nAnd as I lay my head to rest I watch the ones standing die,\nThe sword acts as the prompter, demanding one shall die,\nThe shield is the one answering that question,\nThe shield gets to decide who dies, not the sword.\n\nI fear a world where the strong feast on the weak.\nI fear the day the shields body lays hollow,\nI fear the day I lay my head to rest and watch the ones\nI care for die. I fear the day we value the shield\nas more dangerous then the sword will never come.\nI fear the shield, and the sword makes\n me sick.")
        


    }

    typewriterEffect(fullText) {
    // kill the old typing event if one is still running
    if (this.typewriterEvent) {
        this.typewriterEvent.remove(false);
        this.typewriterEvent = null;
    }

    let index = 0;
    const speed = 15;

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