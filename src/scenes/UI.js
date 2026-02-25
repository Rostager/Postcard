class UI extends Phaser.Scene
{
    constructor()
    {
        super('uiScene',true)
    }


    create()
    {
        this.add.rectangle(width/2,playHeight,width,height/3,'#ffffff').setOrigin(0.5,0)
        
    }
}