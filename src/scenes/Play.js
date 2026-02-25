//pointer events that we will prob use
//1. 'pointerdown' for clicking
//2. 'pointerover' for hoving

class Play extends Phaser.Scene
{
    constructor()
    {
        super("playScene")
    }

    create()
    {
        console.log(playHeight + "  " + playWidth)
        this.testImage = new ClickableObject(this,0,0,'testImg')
        this.testImage2 = new ClickableObject(this,playWidth/2,playHeight/2,'testImg')
        console.log(this.testImage2.x + "  " + this.testImage2.y)
        

       
        this.testImage.on('pointerdown',()=>{
            this.testImage.visible = false
        })

        this.scene.launch('uiScene')
    }


}