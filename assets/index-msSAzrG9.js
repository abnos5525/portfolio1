import{_ as a}from"./index-D8rmrHkB.js";const i=["emoji"];async function r(e,o=!0){const{EmojiDrawer:t}=await a(()=>import("./EmojiDrawer-u2-BiEBZ.js"),__vite__mapDeps([0,1,2]),import.meta.url);await e.addShape(i,new t,o)}const n=Object.freeze(Object.defineProperty({__proto__:null,loadEmojiShape:r},Symbol.toStringTag,{value:"Module"}));export{n as i,i as v};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./EmojiDrawer-u2-BiEBZ.js","./index-D8rmrHkB.js","./index-CHYSXOVf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}