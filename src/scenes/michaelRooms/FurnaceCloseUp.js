class FurnaceCloseUp extends Phaser.Scene
{
    constructor()
    {
        super('furnaceCloseUpScene')
    }
    create()
    {
         this.sceneBG = this.add.image(width/2,playHeight/2,'michaelFurnaceCloseUp')
         this.arm = new FindableObject(this,96,122,'michaelFurnaceArm','michaelRoomScene',1)
         this.fireSound = this.sound.add('fireSound', {
         loop: true,
         volume: 0.5
            });

        this.fireSound.play();

        this.events.once('shutdown', () => {
            if (this.fireSound) {
            this.fireSound.stop();
            }
        });
    }
}