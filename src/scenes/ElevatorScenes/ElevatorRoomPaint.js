class ElevatorRoomPainted extends Phaser.Scene {
    constructor() {
        super("elevatorRoomPaintedScene")
    }

    create(){
        this.canvas1Clicks = 0
        this.canvas2Clicks = 0
        this.canvas3Clicks = 0
        this.canvas4Clicks = 0
        this.elevatorDoorOpen = false
        //Background, plain white split in two so the elevator can asthetically come out from the ground
        this.sceneBGTop = this.add.rectangle(480,180,960,360,0xffffff).setOrigin(0.5,0.5)
        this.elevatorDoor = new DoorWay(this, 480, 1000, 'elevatorClosed', 'michaelRoomScene', 'elevatorOpen').setOrigin(0.5,0.5)
        this.sceneBGBottom = this.add.rectangle(480,320,960,80,0xffffff).setOrigin(0.5,0.5) 

        this.canvas1 = new ClickableObject(this,160,160,'canvas1', 'An Empty Canvas').setOrigin(0.5,0.5).setFrame(0)
        this.gear1 = this.add.image(160,1000,'gear4').setOrigin(0.5,0.5).setScale(0.5)

        this.canvas2 = new ClickableObject(this,320,160,'canvas2', 'An Empty Canvas').setOrigin(0.5,0.5).setFrame(0)
        this.gear2 = this.add.image(320,1000,'gear1').setOrigin(0.5,0.5).setScale(0.5)

        this.canvas3 = new ClickableObject(this,640,160,'canvas3', 'An Empty Canvas').setOrigin(0.5,0.5).setFrame(0)
        this.gear3 = this.add.image(640,1000,'gear2').setOrigin(0.5,0.5).setScale(0.5)

        this.canvas4 = new ClickableObject(this,800,160,'canvas4', 'An Empty Canvas').setOrigin(0.5,0.5).setFrame(0)
        this.gear4 = this.add.image(800,1000,'gear3').setOrigin(0.5,0.5).setScale(0.5)

        this.robertSitting = this.add.sprite(900,250,'robertTalking').setOrigin(0.5,0.5).play('robertTalkAnim')

        //Logic for clicking the canvases and cycling through images until gear
        this.canvas1.on('pointerdown', () => {
            if (this.canvas1Clicks < 3) {
                switch (this.canvas1Clicks) {
                    case 0:
                        //You must write what the next painting will be of in this description
                        this.canvas1.changeDescription('Test.')
                        this.canvas1.setFrame(1)
                        break
                    case 1:
                        this.canvas1.setFrame(2)
                        break
                    case 2:
                        this.canvas1.setFrame(0)
                        this.gear1.y = 160
                        break
                }
                this.canvas1Clicks++
            }
        })

         this.canvas2.on('pointerdown', () => {
            if (this.canvas2Clicks < 3) {
                switch (this.canvas2Clicks) {
                    case 0:
                        //You must write what the next painting will be of in this description
                        this.canvas2.changeDescription('Test.')
                        this.canvas2.setFrame(1)
                        break
                    case 1:
                        this.canvas2.setFrame(2)
                        break
                    case 2:
                        this.canvas2.setFrame(0)
                        this.gear2.y = 160
                        break
                }
                this.canvas2Clicks++
            }
        })

         this.canvas3.on('pointerdown', () => {
            if (this.canvas3Clicks < 3) {
                switch (this.canvas3Clicks) {
                    case 0:
                        //You must write what the next painting will be of in this description
                        this.canvas3.changeDescription('Test.')
                        this.canvas3.setFrame(1)
                        break
                    case 1:
                        this.canvas3.setFrame(2)
                        break
                    case 2:
                        this.canvas3.setFrame(0)
                        this.gear3.y = 160
                        break
                }
                this.canvas3Clicks++
            }
        })

         this.canvas4.on('pointerdown', () => {
            if (this.canvas4Clicks < 3) {
                switch (this.canvas4Clicks) {
                    case 0:
                        //You must write what the next painting will be of in this description
                        this.canvas4.changeDescription('Test.')
                        this.canvas4.setFrame(1)
                        break
                    case 1:
                        this.canvas4.setFrame(2)
                        break
                    case 2:
                        this.canvas4.setFrame(0)
                        this.gear4.y = 160
                        break
                }
                this.canvas4Clicks++
            }
        })
    }

    update(time, delta){
        if(this.canvas1Clicks == 3 && this.canvas2Clicks == 3 && this.canvas3Clicks == 3 && this.canvas4Clicks == 3){
            //Make the gears rotate once all the paintings are done
            if(this.elevatorDoorOpen == false){
                this.elevatorDoorOpen = true;
                this.elevatorDoor.y = 400
            }
            this.tweens.add({
                targets: [this.gear1, this.gear2],
                angle: 360,
                duration: 3000,
                ease: 'Linear',
                repeat: -1
            })

            this.tweens.add({
                targets: [this.gear3, this.gear4],
                angle: -360,
                duration: 3000,
                ease: 'Linear',
                repeat: -1
            })

            this.tweens.add({
                targets: this.elevatorDoor,
                y: 150,
                duration: 3000,
                ease: 'Linear',
            })

            this.tweens.add({
                targets: this.robertSitting,
                alpha:0,
                duration: 2000,
                ease: 'Linear',
            })
        }
    }
} 