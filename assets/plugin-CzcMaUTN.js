import{_ as o}from"./index-D8rmrHkB.js";async function u(i,t=!0){const{LinksPlugin:n}=await o(()=>import("./LinksPlugin-Cg0SiH8k.js"),__vite__mapDeps([0,1,2]),import.meta.url),a=new n;await i.addPlugin(a,t)}export{u as loadLinksPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LinksPlugin-Cg0SiH8k.js","./index-D8rmrHkB.js","./index-CHYSXOVf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}