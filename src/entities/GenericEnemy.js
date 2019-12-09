import { Entity } from "./Entity";

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

  }

  buildContainerComponents() {
    this.ship = this.scene.add.sprite(0, 0, 'enemy1');
    this.ship.setScale(0.15);


    this.add([this.ship]);
  }
}