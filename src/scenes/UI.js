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
        
        

        //The hud and text
        this.add.image(0,playHeight,'hudImg').setOrigin(0,0)
        this.descriptionText = this.add.text(200,playHeight+10,'',{
            fontFamily:'uiFont',
            fontSize: '30px'
        })

        //UI images for important object the player finds
        this.michaelImportant1 = this.add.image(620,playHeight+40,'testImg').setOrigin(0.5,0.5).setAlpha(0)

        //backarrow stuff
        this.backArrow = this.add.image(50,50,'backArrow').setOrigin(0.5,0.5)
        this.backArrow.setInteractive({
            pixelPerfect: true,
            alphaTolerance: 1  
        })
        //when I click the back arrow, it takes me to the last active scene,
        this.backArrow.on('pointerdown',()=>{
            this.otherScene = this.scene.manager.getScenes(true).find(scene => scene !== this);
           //Checks if type writer effect is still running, and if so kill it >:Dy
            if (this.typewriterEvent) {
            this.typewriterEvent.remove(false);
            this.typewriterEvent = null;
            this.descriptionText.setText('')
    }
            switch(this.otherScene.scene.key)
            {
                case 'playScene':
            this.otherScene.scene.start('menuScene')
            break;
                case 'menuScene':
            this.otherScene.scene.start('playScene')
            break;

            }
        })
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
        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
    case 5:
        break;
    }
    
}

}