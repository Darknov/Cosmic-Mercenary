/**
 * Returns positive number
 * @param {number} number
 */
export function abs(number) {
  return number > 0 ? number : -number;
}

/**
 * Returns an integer between <min, max)
 * @param {number} min - minimal number to be randomly selected. Inclusive.
 * @param {number} max - maximal number to be randomly selected. Exclusive.
 */
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/**
 * Rotates given entity to the given position
 * @param {Object} entity - Entity that should be rotated
 * @param {Object} positionTo - point to which Entity should be rotated
 * @param {number} positionTo.x - x coordinate
 * @param {number} positionTo.y - y coordinate
 * @param {Object} position - position of the entity in case we want to rotate from position different than the entity
 * @param {number} position.x - x coordinate of the entity
 * @param {number} position.y - y coordinate of the entity
 * @param {number} offsetAngle - Offset angle in case image is in different position than expected
 */
export function rotateTo(entity, positionTo, position = { x: entity.x, y: entity.y }, offsetAngle) {
  const angle = Phaser.Math.RAD_TO_DEG *
    Phaser.Math.Angle.Between(position.x, position.y, positionTo.x, positionTo.y);

  entity.setAngle(angle + offsetAngle);
}

/**
 * Returns distance between points
 * @param {number} x1 - x coordinate of point 1
 * @param {number} y1 - y coordinate of point 1
 * @param {number} x2 - x coordinate of point 2
 * @param {number} y2 - y coordinate of point 2
 */
export function distance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;

  return Math.sqrt(dx * dx + dy * dy);
}