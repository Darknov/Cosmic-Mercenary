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
    this.gameObjects = this.add.group({
      runChildUpdate: true
    });
    this.physics.world.setBounds(-width / 2, -height / 2, width, height);
    this.cameras.main.setBounds(-width / 2, -height / 2, width, height);

    setBackground(this);
    populate(this);
    
  }

  update(time, delta) {
    
  }
}

const populate = (scene) => {
  scene.player = new Player({ scene: scene, x: 0, y: 0});
  scene.cameras.main.startFollow(scene.player);
}

// background tests, looks byatiful
const setBackground = (scene) => {
  scene.background = scene.add.tileSprite(0, 0, width, height, 'background');
  const nebula = scene.add.image(0,0, 'el' + getRandomInt(7,11));
  
  nebula.setDisplaySize(width, height);
  nebula.width = width;
  nebula.height = height;
  for(let i = 0; i < 15; i++) {
    const el = scene.add.image(getRandomInt( -width/2, width/2), getRandomInt( -width/2, width/2), 'el' + getRandomInt(1,7))
    el.setAngle(getRandomInt(0,180));
    el.scale = Math.random();
  }
}