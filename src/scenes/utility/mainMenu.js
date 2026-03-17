class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainMenu')
    }

    create() {
        this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'menuPortal').setOrigin(0.5, 0.5)

        //make portal rotate
        this.add.tweens({

        })
    }
}