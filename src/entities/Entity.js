export class Entity extends Phaser.GameObjects.Sprite {
  /**
   * Creates entity(object) on the scene
   * @param {Object} config - standard phaser 3 config
   * @param {Phaser.Scene} config.scene - scene that has this object 
   * @param {number} config.x - x coordinate on the scene
   * @param {number} config.y - y coordinate on the scene
   * @param {String} config.texture - name of the texture used for rendering this object
   */
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.gameObjects.push(this);
  }
}