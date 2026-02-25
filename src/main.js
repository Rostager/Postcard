//Creators: Michael & Robert Stager
//Date:


let config = {
    type: Phaser.AUTO,
    width: 720, //720
    height: 360, //1280
    backgroundColor: '#ff0000',
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
    scene: [Menu,Play]
}
let game = new Phaser.Game(config); 
const {width,height} = game.config
