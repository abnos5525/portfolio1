import{_ as o}from"./index-D8rmrHkB.js";async function d(t,a=!0){await t.addParticleUpdater("rotate",async r=>{const{RotateUpdater:e}=await o(()=>import("./RotateUpdater-BaVfzdFL.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new e(r)},a)}export{d as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./RotateUpdater-BaVfzdFL.js","./index-D8rmrHkB.js","./index-CHYSXOVf.css","./ValueWithRandom-OFIdQT4I.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
