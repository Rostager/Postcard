class ComputerCloseUp extends Phaser.Scene
{
    constructor(){
        super('computerCloseUpScene')
    }

    create()
    {
         //PLAY BGM
        this.bgm = this.sound.add('computerBGM', {
            loop: true,
            volume: 0.30
        });
        this.bgm.play()

        //Add Images and Interactables
         this.sceneBG = this.add.image(width/2,playHeight/2,'michaelComputerBG')
         this.backButton = new BackButton(this,playWidth - 200,  40,'michaelRoomScene')
         this.imgFile = new ClickableObject(this,100,100,'michaelImgFile','A bunch of cool photos')

         //Checks to see if an important Item was found, if so dont spawn that item
         if (!this.scene.manager.getScene('uiScene').itemsFound[2]) {
         this.creationFile = new FindableObject(this,100,200,'michaelCreationFile','fileCloseUpScene',2)
         }

         //Press logic for the img file
         this.imgFile.on('pointerdown',()=>{
            console.log("ADDING IMAGES")
            this.add.image(width/2,playHeight/2,'computerImages')
            this.imgFile.disableInteractive()
         })
            this.backButton.on('pointerdown',()=>{
                this.bgm.stop()
            })

    }
}