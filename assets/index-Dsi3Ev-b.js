import{_ as e}from"./index-00RLVmxa.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-CMZDBUrb.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Slower-CMZDBUrb.js","./ExternalInteractorBase-CIi3zRdK.js","./index-00RLVmxa.js","./index-Sqo7pLw9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
