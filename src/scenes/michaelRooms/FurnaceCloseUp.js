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