import { Entity } from "./Entity";
import { rotateTo, distance } from "../libraries/utils";
import { Shot } from "../entities/Shot";

export class Player extends Entity {
  /**
   * Creates player entity
   * @param {Object} config - standard phaser 3 config
   * @param {Phaser.Scene} config.scene - scene that has this object 
   * @param {number} config.x - x coordinate on the scene
   * @param {number} config.y - y coordinate on the scene
   */
  constructor(config) {
    super(config);
    this.buildContainerComponents();
    this.setProperties();
    this.rotateToPointer();
    this.scene.input.on('pointerdown', (pointer) => {
      this.shot(pointer);
    }, this)

    this.droneCircle = new Phaser.Geom.Circle(this.x, this.y, 150);

    this.drones = new Phaser.GameObjects.Container(this.scene, this.x, this.y);
    this.scene.add.existing(this.drones);
    this.scene.physics.add.existing(this.drones);
    this.drones.add(this.scene.physics.add.sprite(150, 150, 'robot').setAngle(135));
    this.drones.add(this.scene.physics.add.sprite(-150, 150, 'robot').setAngle(-135));
    this.drones.add(this.scene.physics.add.sprite(150, -150, 'robot').setAngle(45));
    this.drones.add(this.scene.physics.add.sprite(-150, -150, 'robot').setAngle(-45));
    // Phaser.Actions.PlaceOnCircle(this.drones, this.droneCircle);
  }

  update(time, delta) {
    this.moveToPointer();
    this.updateDrones(time, delta);

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

  buildContainerComponents() {
    this.ship = this.scene.add.sprite(0, 0, 'player');

    this.guns = [];
    this.guns.push(this.scene.physics.add.sprite(-36, 20, 'shot1_asset'));
    this.guns.push(this.scene.physics.add.sprite(40, 20, 'shot1_asset'));
    this.guns[0].setAngle(-90);
    this.guns[1].setAngle(-90);

    this.exhaust = this.scene.add.sprite(-1, 77, 'exhaust1');
    this.exhaust.setScale(0.15);
    this.scene.anims.create({
      key: 'exhaust',
      frames: [
        { key: 'exhaust1' },
        { key: 'exhaust2' },
        { key: 'exhaust3' },
        { key: 'exhaust4' },
        { key: 'exhaust5' },
        { key: 'exhaust6' },
        { key: 'exhaust7' },
        { key: 'exhaust8' },
        { key: 'exhaust9' },
        { key: 'exhaust10' },
      ],
      frameRate: 10,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'turbo',
      frames: [
        { key: 'exhaust5' },
        { key: 'exhaust6' },
        { key: 'exhaust7' },
        { key: 'exhaust8' }
      ],
      frameRate: 10,
      repeat: -1
    });

    this.exhaust.play('exhaust');

    this.add([...this.guns, this.ship, this.exhaust,]);
  }

  setProperties() {
    this.speed = 2500;
    this.body.maxSpeed = 500;
    this.maxPointerDistance = 300;
    this.body.useDamping = true;
    this.body.setDrag(0.97); // gives somewhat natural 'feeling' to the ship *imo*
    this.body.setOffset(-35, -35);
    this.body.setCircle(35);

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

  shot(pointer) {

    for (const gun of this.guns) {
      const shot = new Shot({ scene: this.scene, x: gun.body.center.x, y: gun.body.center.y }, {
        image: 'shot1_asset',
        speed: 1000,
        angle: this.angle - 90,
        animationIn: [
          'shot1_1',
          'shot1_2',
          'shot1_3',
          'shot1_4'
        ]
      });
    }

    // this.drones.iterate((child) => {
    //   console.log(child)
    //   const shot = new Shot({ scene: this.scene, x: child.body.center.x, y: child.body.center.y}, {
    //     image: 'shot1_asset',
    //     speed: 1000,
    //     angle: this.angle - 90,
    //     animationIn: [
    //       'shot1_1',
    //       'shot1_2',
    //       'shot1_3',
    //       'shot1_4'
    //     ]
    //   });
    // });
  }

  updateDrones(time, delta) {
    this.drones.body.setVelocity(this.body.velocity.x, this.body.velocity.y);
    this.drones.setAngle(time/30);
    this.drones.iterate((child) =>{
      // console.log(child.body.center)
    })
  }
}