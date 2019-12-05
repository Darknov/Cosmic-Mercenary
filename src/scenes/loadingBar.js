/**
 * Adds loading bar for the sceen
 * @param {Phaser.Scene} scene - sceen that we are addding loading bar for 
 */
export function addLoadingBar(scene) {
  const progress = scene.add.graphics();
  scene.load.on('progress', function (value) {
    progress.clear();
    progress.fillStyle(0xffffff, 1);
    progress.fillRect(0, 270, 800 * value, 60);
  });
  scene.load.on('complete', function () {
    progress.destroy();
  });
}