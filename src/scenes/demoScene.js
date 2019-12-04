import { Player } from "../entities/Player";
 

const width = 3000;
const height = 3000;

const gameObjects = [];

export class DemoScene extends Phaser.Scene {
  preload() {
    this.load.image('background', '../../assets/backgrounds/blue.png');
    this.load.image('player', '../../assets/ships/playerShip1_blue.png');
    this.physics.accelerateToObject
  }

  create() {
    this.background = this.add.tileSprite(0, 0, width, height, 'background');
    this.player = new Player({ scene: this, x: 0, y: 0 });
    gameObjects.push(this.player);

    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(-width/2, -height/2, width, height);
  }

  update() {
    for (const gameObject of gameObjects) {
      gameObject.update();
    }
  }
}

