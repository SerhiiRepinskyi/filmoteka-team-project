var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o),o("krGWQ"),o("7rYDH"),o("isA1x"),o("9AkgD"),o("hPewW"),o("kcvyG"),o("gLIqC"),o("fobnT");var n=o("7rYDH");n=o("7rYDH");const r=document.querySelector(".modal-card__render");new(0,n.FilmAPI);async function s(e){const{backdrop_path:t,poster_path:a,original_title:o,overview:n,vote_average:s,vote_count:i,title:l,genres:d,popularity:c}=e,u=`<div class="modal-card__img-wrapper"><img\n  class="modal-card__img"\n  src="https://image.tmdb.org/t/p/w500${a}"\n  alt="film-poster"\n  width="240"\n/> </div>\n<div class="modal-card__information-wrapper"><p class="modal-card__title">${l}</p>\n<ul class="modal-card__film-information-list">\n<div class="modal-card__film-information-items-wrrapper">\n  <li class="modal-card__film-information__items ">Vote / Votes</li>\n  <p class="modal-card__film-information__text"><span class="modal-card__vote--gray">${i}</span>/<span class="modal-card__vote--red">${s}</span></p>\n</div>\n<div class="modal-card__film-information-items-wrrapper">\n<li class="modal-card__film-information__items">\n  Popularity\n</li>\n<p class="modal-card__film-information__text">${c}</p></div>\n<div class="modal-card__film-information-items-wrrapper">\n  <li class="modal-card__film-information__items" >Original Title\n</li>\n<p class="modal-card__film-information__text">${o}</p></div>\n<div class="modal-card__film-information-items-wrrapper">\n<li class="modal-card__film-information__items">\n  Genre\n</li>\n<p class="modal-card__film-information__text">${d.map((e=>e.name))}</p></div>\n</ul>\n<p class="modal-card__subtitle">About</p>\n<p class="modal-card__text">${n}\n</p><div class="modal-card__btn-wrapper">\n<button\nclass="modal-card__watched-btn"\ntype="button"\ndata-card-modal-watched-film\n>\nadd to Watched\n</button>\n<button\nclass="modal-card__queue-btn"\ntype="button"\ndata-card-modal-queue-film\n>\nadd to queue\n</button></div>\n</div>`;return r.innerHTML=u}const i=document.querySelector(".modal-card__backdrop"),l=document.querySelector(".cards__list"),d=document.querySelector("body"),c=(document.querySelector(".modal-card"),document.querySelector(".modal-card__close-btn")),u=new(0,n.FilmAPI);l.addEventListener("click",(async function(e){if(!e.target.closest(".card-item"))return;let t=e.target.closest(".card-item").dataset.id;s(await u.fetchDetails(t)),d.classList.add("no-scroll"),i.classList.remove("hidden")})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(d.classList.remove("no-scroll"),i.classList.add("hidden"))})),c.addEventListener("click",(e=>{d.classList.remove("no-scroll"),i.classList.add("hidden")})),i.addEventListener("click",(e=>{e.target===i&&(i.classList.add("hidden"),d.classList.remove("no-scroll"))})),o("2nhTy");var m=o("bcNH0"),f=o("eyjy7"),g=o("5Zbuc"),p=o("7Y9D8");const v=(0,f.getAuth)(m.firebaseApp);(async()=>{(0,f.onAuthStateChanged)(v,(e=>{e?(console.log(e),console.log("user logged in"),g.refs.openModalHomeBtn.classList.add("log-out"),g.refs.openModalHomeBtn.setAttribute("title","Click to Log Out"),g.refs.openModalHomeBtn.classList.remove("log-in")):(console.log("user logged out"),g.refs.openModalHomeBtn.classList.remove("log-out"),g.refs.openModalHomeBtn.setAttribute("title","Click to Log In"),g.refs.openModalHomeBtn.classList.add("log-in"))}))})();g.refs.registerForm.addEventListener("submit",(async e=>{e.preventDefault();const t=g.refs.registerEmail.value,a=g.refs.registerPassword.value;try{const o=await(0,f.createUserWithEmailAndPassword)(v,t,a);console.log(o.user),g.refs.modal.classList.toggle("auth-modal-is-hidden"),e.target.reset(),p.Notify.success("You are registered. Have fun!")}catch(e){console.log(e.message),"Firebase: Password should be at least 6 characters (auth/weak-password)."===e.message&&p.Notify.warning("Password should be at least 6 characters"),"Firebase: Error (auth/email-already-in-use)."===e.message&&p.Notify.warning("User with this email is already registered"),"Firebase: Error (auth/invalid-email)."===e.message&&p.Notify.warning("Please enter right email"),"Firebase: Error (auth/missing-password)."===e.message&&p.Notify.warning("Please enter password")}}));g.refs.loginForm.addEventListener("submit",(async e=>{e.preventDefault();const t=g.refs.loginEmail.value,a=g.refs.loginPassword.value;try{const o=await(0,f.signInWithEmailAndPassword)(v,t,a);console.log(o.user),g.refs.modal.classList.toggle("auth-modal-is-hidden"),e.target.reset(),p.Notify.success("You are loged in. Welcome back!")}catch(e){console.log(e.message),"Firebase: Error (auth/missing-password)."===e.message&&p.Notify.warning("Please enter password"),"Firebase: Error (auth/invalid-email)."===e.message&&p.Notify.warning("Please enter right email"),"Firebase: Error (auth/user-not-found)."===e.message&&p.Notify.warning("User not found. Please check if you entered right email and password"),"Firebase: Error (auth/wrong-password)."===e.message&&p.Notify.warning("You entered wrong password")}}));g.refs.openModalHomeBtn.addEventListener("click",(async e=>{e.target.classList.contains("log-out")&&(await(0,f.signOut)(v),p.Notify.success("You are loged out. See you soon"))}));const _=()=>{g.refs.loginForm.classList.toggle("login-hidden"),g.refs.registerForm.classList.toggle("register-hidden")};(g=o("5Zbuc")).refs.showLoginBtn.addEventListener("click",_),g.refs.showRegisterBtn.addEventListener("click",_);const y=e=>{e.target.classList.contains("log-in")?g.refs.modal.classList.remove("auth-modal-is-hidden"):e.target.classList.contains("auth-modal-close")&&g.refs.modal.classList.add("auth-modal-is-hidden")};g.refs.openModalHomeBtn.addEventListener("click",y),g.refs.closeModalBtn.addEventListener("click",y),o("hvQmF"),o("Yxh0b");var h={},w=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,E=/^0o[0-7]+$/i,x=parseInt,k="object"==typeof e&&e&&e.Object===Object&&e,N="object"==typeof self&&self&&self.Object===Object&&self,F=k||N||Function("return this")(),T=Object.prototype.toString,P=Math.max,H=Math.min,q=function(){return F.Date.now()};function M(e,t,a){var o,n,r,s,i,l,d=0,c=!1,u=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var a=o,r=n;return o=n=void 0,d=t,s=e.apply(r,a)}function g(e){return d=e,i=setTimeout(v,t),c?f(e):s}function p(e){var a=e-l;return void 0===l||a>=t||a<0||u&&e-d>=r}function v(){var e=q();if(p(e))return _(e);i=setTimeout(v,function(e){var a=t-(e-l);return u?H(a,r-(e-d)):a}(e))}function _(e){return i=void 0,m&&o?f(e):(o=n=void 0,s)}function y(){var e=q(),a=p(e);if(o=arguments,n=this,l=e,a){if(void 0===i)return g(l);if(u)return i=setTimeout(v,t),f(l)}return void 0===i&&(i=setTimeout(v,t)),s}return t=A(t)||0,O(a)&&(c=!!a.leading,r=(u="maxWait"in a)?P(A(a.maxWait)||0,t):r,m="trailing"in a?!!a.trailing:m),y.cancel=function(){void 0!==i&&clearTimeout(i),d=0,o=l=n=i=void 0},y.flush=function(){return void 0===i?s:_(q())},y}function O(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function A(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==T.call(e)}(e))return NaN;if(O(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=O(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(w,"");var a=L.test(e);return a||E.test(e)?x(e.slice(2),a?2:8):b.test(e)?NaN:+e}h=function(e,t,a){var o=!0,n=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return O(a)&&(o="leading"in a?!!a.leading:o,n="trailing"in a?!!a.trailing:n),M(e,t,{leading:o,maxWait:t,trailing:n})},window.addEventListener("scroll",h((function(){console.log("scroll scroll");const e=document.querySelector(".scroll-to-top");document.body.scrollTop>550||document.documentElement.scrollTop>550?e.style.display="flex":e.style.display="none"}),1e3));
//# sourceMappingURL=index.78fdc1e3.js.map
