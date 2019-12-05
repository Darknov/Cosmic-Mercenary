import { Player } from "../entities/Player";
import { addLoadingBar } from "./loadingBar";
import { getRandomInt } from "../libraries/utils"

const width = 3000;
const height = 3000;
export class DemoScene extends Phaser.Scene {
  constructor(config) {
    super({ ...config, key: 'DemoScene' });
  }

  preload() {
    addLoadingBar(this);
    this.load.image('background', 'assets/backgrounds/l2_stars-01.png');
    this.load.image('player', 'assets/ships/playerShip1_blue.png');
    this.load.image('el2', 'assets/backgrounds/elements/l3_planet-01.png');
    this.load.image('el3', 'assets/backgrounds/elements/l3_planet02-01.png');
    this.load.image('el4', 'assets/backgrounds/elements/l3_sun-01.png');
    this.load.image('el5', 'assets/backgrounds/elements/l4_planet02-01.png');
    this.load.image('el6', 'assets/backgrounds/elements/l4_satellite01-01.png');
    this.load.image('el1', 'assets/backgrounds/elements/l6_satellite02-01.png');
    this.load.image('el7', 'assets/backgrounds/elements/l1_nebula-01.png');
    
    this.load.image('exhaust1', 'assets/ships/exhaustBlue/Ship3_flight_001.png');
    this.load.image('exhaust2', 'assets/ships/exhaustBlue/Ship3_flight_002.png');
    this.load.image('exhaust3', 'assets/ships/exhaustBlue/Ship3_flight_003.png');
    this.load.image('exhaust4', 'assets/ships/exhaustBlue/Ship3_flight_004.png');
    this.load.image('exhaust5', 'assets/ships/exhaustBlue/Ship3_turbo_001.png');
    this.load.image('exhaust6', 'assets/ships/exhaustBlue/Ship3_turbo_002.png');
    this.load.image('exhaust7', 'assets/ships/exhaustBlue/Ship3_turbo_003.png');
    this.load.image('exhaust8', 'assets/ships/exhaustBlue/Ship3_turbo_004.png');
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
  const nebula = this.add.image(0,0, 'el7');
  
  nebula.setDisplaySize(width, height);
  nebula.width = width;
  nebula.height = height;
  for(let i = 0; i < 15; i++) {
    const el = this.add.image(getRandomInt( -width/2, width/2), getRandomInt( -width/2, width/2), 'el' + getRandomInt(1,7))
    el.setAngle(getRandomInt(0,180));
    el.scale = Math.random();
  }
}