if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const u=e=>r(e,o),t={module:{uri:o},exports:l,require:u};s[o]=Promise.all(i.map((e=>t[e]||u(e)))).then((e=>(n(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"job-in-your-city"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.a2307e58.css",revision:null},{url:"/css/app.11a00112.css",revision:null},{url:"/css/chunk-vendors.560e54e5.css",revision:null},{url:"/img/hero-bg.5bef6ffd.jpg",revision:null},{url:"/index.html",revision:"321a61d173fe02cafd79e14e6948efaa"},{url:"/js/about.da48ec4e.js",revision:null},{url:"/js/app.66db00a8.js",revision:null},{url:"/js/chunk-vendors.4f1a9b62.js",revision:null},{url:"/manifest.json",revision:"f26cb515f5291a68c929756f134e85eb"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
