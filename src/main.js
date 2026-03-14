//Creators: Michael & Robert Stager
//Date:


let config = {
    type: Phaser.AUTO,
    width: 960, //720
    height: 540, //1280
    backgroundColor: '#ff0000',
    scale: {
    mode: Phaser.Scale.FIT,          // fit inside available space
    autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Load,Intro,
            Play,MaleBoxCloseUp,TowerUnlocked,TowerDoor,StairWell,
            TowerEntrance,MirrorShardCloseUp,
            MichaelRoom, ShieldCloseUp, ComputerCloseUp, FurnaceCloseUp, FileCloseUp,
            FinalLetterRoom, TheFinalLetter, 
            RobertRoom,
            UI  ]
}
let game = new Phaser.Game(config); 
const {width,height} = game.config
const playHeight = height * 2/3
const playWidth = width //might not need this
