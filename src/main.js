//Creators: Michael & Robert Stager
//Date:


let config = {
    type: Phaser.AUTO,
    width: 1280, //720
    height: 720, //1280
    backgroundColor: '#ffffff',
    scale: {
    mode: Phaser.Scale.FIT,          // fit inside available space
    autoCenter: Phaser.Scale.CENTER_BOTH
    },
     physics: {
        default: 'arcade',
        arcade:{
        debug: false
        },
    },
    scene: [Menu]
}
let game = new Phaser.Game(config); 
const {width,height} = game.config
