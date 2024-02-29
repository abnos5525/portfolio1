import{_ as i}from"./index-PAf9vyBZ.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-HAsGxABQ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-HAsGxABQ.js","./ValueWithRandom-DFATHgus.js","./index-PAf9vyBZ.js","./index-DGnn_FsK.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
