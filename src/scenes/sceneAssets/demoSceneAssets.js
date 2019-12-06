import { exhaust } from "./assetPacks/exhaustBlue";
import { planets } from "./assetPacks/planets"
import { ships } from "./assetPacks/ships"
import { backgrounds } from "./assetPacks/backgrounds"

export const demoSceneAssets = [];

demoSceneAssets.push(...exhaust);
demoSceneAssets.push(...planets);
demoSceneAssets.push(...ships);
demoSceneAssets.push(...backgrounds);