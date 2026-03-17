class BackButton extends Phaser.GameObjects.Sprite
{
     constructor(scene,x,y,tranScene)
    {
        super(scene,x,y,'backArrow')
        this.setOrigin(0,0)
        scene.add.existing(this)
        this.setInteractive({
            pixelPerfect: true,
            alphaTolerance: 1  
        })
        this.hovering
        // hover feedback
        this.on('pointerover', () => {
            this.setScale(1.10)
            this.scene.scene.get('uiScene').cursorImage.setTexture('pointerHover')
            this.hovering = true
        })
        //FeedBack for when you leave
        this.on('pointerout',  () => {
            this.setScale(1)
            this.scene.scene.get('uiScene').cursorImage.setTexture('pointerDefault')
            this.hovering = true
        })

        // click behavior
        this.on('pointerdown', () => {
        this.scene.scene.start(tranScene)    
        })
    }
}