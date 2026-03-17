class FindableObject extends ClickableObject
{
    constructor(scene,x,y,key,tranScene,iDNumber)
    {
        super(scene,x,y,key,'This seems important')

        //Adds logic to the Clickable, tells UI an important object was found.
        this.on('pointerdown', () => {
            this.scene.scene.get('uiScene').foundImportantItem(iDNumber)
            this.scene.scene.start(tranScene)
        })
    }
}