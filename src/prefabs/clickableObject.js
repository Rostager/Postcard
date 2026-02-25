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
      
         // hover feedback (optional)
        this.on('pointerover', () => this.setAlpha(0.85));
        this.on('pointerout',  () => this.setAlpha(1));

        // click behavior
        this.on('pointerdown', () => {
        // local behavior (the object reacts)
        this.setVisible(false);
        this.disableInteractive();
        })
    
    }

}
