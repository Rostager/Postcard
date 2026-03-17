class ElevatorRoom extends Phaser.Scene {
    constructor() {
        super("elevatorRoomScene")
    }

    create(){
        //Set the dot to the correct position for this scene
        this.UiScene = this.scene.manager.getScene('uiScene')
        this.UiScene.dot.y = 447
        //PLAY BGM
        this.bgm = this.sound.add('artBGM', {
            loop: true,
            volume: 0.30
        })
        this.bgm.play();

        //Background, Objects, and Clickables
        this.sceneBGTop = this.add.rectangle(480,180,960,360,0xffffff).setOrigin(0.5,0.5)
        this.sceneBGBottom = this.add.rectangle(480,320,960,80,0xF0EEED).setOrigin(0.5,0.5) //Make pure white once done testing
        this.arm = new DoorWay(this, 226, 323, 'robertArm', 'robertArmCloseUpScene', 'robertArm').setOrigin(0.5,0.5).setScale(0.5)
        this.canvas1 = new ClickableObject(this,160,160,'canvasClean', 'An Empty Canvas','brushSFX').setOrigin(0.5,0.5)
        this.canvas2 = new ClickableObject(this,320,160,'canvasClean', 'An Empty Canvas','brushSFX').setOrigin(0.5,0.5)
        this.canvas3 = new ClickableObject(this,640,160,'canvasClean', 'An Empty Canvas','brushSFX').setOrigin(0.5,0.5)
        this.canvas4 = new ClickableObject(this,800,160,'canvasClean', 'An Empty Canvas','brushSFX').setOrigin(0.5,0.5)
        this.robertStanding = new ClickableObject(this,800,212,'robertStanding', 'He Doesn\'t seem to notice \nyou.').setOrigin(0.5,0.5)
    }
} 