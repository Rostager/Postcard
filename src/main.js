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
            TowerEntrance,MirrorShardCloseUp,TowerEntranceUnlocked,
            ElevatorRoom,RobertArmCloseUp,ElevatorRoomPainted,
            MichaelRoom, ShieldCloseUp, ComputerCloseUp, FurnaceCloseUp, FileCloseUp,
            FinalLetterRoom, TheFinalLetter, 
            RobertRoom,
            UI  ]
}
let game = new Phaser.Game(config); 
const {width,height} = game.config
const playHeight = height * 2/3
const playWidth = width //might not need this









/* TO DO
Complete Empty Room, Highlight creation each canvas switches between 4 images, pic ones that mean something to us, either thumbnails or random art
Item should be my arm holding various art supplies, you need this before you can click the canvases to switch art
Once all canvases are a coesive picture a door way opens to the next room

*/