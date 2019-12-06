/**
 * Loads assets for given scene from given array of asset names and paths
 * @param {Phaser.Scene`} scene - A scene that we are loading assets for 
 * @param {Array} sceneAssets - Array of asset names and paths to load
 */
export const loadAssets = (scene, sceneAssets = []) => {
  for (const asset of sceneAssets) {
    scene.load.image(asset[0], asset[1]);
  }
}