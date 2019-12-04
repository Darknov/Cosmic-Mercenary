import 'phaser';

import { SimpleScene } from './scenes/simple-scene';

const gameConfig = {
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  scene: SimpleScene
};

const game = new Phaser.Game(gameConfig);

// prevent opening context menu with right click
game.input.mouse.disableContextMenu();