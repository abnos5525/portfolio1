import{_ as s}from"./index-ClDaCVJx.js";class o{constructor(){this.opacity=.5}load(i){i&&i.opacity!==void 0&&(this.opacity=i.opacity)}}class c{constructor(){this.distance=80,this.links=new o,this.radius=60}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links),i.radius!==void 0&&(this.radius=i.radius))}}async function a(n,i=!0){await n.addInteractor("externalConnect",async t=>{const{Connector:e}=await s(()=>import("./Connector-DNP143i3.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e(t)},i)}export{c as Connect,o as ConnectLinks,a as loadExternalConnectInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Connector-DNP143i3.js","./CanvasUtils-BUPJHUba.js","./index-ClDaCVJx.js","./index-Sqo7pLw9.css","./ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
