class ClickableObject extends Phaser.GameObjects.Sprite
{
    constructor(scene,x,y,key,description,sfx)
    {
        super(scene,x,y,key)
        
        this.textDescription = description
        this.setOrigin(0,0)
        scene.add.existing(this)
        this.setInteractive({
            pixelPerfect: true,
            alphaTolerance: 1  
        })
    if(sfx == null){
        sfx= 'metal'
    }
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
            
            this.scene.sound.play(sfx);
            this.scene.scene.get('uiScene').typewriterEffect(this.textDescription)
        })
    
    }

    changeDescription(newDescription){
       this.textDescription = newDescription
    }

}
