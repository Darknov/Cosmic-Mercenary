import { Entity } from "./Entity";

export class Shot extends Entity {

  constructor(config, shotConfig) {
    super(config)
    this.setProperties({ ...config, ...shotConfig });
    this.buildContainerComponents({ ...shotConfig });
  }

  setProperties({ x, y, angle = 0, speed = 0 }) {
    this.x = x;
    this.y = y;
    this.setAngle(angle);
    this.scene.physics.velocityFromRotation(
      Phaser.Math.DegToRad(angle),
      speed,
      this.body.velocity
    );
  }

  buildContainerComponents({ image, animationIn = [], animationOut = [] }) {
    const shot = this.scene.add.sprite(0, 0);
    if (!this.scene.anims.exists(`${image}_animationIn`)) {
      const inFrames = [];
      for (const frame of animationIn) {
        inFrames.push({ key: frame });
      }
      inFrames.push({ key: image});
      this.scene.anims.create({
        key: `${image}_animationIn`,
        frames: inFrames,
        frameRate: 30,
        repeat: 0
      });
    }

    if (!this.scene.anims.exists(`${image}animationOut`)) {
      const outFrames = [];
      for (const frame of animationOut) {
        outFrames.push({ key: frame });
      }

      this.scene.anims.create({
        key: `${image}_animationIn`,
        frames: outFrames,
        frameRate: 10,
        repeat: 0
      });
    }


    shot.play(`${image}_animationIn`);
    this.add(shot);
  }


}