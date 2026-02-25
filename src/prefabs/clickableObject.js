class ClickableObject extends Phaser.GameObjects.Image
{
    constructor(scene,x,y,key)
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

        // click behavior
        this.on('pointerdown', () => {
        this.setVisible(false);
        this.disableInteractive();
        })
    
    }

}
