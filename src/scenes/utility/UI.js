//TODO: MAKE A DEBUG THAT SHOWS THE POINTERS LOCATION, CAN HELP WITH PLACING ITEMS
class UI extends Phaser.Scene
{
    constructor()
    {
        super('uiScene',true)
        //Vars to hold typewritter Event and itemFound states
         this.typewriterEvent = null;
         this.itemsFound = [false,false,false,false,false,false]
    }


    create()
    {
        //hide cursor
         this.input.setDefaultCursor('none')

        //The hud and text
        this.add.image(0,playHeight,'hudImg').setOrigin(0,0)
        this.descriptionText = this.add.text(200,playHeight+15,'',{
            fontFamily:'uiFont',
            fontSize: '30px',
            color:'#09ff00',
            stroke: '#000000',
            strokeThickness: 5
        })

        //UI images for important object the player finds
        this.michaelImportant1 = this.add.image(620,playHeight+ 120,'michaelShield').setOrigin(0.5,0.5).setTintFill(0x000000)
        this.michaelImportant2 = this.add.image(760,playHeight+ 120,'michaelArm').setOrigin(0.5,0.5).setTintFill(0x000000).setScale(.25).setRotation(-225)
        this.michaelImportant3 = this.add.image(890,playHeight+ 130,'michaelCreationFile').setOrigin(0.5,0.5).setTintFill(0x000000)
        this.robertImportant1 = this.add.sprite(620,playHeight+ 40,'bottleSheet').play('bottleAnim').setOrigin(0.5,0.5).setTintFill(0x000000).setScale(.20).setAngle(50)
        this.robertImportant2 = this.add.image(760,playHeight+ 40,'mirrorShard').setOrigin(0.5,0.5).setTintFill(0x000000).setScale(.20).setAngle(0)
        this.robertImportant3 = this.add.image(890,playHeight+ 40,'robertArm').setOrigin(0.5,0.5).setTintFill(0x000000).setScale(.50).setAngle(0)

        this.dot = this.add.image(97, 520, 'dot').setOrigin(0.5, 0.5)
   
        //Create the cursor image, NEED TO BE AT THE BOTTOM SO IT HAS THE HIGHEST LAYER ORDERING
        this.cursorImage = this.add.image(0,0,'pointerDefault').setOrigin(0,0)

        this.input.on('pointerdown',()=>{
            this.cursorImage.setTexture('pointerHold')
            console.log("X:" + this.input.activePointer.x) 
            console.log("Y:" + this.input.activePointer.y)
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
    const speed = 10;
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

    //Called from findable objects to mark if an important object was found.
    foundImportantItem(item)
    {
        switch(item){
        case 0:
        this.michaelImportant1.clearTint()
        this.itemsFound[0] = true
            break;
        case 1:
            this.michaelImportant2.clearTint()
            this.itemsFound[1] = true
            break;
        case 2:
            this.michaelImportant3.clearTint()
            this.itemsFound[2] = true
            break;
        case 3:
            this.robertImportant1.clearTint()
            this.itemsFound[3] = true
            break;
        case 4:
            this.robertImportant2.clearTint()
            this.itemsFound[4] = true
            break;
        case 5:
            this.robertImportant3.clearTint()
            this.itemsFound[5] = true
            break;
        }
    }
}