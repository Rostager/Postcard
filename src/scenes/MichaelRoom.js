class MichaelRoom extends Phaser.Scene
{
    constructor()
    {
        super("michaelRoomScene")
    }

    create()
    {
        //Background 
       this.sceneBG = this.add.image(width/2,playHeight/2,'michaelRoomBG')
        //Object examples of making a clickable object and FindableObject
        this.michaelPillow = new ClickableObject(this,246,216,'michaelPillow',"A pile of blue pillows...\n Something feels innoccent \n in the color.")
        this.michaelComputer = new ClickableObject(this,776,147,'michaelComputer',"A pile of blue pillows...\n Something feels innoccent \n in the color.")
        this.michaelFurnace = new ClickableObject(this,-16,-44,'michaelFurnace',"A pile of blue pillows...\n Something feels innoccent \n in the color.")
        this.michaelShield = new FindableObject(this,718,96,'michaelShield','stairWellScene',0)
       
    }


}