import{_ as o}from"./index-ClDaCVJx.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async r=>{const{OutOfCanvasUpdater:e}=await o(()=>import("./OutOfCanvasUpdater-DGQN7-Vq.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new e(r)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./OutOfCanvasUpdater-DGQN7-Vq.js","./index-ClDaCVJx.js","./index-Sqo7pLw9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
