class ClickableObject extends Phaser.GameObjects.Image
{
    constructor(scene,x,y,key,description)
    {
        super(scene,x,y,key)
        this.setOrigin(0.5,0.5)
        scene.add.existing(this)
        this.setInteractive({
            pixelPerfect: true,
            alphaTolerance: 1  
        })
      
         // hover feedback
        this.on('pointerover', () => {
            this.setAlpha(0.85)
            this.setScale(1.05)
        });
        this.on('pointerout',  () => {
            this.setAlpha(1)
            this.setScale(1)
        });

        // click behavior, get the text from the ui scene and set it to description string.
        this.on('pointerdown', () => {
            console.log(description) 
            this.scene.scene.get('uiScene').descriptionText.setText(description)
        })
    
    }

}
