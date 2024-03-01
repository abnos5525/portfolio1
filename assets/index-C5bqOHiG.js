import{_ as o}from"./index-b6T14Haf.js";async function d(t,a=!0){await t.addParticleUpdater("rotate",async r=>{const{RotateUpdater:e}=await o(()=>import("./RotateUpdater-BEj0bfi6.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new e(r)},a)}export{d as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./RotateUpdater-BEj0bfi6.js","./index-b6T14Haf.js","./index-CHYSXOVf.css","./ValueWithRandom-B5OkWJaX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
