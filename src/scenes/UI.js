class UI extends Phaser.Scene
{
    constructor()
    {
        super('uiScene',true)
    }


    create()
    {
        //vars lowkey
        this.add.image(0,playHeight,'hudImg').setOrigin(0,0)
        this.descriptionText = this.add.text(200,playHeight+10,'',{
            fontFamily:'uiFont',
            fontSize: '30px'
        })
        this.backArrow = this.add.image(50,50,'backArrow').setOrigin(0.5,0.5)
        this.backArrow.setInteractive({
            pixelPerfect: true,
            alphaTolerance: 1  
        })
        //when I click the back arrow, it takes me to the last active scene,
        this.backArrow.on('pointerdown',()=>{
            this.otherScene = this.scene.manager.getScenes(true).find(scene => scene !== this);

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
}