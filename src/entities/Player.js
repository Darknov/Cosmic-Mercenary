import { Entity } from "./Entity";
import { rotateTo, distance } from "../libraries/utils";

export class Player extends Entity {
  /**
   * Creates player entity
   * @param {Object} config - standard phaser 3 config
   * @param {Phaser.Scene} config.scene - scene that has this object 
   * @param {number} config.x - x coordinate on the scene
   * @param {number} config.y - y coordinate on the scene
   */
  constructor(config) {
    super({ ...config, texture: "player" });
    this.rotateToPointer();

    this.speed = 2500;
    this.body.maxSpeed = 500;
    this.maxPointerDistance = 300;
    this.body.useDamping = true;
    this.body.setDrag(0.97); // gives somewhat natural 'feeling' to the ship *imo*
  }

  update(time, delta) {
    this.moveToPointer();
  }

  rotateToPointer() {
    const camera = this.scene.cameras.main;
    this.scene.input.on('pointermove', (pointer) => {
      rotateTo(this, pointer, {
        x: this.x - camera.scrollX * this.scrollFactorX,
        y: this.y - camera.scrollY * this.scrollFactorY
      }, 90);
    }, this);
  }

  getSpeed(pointer) {
    const camera = this.scene.cameras.main;
    let dist = distance(
      this.x,
      this.y,
      pointer.x + camera.scrollX * this.scrollFactorX,
      pointer.y + camera.scrollY * this.scrollFactorY
    );
    if (dist > this.maxPointerDistance) {
      dist = this.maxPointerDistance;
    }
    let speed = this.speed / this.maxPointerDistance * (dist - 50);
    if (speed <= 0) {
      speed = 0;
    }
    return speed;
  }

  moveToPointer() {
    const camera = this.scene.cameras.main;
    const pointer = this.scene.input.mousePointer;
    this.scene.physics.accelerateToObject(this,
      {
        x: pointer.x + camera.scrollX * this.scrollFactorX,
        y: pointer.y + camera.scrollY * this.scrollFactorY
      }, this.getSpeed(pointer));

  }
}

