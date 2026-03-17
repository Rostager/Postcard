class DoorWay extends Phaser.GameObjects.Sprite
{
    constructor(scene,x,y,key,tranScene,openSprite)
    {
        super(scene,x,y,key)
        this.setOrigin(0)
        scene.add.existing(this)
        this.setInteractive({
            pixelPerfect: true,
            alphaTolerance: 1  
        })
        //set the open state sprite to the normal sprite if one isnt provided
        if(openSprite == null)
        {
            openSprite = key
        }
      
         //hover feedback
        this.on('pointerover', () => {
            this.setScale(this.scale + 0.1)
            this.scene.scene.get('uiScene').cursorImage.setTexture('pointerHover')
            this.setTexture(openSprite)
        })
        this.on('pointerout',  () => {
            this.setScale(this.scale - 0.1)
            this.scene.scene.get('uiScene').cursorImage.setTexture('pointerDefault')
            this.setTexture(key)
        })

        // click behavior
        this.on('pointerdown', () => {
            this.scene.scene.start(tranScene)
        })
    
    }
}