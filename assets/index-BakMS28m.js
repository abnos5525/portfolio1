import{_ as o}from"./index-B_MotzrC.js";class a{constructor(){this.distance=200}load(t){t&&t.distance!==void 0&&(this.distance=t.distance)}}async function c(e,t=!0){await e.addInteractor("externalBounce",async n=>{const{Bouncer:r}=await o(()=>import("./Bouncer-L_Rc09ec.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new r(n)},t)}export{a as Bounce,c as loadExternalBounceInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Bouncer-L_Rc09ec.js","./index-B_MotzrC.js","./index-Sqo7pLw9.css","./Ranges-0fRGj8dt.js","./ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
