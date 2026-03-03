class ShieldCloseUp extends Phaser.Scene
{
    constructor(){
        super('shieldCloseUpScene')
    }

    create()
    {
         this.sceneBG = this.add.image(width/2,playHeight/2,'michaelShieldCloseUp')

         this.Backbutton = this.add.image(playWidth-80,playHeight-80,'backArrow')
         this.Backbutton.setInteractive({
            
         })

    }
}