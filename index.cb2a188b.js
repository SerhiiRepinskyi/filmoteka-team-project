!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("b7ONl"),o("isZz2");var i=o("bpxeT"),a=o("2TvXO"),u=o("gBZVT"),s=o("gQOBw"),l=o("fGC9r");o("iAAxt");var c=document.querySelector(".lib__btn");function d(){return d=e(i)(e(a).mark((function t(){var n,r;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=(0,s.getAuth)(l.firebaseApp),r=function(){var t=e(i)(e(a).mark((function t(){return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,s.onAuthStateChanged)(n,(function(e){e?c.classList.remove("hidden"):c.classList.add("hidden")}));case 1:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r();case 3:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}window.addEventListener("load",u.default),window.addEventListener("load",(function(){return d.apply(this,arguments)})),o("h0FqT"),o("gBZVT"),o("7iM06"),o("iE7r8"),o("jcFG7");i=o("bpxeT"),a=o("2TvXO"),l=o("fGC9r"),s=o("gQOBw");var f,g,p=o("hKHmD"),v=(f={registerForm:document.querySelector(".register-form"),registerEmail:document.querySelector("#register-email"),registerPassword:document.querySelector("#register-password"),registerBtn:document.querySelector(".register-button"),loginForm:document.querySelector(".login-form"),loginEmail:document.querySelector("#login-email"),loginPassword:document.querySelector("#login-password"),loginBtn:document.querySelector(".login-button"),logoutBtn:document.querySelector(".sign-out-button"),openModalBtn:document.querySelector(".auth-modal-open"),closeModalBtn:document.querySelector(".auth-modal-close"),modal:document.querySelector(".auth-modal-backdrop"),showLoginBtn:document.querySelector(".show-login"),showRegisterBtn:document.querySelector(".show-register")},e(p)(f,"loginForm",document.querySelector(".login-form-box")),e(p)(f,"registerForm",document.querySelector(".register-form-box")),f),m=(0,s.getAuth)(l.firebaseApp),h=(g=e(i)(e(a).mark((function t(n){var r,o,i;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=v.registerEmail.value,o=v.registerPassword.value,e.prev=3,e.next=6,(0,s.createUserWithEmailAndPassword)(m,r,o);case 6:i=e.sent,console.log(i.user),v.modal.classList.toggle("auth-modal-is-hidden"),n.target.reset(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[3,12]])}))),function(e){return g.apply(this,arguments)});v.registerForm.addEventListener("submit",h);var y=function(){var t=e(i)(e(a).mark((function t(){return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,s.onAuthStateChanged)(m,(function(e){e?(console.log(e),console.log("user logged in"),v.openModalBtn.classList.add("visually-hidden"),v.logoutBtn.classList.remove("visually-hidden")):(console.log("user logged out"),v.openModalBtn.classList.remove("visually-hidden"),v.logoutBtn.classList.add("visually-hidden"))}));case 1:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();y();var w=function(){var t=e(i)(e(a).mark((function t(n){var r,o,i;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=v.loginEmail.value,o=v.loginPassword.value,e.prev=3,e.next=6,(0,s.signInWithEmailAndPassword)(m,r,o);case 6:i=e.sent,console.log(i.user),v.modal.classList.toggle("auth-modal-is-hidden"),n.target.reset(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}();v.loginForm.addEventListener("submit",w);var b=function(){var t=e(i)(e(a).mark((function t(){return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.signOut)(m);case 2:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();v.logoutBtn.addEventListener("click",b);var x=function(){v.loginForm.classList.toggle("login-hidden"),v.registerForm.classList.toggle("register-hidden")};v.showLoginBtn.addEventListener("click",x),v.showRegisterBtn.addEventListener("click",x);var L=function(){v.modal.classList.toggle("auth-modal-is-hidden")};v.openModalBtn.addEventListener("click",L),v.closeModalBtn.addEventListener("click",L),o("ivfiQ"),o("iAAxt");var E={},S=o("l5bVx"),q="Expected a function",B=/^\s+|\s+$/g,T=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,k=/^0o[0-7]+$/i,A=parseInt,F="object"==typeof t&&t&&t.Object===Object&&t,j="object"==typeof self&&self&&self.Object===Object&&self,M=F||j||Function("return this")(),N=Object.prototype.toString,D=Math.max,P=Math.min,_=function(){return M.Date.now()};function C(e,t,n){var r,o,i,a,u,s,l=0,c=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(q);function g(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function p(e){return l=e,u=setTimeout(m,t),c?g(e):a}function v(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-l>=i}function m(){var e=_();if(v(e))return h(e);u=setTimeout(m,function(e){var n=t-(e-s);return d?P(n,i-(e-l)):n}(e))}function h(e){return u=void 0,f&&r?g(e):(r=o=void 0,a)}function y(){var e=_(),n=v(e);if(r=arguments,o=this,s=e,n){if(void 0===u)return p(s);if(d)return u=setTimeout(m,t),g(s)}return void 0===u&&(u=setTimeout(m,t)),a}return t=R(t)||0,W(n)&&(c=!!n.leading,i=(d="maxWait"in n)?D(R(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=s=o=u=void 0},y.flush=function(){return void 0===u?a:h(_())},y}function W(t){var n=void 0===t?"undefined":e(S)(t);return!!t&&("object"==n||"function"==n)}function R(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(S)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==N.call(t)}(t))return NaN;if(W(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=W(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(B,"");var r=O.test(t);return r||k.test(t)?A(t.slice(2),r?2:8):T.test(t)?NaN:+t}E=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(q);return W(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),C(e,t,{leading:r,maxWait:t,trailing:o})},window.addEventListener("scroll",E((function(){console.log("scroll scroll");var e=document.querySelector(".scroll-to-top");document.body.scrollTop>550||document.documentElement.scrollTop>550?e.style.display="flex":e.style.display="none"}),1e3))}();
//# sourceMappingURL=index.cb2a188b.js.map
