import { Player } from "../entities/Player";
import { addLoadingBar } from "./loadingBar";
import { getRandomInt } from "../libraries/utils"
import { demoSceneAssets } from "./sceneAssets/demoSceneAssets";
import { loadAssets } from "./sceneAssets/loadAssets";

const width = 3000;
const height = 3000;
export class DemoScene extends Phaser.Scene {
  constructor(config) {
    super({ ...config, key: 'DemoScene' });
  }

  preload() {
    addLoadingBar(this);
    loadAssets(this, demoSceneAssets);
  }

  create() {
    this.gameObjects = [];

    setBackground.call(this);

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

// background tests, looks byatiful
function setBackground() {
  this.background = this.add.tileSprite(0, 0, width, height, 'background');
  const nebula = this.add.image(0,0, 'el' + getRandomInt(7,11));
  
  nebula.setDisplaySize(width, height);
  nebula.width = width;
  nebula.height = height;
  for(let i = 0; i < 15; i++) {
    const el = this.add.image(getRandomInt( -width/2, width/2), getRandomInt( -width/2, width/2), 'el' + getRandomInt(1,7))
    el.setAngle(getRandomInt(0,180));
    el.scale = Math.random();
  }
}