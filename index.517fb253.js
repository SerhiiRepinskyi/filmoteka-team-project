var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("7rYDH"),o("acGyd");var a=o("kcvyG"),s=o("eyjy7"),r=o("bcNH0");o("Yxh0b");const i=document.querySelector(".lib__btn");window.addEventListener("load",a.default),window.addEventListener("load",(async function(){const e=(0,s.getAuth)(r.firebaseApp);(async()=>{(0,s.onAuthStateChanged)(e,(e=>{e?i.classList.remove("hidden"):i.classList.add("hidden")}))})()})),o("hPewW"),o("kcvyG"),o("gLIqC"),o("fobnT");var l=o("7rYDH");l=o("7rYDH");const d=document.querySelector(".modal-card__render");new(0,l.FilmAPI);async function c(e){console.log(e);const{backdrop_path:t,poster_path:n,original_title:o,overview:a,vote_average:s,vote_count:r,title:i,genres:l,popularity:c}=e,u=`<div class="modal-card__img-wrapper"><img\n  class="modal-card__img"\n  src="https://image.tmdb.org/t/p/w500${n}"\n  alt="film-poster"\n  width="240"\n/> </div>\n<div class="modal-card__information-wrapper"><p class="modal-card__title">${i}</p>\n<ul class="modal-card__film-information-list">\n<div class="modal-card__film-information-items-wrrapper">\n  <li class="modal-card__film-information__items ">Vote / Votes</li>\n  <p class="modal-card__film-information__text"><span class="modal-card__vote--gray">${r}</span>/<span class="modal-card__vote--red">${s}</span></p>\n</div>\n<div class="modal-card__film-information-items-wrrapper">\n<li class="modal-card__film-information__items">\n  Popularity\n</li>\n<p class="modal-card__film-information__text">${c}</p></div>\n<div class="modal-card__film-information-items-wrrapper">\n  <li class="modal-card__film-information__items" >Original Title\n</li>\n<p class="modal-card__film-information__text">${o}</p></div>\n<div class="modal-card__film-information-items-wrrapper">\n<li class="modal-card__film-information__items">\n  Genre\n</li>\n<p class="modal-card__film-information__text">${l.map((e=>e.name))}</p></div>\n</ul>\n<p class="modal-card__subtitle">About</p>\n<p class="modal-card__text">${a}\n</p><div class="modal-card__btn-wrapper">\n<button\nclass="modal-card__watched-btn"\ntype="button"\ndata-card-modal-watched-film\n>\nadd to Watched\n</button>\n<button\nclass="modal-card__queue-btn"\ntype="button"\ndata-card-modal-queue-film\n>\nadd to queue\n</button></div>\n</div>`;return d.innerHTML=u}const u=document.querySelector(".modal-card__backdrop"),m=document.querySelector(".cards__list"),f=document.querySelector("body"),g=(document.querySelector(".modal-card"),document.querySelector(".modal-card__close-btn")),p=new(0,l.FilmAPI);m.addEventListener("click",(async function(e){let t=e.target.closest(".card-item").dataset.id;c(await p.fetchDetails(t)),f.classList.add("no-scroll"),u.classList.remove("hidden")})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(f.classList.remove("no-scroll"),u.classList.toggle("hidden"))})),g.addEventListener("click",(e=>{f.classList.remove("no-scroll"),u.classList.add("hidden")})),u.addEventListener("click",(e=>{e.target===u&&(u.classList.add("hidden"),f.classList.remove("no-scroll"))})),o("2nhTy");r=o("bcNH0"),s=o("eyjy7");var v=o("5Zbuc"),_=o("7Y9D8");const y=(0,s.getAuth)(r.firebaseApp);(async()=>{(0,s.onAuthStateChanged)(y,(e=>{e?(console.log(e),console.log("user logged in"),v.refs.openModalHomeBtn.classList.add("log-out"),v.refs.openModalHomeBtn.setAttribute("title","Click to Log Out"),v.refs.openModalHomeBtn.classList.remove("log-in")):(console.log("user logged out"),v.refs.openModalHomeBtn.classList.remove("log-out"),v.refs.openModalHomeBtn.setAttribute("title","Click to Log In"),v.refs.openModalHomeBtn.classList.add("log-in"))}))})();v.refs.registerForm.addEventListener("submit",(async e=>{e.preventDefault();const t=v.refs.registerEmail.value,n=v.refs.registerPassword.value;try{const o=await(0,s.createUserWithEmailAndPassword)(y,t,n);console.log(o.user),v.refs.modal.classList.toggle("auth-modal-is-hidden"),e.target.reset(),_.Notify.success("You are registered. Have fun!")}catch(e){console.log(e.message),"Firebase: Password should be at least 6 characters (auth/weak-password)."===e.message&&_.Notify.warning("Password should be at least 6 characters"),"Firebase: Error (auth/email-already-in-use)."===e.message&&_.Notify.warning("User with this email is already registered"),"Firebase: Error (auth/invalid-email)."===e.message&&_.Notify.warning("Please enter right email"),"Firebase: Error (auth/missing-password)."===e.message&&_.Notify.warning("Please enter password")}}));v.refs.loginForm.addEventListener("submit",(async e=>{e.preventDefault();const t=v.refs.loginEmail.value,n=v.refs.loginPassword.value;try{const o=await(0,s.signInWithEmailAndPassword)(y,t,n);console.log(o.user),v.refs.modal.classList.toggle("auth-modal-is-hidden"),e.target.reset(),_.Notify.success("You are loged in. Welcome back!")}catch(e){console.log(e.message),"Firebase: Error (auth/missing-password)."===e.message&&_.Notify.warning("Please enter password"),"Firebase: Error (auth/invalid-email)."===e.message&&_.Notify.warning("Please enter right email"),"Firebase: Error (auth/user-not-found)."===e.message&&_.Notify.warning("User not found. Please check if you entered right email and password"),"Firebase: Error (auth/wrong-password)."===e.message&&_.Notify.warning("You entered wrong password")}}));v.refs.openModalHomeBtn.addEventListener("click",(async e=>{e.target.classList.contains("log-out")&&(await(0,s.signOut)(y),_.Notify.success("You are loged out. See you soon"))}));const h=()=>{v.refs.loginForm.classList.toggle("login-hidden"),v.refs.registerForm.classList.toggle("register-hidden")};(v=o("5Zbuc")).refs.showLoginBtn.addEventListener("click",h),v.refs.showRegisterBtn.addEventListener("click",h);const w=e=>{e.target.classList.contains("log-in")?v.refs.modal.classList.remove("auth-modal-is-hidden"):e.target.classList.contains("auth-modal-close")&&v.refs.modal.classList.add("auth-modal-is-hidden")};v.refs.openModalHomeBtn.addEventListener("click",w),v.refs.closeModalBtn.addEventListener("click",w),o("hvQmF"),o("Yxh0b");var b={},L=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,N=/^0o[0-7]+$/i,k=parseInt,F="object"==typeof e&&e&&e.Object===Object&&e,T="object"==typeof self&&self&&self.Object===Object&&self,H=F||T||Function("return this")(),P=Object.prototype.toString,q=Math.max,A=Math.min,M=function(){return H.Date.now()};function O(e,t,n){var o,a,s,r,i,l,d=0,c=!1,u=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=o,s=a;return o=a=void 0,d=t,r=e.apply(s,n)}function g(e){return d=e,i=setTimeout(v,t),c?f(e):r}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-d>=s}function v(){var e=M();if(p(e))return _(e);i=setTimeout(v,function(e){var n=t-(e-l);return u?A(n,s-(e-d)):n}(e))}function _(e){return i=void 0,m&&o?f(e):(o=a=void 0,r)}function y(){var e=M(),n=p(e);if(o=arguments,a=this,l=e,n){if(void 0===i)return g(l);if(u)return i=setTimeout(v,t),f(l)}return void 0===i&&(i=setTimeout(v,t)),r}return t=j(t)||0,S(n)&&(c=!!n.leading,s=(u="maxWait"in n)?q(j(n.maxWait)||0,t):s,m="trailing"in n?!!n.trailing:m),y.cancel=function(){void 0!==i&&clearTimeout(i),d=0,o=l=a=i=void 0},y.flush=function(){return void 0===i?r:_(M())},y}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==P.call(e)}(e))return NaN;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(L,"");var n=x.test(e);return n||N.test(e)?k(e.slice(2),n?2:8):E.test(e)?NaN:+e}b=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return S(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),O(e,t,{leading:o,maxWait:t,trailing:a})},window.addEventListener("scroll",b((function(){console.log("scroll scroll");const e=document.querySelector(".scroll-to-top");document.body.scrollTop>550||document.documentElement.scrollTop>550?e.style.display="flex":e.style.display="none"}),1e3));
//# sourceMappingURL=index.517fb253.js.map
