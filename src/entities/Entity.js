export class Entity extends Phaser.GameObjects.Container {
  /**
   * Creates entity(object) on the scene
   * @param {Object} config - standard phaser 3 config
   * @param {Phaser.Scene} config.scene - scene that has this object 
   * @param {number} config.x - x coordinate on the scene
   * @param {number} config.y - y coordinate on the scene
   * @param {Array} config.children - name of the texture used for rendering this object
   */
  constructor(config) {
    super(config.scene, config.x, config.y, []);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.gameObjects.add(this);
  }
}