import{_ as a}from"./index-00RLVmxa.js";const i=["emoji"];async function r(e,o=!0){const{EmojiDrawer:t}=await a(()=>import("./EmojiDrawer-BUtdN2XC.js"),__vite__mapDeps([0,1,2]),import.meta.url);await e.addShape(i,new t,o)}const n=Object.freeze(Object.defineProperty({__proto__:null,loadEmojiShape:r},Symbol.toStringTag,{value:"Module"}));export{n as i,i as v};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./EmojiDrawer-BUtdN2XC.js","./index-00RLVmxa.js","./index-Sqo7pLw9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}