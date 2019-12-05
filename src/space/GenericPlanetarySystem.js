import { getRandomInt } from "../libraries/utils";

const planetarySystems = new Map();

/**
 * Gets unique code for every planetary system
 */
const getUniqueCode = () => {
  let code = 0;
  while (code === 0 || planetarySystemCodes.has(code)) {
    code = getRandomInt(1000000, 10000000);
  }
  return code;
}


export class GenericPlanetarySystem {
  /**
   * Create a Planetary System(to be used in near future)
   * @param {String} name - Name that is displayed in the game
   * @param {Array} spaceObjects - array of objects that should be updated and rendered in this planetary system
   */
  constructor(name = 'Unknown', spaceObjects = [], ) {
    this.name = name;
    this.spaceObjects = spaceObjects;
    this.code = getUniqueCode();
    planetarySystems.set(this.code, this);
  }
}