import{_ as e}from"./index-ClDaCVJx.js";async function d(r,t=!0){await r.addParticleUpdater("color",async o=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-ygOR0Ydv.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new a(o)},t)}export{d as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ColorUpdater-ygOR0Ydv.js","./index-ClDaCVJx.js","./index-Sqo7pLw9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
