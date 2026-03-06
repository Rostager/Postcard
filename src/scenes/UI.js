//TODO: MAKE A DEBUG THAT SHOWS THE POINTERS LOCATION, CAN HELP WITH PLACING ITEMS
class UI extends Phaser.Scene
{
    constructor()
    {
        super('uiScene',true)
        //maybe its best to declare vars like this in the constructor?
         this.typewriterEvent = null;
         this.itemsFound = [false,false,false,false,false,false]
    }


    create()
    {
        //hide cursor
         this.input.setDefaultCursor('none')

        //The hud and text
        this.add.image(0,playHeight,'hudImg').setOrigin(0,0)
        this.descriptionText = this.add.text(200,playHeight+10,'',{
            fontFamily:'uiFont',
            fontSize: '30px'
        })

        //UI images for important object the player finds
        this.michaelImportant1 = this.add.image(620,playHeight+40,'michaelShield').setOrigin(0.5,0.5).setAlpha(0)

    //     //backarrow stuff NOT SURE WE WANT IT ANYMORE
    //     this.backArrow = this.add.image(50,50,'backArrow').setOrigin(0.5,0.5)
    //     this.backArrow.setInteractive({
    //         pixelPerfect: true,
    //         alphaTolerance: 1  
    //     })
    //     //when I click the back arrow, it takes me to the last active scene,
    //     this.backArrow.on('pointerdown',()=>{
    //         this.otherScene = this.scene.manager.getScenes(true).find(scene => scene !== this);
    //        //Checks if type writer effect is still running, and if so kill it >:Dy
    //         if (this.typewriterEvent) {
    //         this.typewriterEvent.remove(false);
    //         this.typewriterEvent = null;
    //         this.descriptionText.setText('')
    // }
    //     //Switch statement for the backarrow, works with a switch statement to check the scene its in then passes the scene it wants to go to.
    //         switch(this.otherScene.scene.key)
    //         {
    //             case 'playScene':
    //        // this.otherScene.scene.start('menuScene')
    //         break;
    //             case 'menuScene':
    //         this.otherScene.scene.start('playScene')
    //         break;
    //         case "towerDoorScene":
    //             this.otherScene.scene.start('playScene')

    //         }
        //})

        //Create the cursor image, NEED TO BE AT THE BOTTOM SO IT HAS THE HIGHEST LAYER ORDERING
        this.cursorImage = this.add.image(0,0,'pointerDefault').setOrigin(0,0)

        this.input.on('pointerdown',()=>{
            this.cursorImage.setTexture('pointerHold')
        })
        this.input.on('pointerup',()=>{
            this.cursorImage.setTexture('pointerDefault')
        })
    }

    update()
    {
        this.cursorImage.setX(this.input.activePointer.x)
        this.cursorImage.setY(this.input.activePointer.y)
    }

    //Took from my rocket-patrol mod and modifided a bit so it doesnt break when a player spams an object, I knew this would come in handy again!!!! Maybe we finally make it (text,location) but idk.
   typewriterEffect(fullText) {
    // kill the old typing event if one is still running
    if (this.typewriterEvent) {
        this.typewriterEvent.remove(false);
        this.typewriterEvent = null;
    }

    let index = 0;
    const speed = 50;

    this.descriptionText.setText('');

    this.typewriterEvent = this.time.addEvent({
        delay: speed,
        repeat: fullText.length - 1,
        callback: () => {
            this.descriptionText.setText(this.descriptionText.text + fullText[index]);
            index++;

            // cleanup when finished
            if (index >= fullText.length) {
                this.typewriterEvent = null;
            }
        }
    });
}
 foundImportantItem(item)
{
    switch(item){
    case 0:
    this.michaelImportant1.setAlpha(1)
    this.itemsFound[0] = true
        break;
    case 1:
        this.michaelImportant1.setAlpha(1)
    this.itemsFound[1] = true
        break;
    case 2:

    this.itemsFound[2] = true
        break;
    case 3:

    this.itemsFound[3] = true
        break;
    case 4:

    this.itemsFound[4] = true
        break;
    case 5:

    this.itemsFound[5] = true
        break;
    }
    
}

}