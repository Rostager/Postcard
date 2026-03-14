class ShieldCloseUp extends Phaser.Scene
{
    constructor(){
        super('shieldCloseUpScene')
    }

    create()
    {
         this.sceneBG = this.add.image(width/2,playHeight/2,'michaelShieldCloseUp')
         this.sheild = new FindableObject(this,144,0,'michaelShieldClose','michaelRoomScene',0)
         this.backButton = new BackButton(this,playWidth - 200,  40,'michaelRoomScene')
            
    

    }
}