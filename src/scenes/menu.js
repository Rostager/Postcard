class Menu extends Phaser.Scene
{
    constructor()
    {
        super('menuScene')
    }

    create()
    {
        this.add.text(width/2, height/2, 'Postcard', {fontSize: '64px', fill: '#000000'}).setOrigin(0.5);
    }
}