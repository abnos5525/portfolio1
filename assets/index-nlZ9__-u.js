import{_ as o}from"./index-B_MotzrC.js";async function d(t,a=!0){await t.addParticleUpdater("rotate",async r=>{const{RotateUpdater:e}=await o(()=>import("./RotateUpdater-DBb-Gipi.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new e(r)},a)}export{d as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./RotateUpdater-DBb-Gipi.js","./index-B_MotzrC.js","./index-Sqo7pLw9.css","./ValueWithRandom-DmsRIap7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
