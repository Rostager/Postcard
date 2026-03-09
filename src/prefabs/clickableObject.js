class ClickableObject extends Phaser.GameObjects.Sprite
{
    constructor(scene,x,y,key,description)
    {
        super(scene,x,y,key)
        this.setOrigin(0,0)
        scene.add.existing(this)
        this.setInteractive({
            pixelPerfect: true,
            alphaTolerance: 1  
        })
      this.hovering
         // hover feedback
        this.on('pointerover', () => {
            this.setScale(this.scale + 0.1)
             this.scene.scene.get('uiScene').cursorImage.setTexture('pointerHover')
             this.hovering = true
            //perhaps play a sound
        });
        this.on('pointerout',  () => {
            this.setScale(this.scale - 0.1)
            this.scene.scene.get('uiScene').cursorImage.setTexture('pointerDefault')
             this.hovering = true
        });

        // click behavior, get the text from the ui scene and set it to description string.
        this.on('pointerdown', () => {
            console.log(description) 
            this.scene.scene.get('uiScene').typewriterEffect(description)
        })
    
    }

}
