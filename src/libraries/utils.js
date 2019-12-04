export function abs(number) {
  return number > 0 ? number : -number;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export function rotateTo(entity, positionTo, position = { x: entity.x, y: entity.y }, offsetAngle) {
  const angle = Phaser.Math.RAD_TO_DEG *
    Phaser.Math.Angle.Between(position.x, position.y, positionTo.x, positionTo.y);

  entity.setAngle(angle + offsetAngle);
}

export function distance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;

  return Math.sqrt(dx * dx + dy * dy);
}