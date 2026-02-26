class FindableObject extends ClickableObject
{
    constructor(scene,x,y,key,tranScene)
    {
        super(scene,x,y,key,'This seems important')

        this.on('pointerdown', () => {
        this.setVisible(false);
        this.disableInteractive();
       this.scene.scene.start(tranScene)
        })
    }
}