class ComputerCloseUp extends Phaser.Scene
{
    constructor(){
        super('computerCloseUpScene')
    }

    create()
    {
         this.sceneBG = this.add.image(width/2,playHeight/2,'michaelComputerBG')
         this.backButton = new BackButton(this,playWidth - 200,  40,'michaelRoomScene')
         this.imgFile = new ClickableObject(this,100,100,'michaelImgFile','A bunch of cool photos')
         this.creationFile = new FindableObject(this,100,200,'michaelCreationFile','michaelRoomScene',2)
            
    

    }
}