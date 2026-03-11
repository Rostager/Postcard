class MaleBoxCloseUp extends Phaser.Scene
{
    constructor(){
        super('maleBoxCloseUpScene')
    }

    create()
    {
        this.sceneBG = this.add.image(width/2,playHeight/2,'playLetter')
        this.bottle = new FindableObject(this,225,180,'mailBox','towerUnlockedScene',3).play('bottleAnim').setOrigin(0.5,0.5)
            
    }
}