class MichaelRoom extends Phaser.Scene {
    constructor() {
        super("michaelRoomScene")
    }

    create() {
        //Background 
        this.sceneBG = this.add.image(width / 2, playHeight / 2, 'michaelRoomBG')
        //Object examples of making a clickable object and FindableObject
        this.michaelPillow = new ClickableObject(this, 246, 216, 'michaelPillow', "A pile of blue pillows...\n Something feels innoccent \n in the color.")
        
        //PLAY BGM
        this.bgm = this.sound.add('grassBGM', {
            loop: true,
            volume: 0.10
        });
        this.bgm.play();
       

        //Important Items
        if (!this.scene.manager.getScene('uiScene').itemsFound[0]) {
            this.michaelShield = new DoorWay(this, 718, 96, 'michaelShield', 'shieldCloseUpScene')
        }
         if (!this.scene.manager.getScene('uiScene').itemsFound[1]) {
            this.michaelFurnace = new DoorWay(this, -16, -44, 'michaelFurnace','furnaceCloseUpScene')
        }
        else{
             this.michaelFurnace = new ClickableObject(this, -16, -44, 'michaelFurnace','the furnace doesnt burn as \n hot anymore.')
        }
         
           this.michaelComputer = new DoorWay(this, 776, 147, 'michaelComputer', 'computerCloseUpScene')

        if(this.scene.manager.getScene('uiScene').itemsFound[0] && this.scene.manager.getScene('uiScene').itemsFound[1] && this.scene.manager.getScene('uiScene').itemsFound[2])
        {
            this.michaelShelf = new DoorWay(this,388,84,'michaelShelf','towerUnlockedScene','michaelShelfOpen')
            this.topShelf = this.add.image(380,0,'michaelShelf').setOrigin(0).setAlpha(0)
            this.michaelShelf.on('pointerover', () => {
            this.topShelf.setAlpha(1)
            this.topShelf.setScale(this.topShelf.scale + 0.15)
             })
              this.michaelShelf.on('pointerout', () => {
            this.topShelf.setAlpha(0)
            this.topShelf.setScale(this.topShelf.scale - 0.15)
             })

            
        }

             //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            
        });

    }


}