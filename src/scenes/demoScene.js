import { Player } from "../entities/Player";
import { addLoadingBar } from "./loadingBar";

const width = 10000;
const height = 10000;
const PATH_TO_ASSETS = "assets/";
export class DemoScene extends Phaser.Scene {
  constructor(config) {
    super({ ...config, key: 'DemoScene' });
  }

  preload() {
    addLoadingBar(this);
    this.load.image('background', 'assets/backgrounds/blue.png');
    this.load.image('player', 'assets/ships/playerShip1_blue.png');
  }

  create() {
    this.gameObjects = [];

    this.background = this.add.tileSprite(0, 0, width, height, 'background');
    populate.call(this);
    this.cameras.main.setBounds(-width / 2, -height / 2, width, height);
  }

  update(time, delta) {
    for (const gameObject of this.gameObjects) {
      gameObject.update(time, delta);
    }
  }
}

function populate() {
  this.player = new Player({ scene: this, x: 0, y: 0 });
  this.cameras.main.startFollow(this.player);
}
