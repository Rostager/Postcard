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

    }
}