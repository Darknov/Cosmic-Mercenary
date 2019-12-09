import 'phaser';

import { DemoScene } from './scenes/demoScene';

const gameConfig = {
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  scene: DemoScene,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  }
};

const game = new Phaser.Game(gameConfig);

// prevent opening context menu with right click
game.input.mouse.disableContextMenu();