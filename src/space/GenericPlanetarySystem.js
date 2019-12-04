import { getRandomInt } from "../libraries/utils";

const planetarySystems = new Map();

const getUniqueCode = () => {
  let code = 0;
  while (code === 0 || planetarySystemCodes.has(code)) {
    code = getRandomInt(1000000, 10000000);
  }
  return code;
}

export class GenericPlanetarySystem {
  constructor(name = 'Unknown', spaceObjects = [], ) {
    this.name = name;
    this.spaceObjects = spaceObjects;
    this.code = getUniqueCode();
    planetarySystems.set(this.code, this);
  }
}