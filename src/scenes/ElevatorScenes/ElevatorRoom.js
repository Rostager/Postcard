class ElevatorRoom extends Phaser.Scene {
    constructor() {
        super("elevatorRoomScene")
    }

    create(){
        //PLAY BGM
        this.bgm = this.sound.add('artBGM', {
            loop: true,
            volume: 0.30
        });
        this.bgm.play();
        //Background, plain white split in two so the elevator can asthetically come out from the ground
        this.sceneBGTop = this.add.rectangle(480,180,960,360,0xffffff).setOrigin(0.5,0.5)
        this.sceneBGBottom = this.add.rectangle(480,320,960,80,0xfff0ff).setOrigin(0.5,0.5) //Make pure white once done testing
        this.arm = new DoorWay(this, 226, 323, 'robertArm', 'robertArmCloseUpScene', 'robertArm').setOrigin(0.5,0.5)

        this.canvas1 = new ClickableObject(this,160,160,'canvasClean', 'An Empty Canvas').setOrigin(0.5,0.5)
        this.canvas2 = new ClickableObject(this,320,160,'canvasClean', 'An Empty Canvas').setOrigin(0.5,0.5)
        this.canvas3 = new ClickableObject(this,640,160,'canvasClean', 'An Empty Canvas').setOrigin(0.5,0.5)
        this.canvas4 = new ClickableObject(this,800,160,'canvasClean', 'An Empty Canvas').setOrigin(0.5,0.5)
    }

} 