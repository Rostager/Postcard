class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainMenuScene')
    }

    create() {
        //PLAY BGM
        this.bgm = this.sound.add('artBGM', {
            loop: true,
            volume: 0.10
        });
        this.bgm.play();
        this.backgroundImage= this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'menuPortal').setOrigin(0.5, 0.5)

        //make portal rotate
       // this.add.tweens({

       // })
       this.scene.start('introScene')
        this.playButton = this.add.image(width/2,height/2,'playButton').setOrigin(0.5).setInteractive()
        this.creditsButton = this.add.image(width/2,height/2 + 100,'creditsButton').setOrigin(0.5).setInteractive()
        this.title = this.add.image(width/2,100,'title').setOrigin(0.5)
        //PLAY BUTTON LOGIC
        this.playButton.on('pointerdown',()=>{
            this.scene.start('introScene')
        })
        this.playButton.on('pointerover',()=>{
             this.playButton.setScale(this.playButton.scale + 0.2)
        })
        this.playButton.on('pointerout',()=>{
            this.playButton.setScale(this.playButton.scale - 0.2)
        })

         //credits BUTTON LOGIC
        this.creditsButton.on('pointerdown',()=>{
            this.scene.start('creditsScene')
        })
        this.creditsButton.on('pointerover',()=>{
             this.creditsButton.setScale(this.creditsButton.scale + 0.2)
        })
        this.creditsButton.on('pointerout',()=>{
            this.creditsButton.setScale(this.creditsButton.scale - 0.2)
        })

        //USE THIS TO KILL BGM AND OTHER AUDIO
             this.events.once('shutdown', () => {
            
            this.bgm.stop();
            
        });

        //Tweens
        this.tweens.add({
        targets: this.backgroundImage,
        angle: 360,
        duration: 100000,
        repeat: -1,
        ease: 'Linear'
});
        //Taken From my endless runner
        this.tweens.add({
             targets: [this.title],
             angle: { from: -1, to: 1 }, // keep small for vibration
             duration: 1200,               // lower = faster vibration
             yoyo: true,
            repeat: -1,                 
            ease: 'Linear'
       
    })


    }
}