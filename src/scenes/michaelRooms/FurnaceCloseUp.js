class FurnaceCloseUp extends Phaser.Scene
{
    constructor()
    {
        super('furnaceCloseUpScene')
    }
    create()
    {
         this.sceneBG = this.add.image(width/2,playHeight/2,'michaelFurnaceCloseUp')
         this.backButton = new BackButton(this,playWidth - 100,  50,'michaelRoomScene')
    }
}