class DoorWay extends Phaser.GameObjects.Image
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
        if(openSprite == null)
        {
            openSprite = key
        }
      
         // hover feedback
        this.on('pointerover', () => {
            this.setScale(1.10)
            this.scene.scene.get('uiScene').cursorImage.setTexture('pointerHover')
            this.setTexture(openSprite)
        });
        this.on('pointerout',  () => {
            this.setScale(1)
            this.scene.scene.get('uiScene').cursorImage.setTexture('pointerDefault')
            this.setTexture(key)
        });

        // click behavior, get the text from the ui scene and set it to description string.
        this.on('pointerdown', () => {
            this.scene.scene.start(tranScene)
        })
    
    }
}