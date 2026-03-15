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
    }
}