import { exhaust } from "./assetPacks/exhaust1";
import { backgroundElements } from "./assetPacks/backgroundElements"
import { ships } from "./assetPacks/ships"
import { backgrounds } from "./assetPacks/backgrounds"
import { shots } from "./assetPacks/shots";

export const demoSceneAssets = [];

demoSceneAssets.push(...exhaust);
demoSceneAssets.push(...backgroundElements);
demoSceneAssets.push(...ships);
demoSceneAssets.push(...backgrounds);
demoSceneAssets.push(...shots);