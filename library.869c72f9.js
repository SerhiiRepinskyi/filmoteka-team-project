var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n),n("7rYDH");var r=n("Yxh0b");const l=document.querySelector(".btn_lib").firstElementChild,s=document.querySelector(".btn_lib").lastElementChild,a=document.querySelector(".library-cards__list");function d(e){const t=e.target;t===l?(a.innerHTML="",(0,r.renderWatchedList)(),l.classList.contains("lib--active")||(l.classList.add("lib--active"),s.classList.remove("lib--active"))):t===s&&(a.innerHTML="",s.classList.contains("lib--active")||(l.classList.remove("lib--active"),s.classList.add("lib--active")))}l.addEventListener("click",d),s.addEventListener("click",d),window.addEventListener("load",r.renderWatchedList),n("acGyd"),n("hPewW"),n("gLIqC"),n("fobnT"),n("4O2bx"),n("hvQmF"),n("Yxh0b");
//# sourceMappingURL=library.869c72f9.js.map
