var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o),o("krGWQ"),o("7rYDH"),o("8j3eh");var r=o("kcvyG"),s=o("8j3eh"),i=o("ayzP0");window.addEventListener("load",r.default),window.addEventListener("load",s.default),document.querySelector("#theme-toggle").addEventListener("click",i.onThemeBtnClick),o("9AkgD"),o("hPewW"),o("kcvyG"),o("gLIqC"),o("fobnT");var n=o("7rYDH"),d=o("bQoWw");const c=document.querySelector(".modal-card__backdrop"),l=document.querySelector(".cards__list"),u=document.querySelector("body"),m=(document.querySelector(".modal-card"),document.querySelector(".modal-card__close-btn")),f=new(0,n.FilmAPI);l.addEventListener("click",(async function(e){if(!e.target.closest(".card-item"))return;let t=e.target.closest(".card-item").dataset.id;const a=await f.fetchDetails(t);(0,d.default)(a),u.classList.add("no-scroll"),c.classList.remove("hidden")})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(u.classList.remove("no-scroll"),c.classList.add("hidden"))})),m.addEventListener("click",(e=>{u.classList.remove("no-scroll"),c.classList.add("hidden")})),c.addEventListener("click",(e=>{e.target===c&&(c.classList.add("hidden"),u.classList.remove("no-scroll"))})),o("bQoWw");var g=o("4O2bx"),h=(n=o("7rYDH"),o("7Y9D8")),v=o("eyjy7"),y=o("bcNH0");const w=new(0,n.FilmAPI),p=new(0,g.DatabaseAPI),L=document.querySelector(".cards__list"),b=document.querySelector(".modal-card");let E="";const k=async()=>{const e=document.querySelector("[data-card-modal-watched-film]"),t=document.querySelector("[data-card-modal-queue-film]");(0,v.onAuthStateChanged)(y.auth,(a=>{a?(e.removeAttribute("disabled"),t.removeAttribute("disabled")):(e.setAttribute("disabled",""),t.setAttribute("disabled",""),h.Block.dots(".modal-card__btn-wrapper","Log in to add movies to library",{svgSize:"70px",svgColor:"#66000000",backgroundColor:"rgba(255,255,255,0.5)"}))}))},N=()=>{const e=document.querySelector("[data-card-modal-watched-film]");e.classList.remove("add-to-watched"),e.classList.add("remove-from-watched"),e.textContent="Remove from watched"},q=()=>{const e=document.querySelector("[data-card-modal-queue-film]");e.classList.remove("add-to-queue"),e.classList.add("remove-from-queue"),e.textContent="Remove from queue"},F=()=>{const e=document.querySelector("[data-card-modal-watched-film]");e.classList.remove("remove-from-watched"),e.classList.add("add-to-watched"),e.textContent="Add to watched"},S=()=>{const e=document.querySelector("[data-card-modal-queue-film]");e.classList.remove("remove-from-queue"),e.classList.add("add-to-queue"),e.textContent="Add to queue"};L.addEventListener("click",(async e=>{if(e.target.closest(".card-item"))try{setTimeout(k,200),E=Number(e.target.closest(".card-item").dataset.id);const t=await p.checkPresenseInWatched(E);t?N():t||F();const a=await p.checkPresenseInQueue(E);a?q():a||S()}catch(e){h.Notify.failure("Ooops! Something went wrong. Try reloading page")}})),b.addEventListener("click",(async e=>{if("cardModalWatchedFilm"in e.target.dataset)try{if(e.target.classList.contains("add-to-watched")){const e=await w.fetchDetails(E);await p.addToWatched(e),h.Notify.success(`${e.title} added to Watched List`),N();await p.checkPresenseInQueue(E)&&(S(),await p.removeMovieFromQueue(E),h.Notify.success(`${e.title} removed from Queue List`))}}catch(e){h.Notify.failure("Ooops! Something went wrong. Try reloading page")}else if("cardModalQueueFilm"in e.target.dataset)try{if(e.target.classList.contains("add-to-queue")){const e=await w.fetchDetails(E);await p.addToQueue(e),h.Notify.success(`${e.title} added to Queue List`),q();await p.checkPresenseInWatched(E)&&(F(),await p.removeMovieFromWatched(E),h.Notify.success(`${e.title} removed from Watched List`))}}catch(e){h.Notify.failure("Ooops! Something went wrong. Try reloading page")}})),b.addEventListener("click",(async e=>{try{"cardModalWatchedFilm"in e.target.dataset?e.target.classList.contains("remove-from-watched")&&(await p.removeMovieFromWatched(E),h.Notify.success("Movie removed from Watched List"),F()):"cardModalQueueFilm"in e.target.dataset&&e.target.classList.contains("remove-from-queue")&&(await p.removeMovieFromQueue(E),h.Notify.success("Movie removed from Queue List"),S())}catch(e){h.Notify.failure("Ooops! Something went wrong. Try reloading page")}})),o("2nhTy");y=o("bcNH0"),v=o("eyjy7");var M=o("5Zbuc");h=o("7Y9D8");(async()=>{(0,v.onAuthStateChanged)(y.auth,(e=>{e?(M.refs.openModalHomeBtn.classList.add("log-out"),M.refs.openModalHomeBtn.setAttribute("title","Click to Log Out"),M.refs.openModalHomeBtn.classList.remove("log-in")):(M.refs.openModalHomeBtn.classList.remove("log-out"),M.refs.openModalHomeBtn.setAttribute("title","Click to Log In"),M.refs.openModalHomeBtn.classList.add("log-in"))}))})();M.refs.registerForm.addEventListener("submit",(async e=>{e.preventDefault();const t=M.refs.registerEmail.value,a=M.refs.registerPassword.value;try{await(0,v.createUserWithEmailAndPassword)(y.auth,t,a);M.refs.modal.classList.toggle("auth-modal-is-hidden"),e.target.reset(),h.Notify.success("You are registered. Have fun!")}catch(e){"Firebase: Password should be at least 6 characters (auth/weak-password)."===e.message&&h.Notify.warning("Password should be at least 6 characters"),"Firebase: Error (auth/email-already-in-use)."===e.message&&h.Notify.warning("User with this email is already registered"),"Firebase: Error (auth/invalid-email)."===e.message&&h.Notify.warning("Please enter right email"),"Firebase: Error (auth/missing-password)."===e.message&&h.Notify.warning("Please enter password")}}));M.refs.loginForm.addEventListener("submit",(async e=>{e.preventDefault();const t=M.refs.loginEmail.value,a=M.refs.loginPassword.value;try{await(0,v.signInWithEmailAndPassword)(y.auth,t,a);M.refs.modal.classList.toggle("auth-modal-is-hidden"),e.target.reset(),h.Notify.success("You are loged in. Welcome back!")}catch(e){"Firebase: Error (auth/missing-password)."===e.message&&h.Notify.warning("Please enter password"),"Firebase: Error (auth/invalid-email)."===e.message&&h.Notify.warning("Please enter right email"),"Firebase: Error (auth/user-not-found)."===e.message&&h.Notify.warning("User not found. Please check if you entered right email and password"),"Firebase: Error (auth/wrong-password)."===e.message&&h.Notify.warning("You entered wrong password")}}));M.refs.openModalHomeBtn.addEventListener("click",(async e=>{e.target.classList.contains("log-out")&&(await(0,v.signOut)(y.auth),h.Notify.success("You are loged out. See you soon"))}));const T=()=>{M.refs.loginForm.classList.toggle("login-hidden"),M.refs.registerForm.classList.toggle("register-hidden")};(M=o("5Zbuc")).refs.showLoginBtn.addEventListener("click",T),M.refs.showRegisterBtn.addEventListener("click",T);const P=e=>{e.target.classList.contains("log-in")?M.refs.modal.classList.remove("auth-modal-is-hidden"):e.target.classList.contains("auth-modal-close")&&M.refs.modal.classList.add("auth-modal-is-hidden")};M.refs.openModalHomeBtn.addEventListener("click",P),M.refs.closeModalBtn.addEventListener("click",P),o("hvQmF");var W={},x=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,A=/^0b[01]+$/i,D=/^0o[0-7]+$/i,j=parseInt,H="object"==typeof e&&e&&e.Object===Object&&e,Q="object"==typeof self&&self&&self.Object===Object&&self,B=H||Q||Function("return this")(),C=Object.prototype.toString,_=Math.max,I=Math.min,Y=function(){return B.Date.now()};function $(e,t,a){var o,r,s,i,n,d,c=0,l=!1,u=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var a=o,s=r;return o=r=void 0,c=t,i=e.apply(s,a)}function g(e){return c=e,n=setTimeout(v,t),l?f(e):i}function h(e){var a=e-d;return void 0===d||a>=t||a<0||u&&e-c>=s}function v(){var e=Y();if(h(e))return y(e);n=setTimeout(v,function(e){var a=t-(e-d);return u?I(a,s-(e-c)):a}(e))}function y(e){return n=void 0,m&&o?f(e):(o=r=void 0,i)}function w(){var e=Y(),a=h(e);if(o=arguments,r=this,d=e,a){if(void 0===n)return g(d);if(u)return n=setTimeout(v,t),f(d)}return void 0===n&&(n=setTimeout(v,t)),i}return t=U(t)||0,R(a)&&(l=!!a.leading,s=(u="maxWait"in a)?_(U(a.maxWait)||0,t):s,m="trailing"in a?!!a.trailing:m),w.cancel=function(){void 0!==n&&clearTimeout(n),c=0,o=d=r=n=void 0},w.flush=function(){return void 0===n?i:y(Y())},w}function R(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function U(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==C.call(e)}(e))return NaN;if(R(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=R(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(x,"");var a=A.test(e);return a||D.test(e)?j(e.slice(2),a?2:8):O.test(e)?NaN:+e}W=function(e,t,a){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return R(a)&&(o="leading"in a?!!a.leading:o,r="trailing"in a?!!a.trailing:r),$(e,t,{leading:o,maxWait:t,trailing:r})},window.addEventListener("scroll",W((function(){console.log("scroll scroll");const e=document.querySelector(".scroll-to-top");document.body.scrollTop>550||document.documentElement.scrollTop>550?e.style.display="flex":e.style.display="none"}),1e3)),o("ayzP0");
//# sourceMappingURL=index.95ea95e3.js.map
