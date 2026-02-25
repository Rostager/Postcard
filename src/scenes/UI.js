class UI extends Phaser.Scene
{
    constructor()
    {
        super('uiScene',true)
    }


    create()
    {
        this.add.image(0,playHeight,'hudImg').setOrigin(0,0)
        
    }
}