import{_ as i}from"./index-DNd36WWl.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-C8pOatQy.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-C8pOatQy.js","./ValueWithRandom-CwWJYcbU.js","./index-DNd36WWl.js","./index-DGnn_FsK.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}