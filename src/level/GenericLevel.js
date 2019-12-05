class GenericLevel {
  /**
   * Creates level on which player can fight/exchange/harvest/etc. to be used in near future
   * @param {number} width 
   * @param {number} height - height of the level
   * @param {String} texture - texture to be used on this level
   * @param {String} type - type of level: generic/hostile/friendly/etc. 
   */
  constructor(width, height, texture, type = 'generic') {
    this.width = width;
    this.height = height;
    this.texture = texture;
    this.type = type;
  }
}