class MichaelRoom extends Phaser.Scene {
    constructor() {
        super("michaelRoomScene")
    }

    create() {
        //Background 
        this.sceneBG = this.add.image(width / 2, playHeight / 2, 'michaelRoomBG')
        //Object examples of making a clickable object and FindableObject
        this.michaelPillow = new ClickableObject(this, 246, 216, 'michaelPillow', "A pile of blue pillows...\n Something feels innoccent \n in the color.")
        this.michaelComputer = new DoorWay(this, 776, 147, 'michaelComputer', 'computerCloseUpScene')
       

        //Important Items
        if (!this.scene.manager.getScene('uiScene').itemsFound[0]) {
            this.michaelShield = new FindableObject(this, 718, 96, 'michaelShield', 'shieldCloseUpScene', 0)
        }
         if (!this.scene.manager.getScene('uiScene').itemsFound[1]) {
            this.michaelFurnace = new FindableObject(this, -16, -44, 'michaelFurnace','furnaceCloseUpScene',1)
        }
        else{
             this.michaelFurnace = new ClickableObject(this, -16, -44, 'michaelFurnace','the furnace doesnt burn as \n hot anymore.')
        }


    }


}