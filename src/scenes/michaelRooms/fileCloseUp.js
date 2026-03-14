class FileCloseUp extends Phaser.Scene
{
    constructor(){
        super('fileCloseUpScene')
    }

    create()
    {
         this.sceneBG = this.add.image(width/2,playHeight/2,'creationFileCloseUp')
         this.imgFile = new FindableObject(this,0,61,'creationFileBig','michaelRoomScene',2)

            
    

    }
}