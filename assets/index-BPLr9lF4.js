import{_ as a}from"./index-GD4wUBJI.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async r=>{const{Collider:i}=await a(()=>import("./Collider-Cqkv7cFB.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new i(r)},o)}export{n as loadParticlesCollisionsInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Collider-Cqkv7cFB.js","./index-GD4wUBJI.js","./index-Sqo7pLw9.css","./ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
