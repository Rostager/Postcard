class MirrorShardCloseUp extends Phaser.Scene
{
    constructor()
    {
        super("mirrorShardCloseUpScene")
    }

    create(){
        //add black bg so there isn't red clipping when the portal bg is rotating
        this.add.rectangle(0,0,width,playHeight,0x000000).setOrigin(0,0)
        this.sceneBG = this.add.image(width/2,playHeight/2,'portal').setOrigin(0.5,0.5)
        this.mirrorShard = new FindableObject(this,225,180,'mirrorShard','towerEntranceUnlockedScene',4).setOrigin(0.5,0.5)
        // this.shard = new FindableObject(this,225,180,'mailBox','towerUnlockedScene',3).play('bottleAnim').setOrigin(0.5,0.5)
        
        //background rotate slowly
        this.tweens.add({
            targets: this.sceneBG,
            angle: 360,
            duration: 30000,
            repeat: -1
        })
    }
}