import { Entity } from "./Entity";

export class Shot extends Entity {

  constructor(config, shotConfig) {
    super(config)
    this.setProperties({ ...config, ...shotConfig });
    this.buildContainerComponents({ ...shotConfig });
    this.image = shotConfig.image;
    this.isDestroyable = false;
  }

  setProperties({ x, y, angle = 0, speed = 0 }) {
    this.x = x;
    this.y = y;
    this.existedFor = 0;
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
      inFrames.push({ key: image });
      this.scene.anims.create({
        key: `${image}_animationIn`,
        frames: inFrames,
        frameRate: 20,
        repeat: 0
      });
    }

    if (!this.scene.anims.exists(`${image}_animationOut`)) {
      const outFrames = [];
      for (const frame of animationOut) {
        outFrames.push({ key: frame });
      }

      this.scene.anims.create({
        key: `${image}_animationOut`,
        frames: outFrames,
        frameRate: 20,
        repeat: 0
      }).on('complete', (currentAnim, currentFrame, sprite) => {
        sprite.destroy();
      });
    }


    shot.play(`${image}_animationIn`);
    this.add(shot);
  }

  update(time, delta) {
    this.existedFor += delta;
    if (this.existedFor > 3000) {
      this.existedFor = 0;
      this.each(shot => {
        shot.play(`${this.image}_animationOut`);
      });
    }

    if(this.list.length === 0) {
      this.OnDestroy();
    }
  }
}