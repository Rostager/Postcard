//Creators: Michael & Robert Stager
//Title: Remix our Memories
//Hours spent on this porject 30+ hours ( legit hard to tell, been working on this since like feb 20)
//Date: 3/16/20206
//All code was made by Robert or Michael stager, with many many references to phaser examples (fr the examples are amazing)
//Explaining the scene structure: We have lots of scenes because it stems from working together in unity,where if 2 people work in the same file/scene it leads to many merge conflicts, so this was a way to avoid that. And this structure worked very well for the game we where making.


let config = {
    type: Phaser.AUTO,
    width: 960, //720
    height: 540, //1280
    backgroundColor: '#460000',
    scale: {
    mode: Phaser.Scale.FIT,          // fit inside available space
    autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Load,MainMenu,Intro,
            Play,MaleBoxCloseUp,TowerUnlocked,
            TowerEntrance,MirrorShardCloseUp,TowerEntranceUnlocked,
            ElevatorRoom,RobertArmCloseUp,ElevatorRoomPainted,
            MichaelRoom, ShieldCloseUp, ComputerCloseUp, FurnaceCloseUp, FileCloseUp,
            FinalLetterRoom, TheFinalLetter, 
            Credits,
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