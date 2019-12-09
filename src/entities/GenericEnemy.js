import { Entity } from "./Entity";
import { Shot } from "./Shot";
import { rotateTo } from "../libraries/utils";
export class GenericEnemy extends Entity {
  /**
   * Creates hostile entity
   * @param {Object} config - standard phaser 3 config
   * @param {Phaser.Scene} config.scene - scene that has this object 
   * @param {number} config.x - x coordinate on the scene
   * @param {number} config.y - y coordinate on the scene
   */
  constructor(config) {
    super(config);
    this.setProperties();
    this.buildContainerComponents();
  }

  setProperties() {
    this.lastTimeShoot = 0;
  }

  buildContainerComponents() {
    this.ship = this.scene.add.sprite(0, 0, 'enemy1');
    this.ship.setScale(0.15);


    this.add([this.ship]);
  }

  update(time, delta) {
    this.lastTimeShoot += delta;
    this.AI();

  }

  AI(time, delta) {
    this.scene.physics.accelerateToObject(this, this.scene.player, 800);
    // rotateTo(this, this.scene.player, {x: this.x, y: this.y});
    this.setAngle(Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.x, this.y, this.scene.player.x, this.scene.player.y) + 90);
    this.body.maxSpeed = 500;
    Phaser.phys
    if(this.lastTimeShoot >= 200) {
      this.lastTimeShoot = 0;
      console.log(this.x + " : " + this.y + " ||| " + this.scene.player.x + " : " + this.scene.player.y);
      const shot = new Shot({ scene: this.scene, x: this.x, y: this.y }, {
        image: 'Shot3_asset',
        speed: 1400,
        angle: Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.x, this.y, this.scene.player.x, this.scene.player.y),
        animationIn: [
          'Shot3_1',
          'Shot3_2',
          'Shot3_3',
          'Shot3_4',
          'Shot3_5',
          'Shot3_6'
        ],
        animationOut: [
          'Shot3_exp1',
          'Shot3_exp2',
          'Shot3_exp3',
          'Shot3_exp4',
          'Shot3_exp5',
          'Shot3_exp6',
          'Shot3_exp7'
        ]
      });
    }
  }
}