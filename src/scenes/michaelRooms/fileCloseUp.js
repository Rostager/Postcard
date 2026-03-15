class FileCloseUp extends Phaser.Scene
{
    constructor(){
        super('fileCloseUpScene')
    }

    create()
    {
        this.bgm = this.sound.add('closeUpBGM', {
            loop: true,
            volume: 0.10
        });
        this.bgm.play();
         this.sceneBG = this.add.image(width/2,playHeight/2,'creationFileCloseUp')
         this.imgFile = new FindableObject(this,0,61,'creationFileBig','michaelRoomScene',2)

            
     //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            
        });

          //FOR TYPEWRITTER EFFECT FOR LETTER
        this.typewriterEvent = null;
        this.descriptionText = this.add.text(344,57,'',{
            fontFamily:'Georgia',
            fontSize: '20px',
            color: '0xefefef'
        })
        //This is where you write the letter text.
        this.typewriterEffect("When I found myself in darkness I created light\nWhen they found my light they snuffed it\nWhen I couldn't swim I build a boat\nSo they poked holes to make me sink\nWhen I couldn't bear the silence I created noise\nWhich they muted when they could\n\nAnd when I created a path out of this darkness with all the\nskills I aquired\nthey did nothing but smash the latter,\ntrapping themselfs in darkness")

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