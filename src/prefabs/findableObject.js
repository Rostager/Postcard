class FindableObject extends ClickableObject
{
    constructor(scene,x,y,key,tranScene,iDNumber)
    {
        super(scene,x,y,key,'This seems important')

        //should Overwrite the clickalbe pointerdown event, except I dont think it does, i think its more like a ,also do this type of situation.
        this.on('pointerdown', () => {
            this.scene.scene.get('uiScene').foundImportantItem(iDNumber)
            this.scene.scene.start(tranScene)
        })
    }
}