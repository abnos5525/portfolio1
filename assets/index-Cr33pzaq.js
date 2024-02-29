import{_ as r}from"./index-D8rmrHkB.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-D17rmCb6.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new e},a)}export{o as loadSizeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./SizeUpdater-D17rmCb6.js","./index-D8rmrHkB.js","./index-CHYSXOVf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
