!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n),n("4Nugj"),n("b7ONl"),n("1beAg");var s=n("1beAg"),o=n("6p62o");window.addEventListener("load",s.default),document.querySelector("#theme-toggle").addEventListener("click",o.onThemeBtnClick);var c=n("bpxeT"),i=n("2TvXO"),d=n("k30FB"),l=n("7rQOT"),u=n("6JpON"),f=n("4Nugj"),p=n("3mSO2");n("6p62o");f=n("4Nugj");function m(e){return e.map((function(e){var t=e.id,r=e.title,a=e.poster_path,n=e.release_date,s=e.genres;return"<li class='card-item' data-id='".concat(t,"'>\n        <div class='image__wrapper'>\n          <img class='movie__poster' src='").concat((0,p.getMoviePoster)(a),"' width='395' alt='").concat(r,"' loading='lazy' />\n        </div>\n        <div class='card-item__info-wrapper'>\n        <h2 class='card-item__title'>").concat((0,p.getMovieTitle)(r),"</h2>\n        <div class='card-item__info'>\n        <p class='card-item__genre'>").concat((0,p.getGenresLib)(s),"</p>\n        <span class='card-item__year'>|</span>\n        <p class='card-item__year'>").concat((0,p.getReleaseDate)(n),"</p>\n        </div>\n        </div>\n        </li>")})).join("")}function v(){f.refs.plugWrapperLight.classList.remove("hidden")}var h=new(0,d.DatabaseAPI);function g(){return b.apply(this,arguments)}function b(){return(b=e(c)(e(i).mark((function t(){var r,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.Loading.pulse({svgColor:"#b92f2c"}),f.refs.libGalleryEl.innerHTML="",f.refs.plugWrapperLight.classList.add("hidden"),e.prev=3,e.next=6,h.getWatchedList();case 6:r=e.sent,a=m(r),f.refs.libGalleryEl.insertAdjacentHTML("beforeend",a),window.removeEventListener("load",g),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),v(),u.Report.info("Filmoteka Info","This List is empty. Start adding some movies to see them here","OK");case 16:l.Loading.remove();case 17:case"end":return e.stop()}}),t,null,[[3,12]])})))).apply(this,arguments)}c=n("bpxeT"),i=n("2TvXO"),l=n("7rQOT"),f=n("4Nugj"),u=n("6JpON");function L(){return y.apply(this,arguments)}function y(){return(y=e(c)(e(i).mark((function t(){var r,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.Loading.pulse({svgColor:"#b92f2c"}),f.refs.libGalleryEl.innerHTML="",f.refs.plugWrapperLight.classList.add("hidden"),e.prev=3,e.next=6,h.getQueueList();case 6:r=e.sent,a=m(r),f.refs.libGalleryEl.insertAdjacentHTML("beforeend",a),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),v(),u.Report.info("Filmoteka Info","This List is empty. Start adding some movies to see them here","OK");case 15:l.Loading.remove();case 16:case"end":return e.stop()}}),t,null,[[3,11]])})))).apply(this,arguments)}function x(e){var t=e.target;t===f.refs.buttonWatchedEl?(f.refs.libGalleryEl.innerHTML="",g(),f.refs.buttonWatchedEl.classList.contains("lib--active")||(f.refs.buttonWatchedEl.classList.add("lib--active"),f.refs.buttonQueueEl.classList.remove("lib--active"))):t===f.refs.buttonQueueEl&&(f.refs.libGalleryEl.innerHTML="",L(),f.refs.buttonQueueEl.classList.contains("lib--active")||(f.refs.buttonWatchedEl.classList.remove("lib--active"),f.refs.buttonQueueEl.classList.add("lib--active")))}(f=n("4Nugj")).refs.buttonWatchedEl.addEventListener("click",x),f.refs.buttonQueueEl.addEventListener("click",x),window.addEventListener("load",g),n("8FeKp"),n("h0FqT"),n("iNDEe");c=n("bpxeT"),i=n("2TvXO");var w=n("b7ONl"),k=n("iNDEe"),T=document.querySelector(".modal-card__backdrop"),E=document.querySelector(".library-cards__list"),_=document.querySelector("body"),O=(document.querySelector(".modal-card"),document.querySelector(".modal-card__close-btn")),M=new(0,w.FilmAPI);function N(){return(N=e(c)(e(i).mark((function t(r){var a,n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(r.target.closest(".cart-items")),M.youTubeID=r.target.closest(".card-item").dataset.id,localStorage.setItem("LOCALSTORAGE_KEY","".concat(r.target.closest(".card-item").dataset.id)),r.target.closest(".card-item")){e.next=5;break}return e.abrupt("return");case 5:return a=r.target.closest(".card-item").dataset.id,e.next=8,M.fetchDetails(a);case 8:n=e.sent,(0,k.default)(n),_.classList.add("no-scroll"),T.classList.remove("hidden");case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}E.addEventListener("click",(function(e){return N.apply(this,arguments)})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(_.classList.remove("no-scroll"),T.classList.add("hidden"))})),O.addEventListener("click",(function(e){_.classList.remove("no-scroll"),T.classList.add("hidden")})),T.addEventListener("click",(function(e){e.target===T&&(T.classList.add("hidden"),_.classList.remove("no-scroll"))}));c=n("bpxeT"),i=n("2TvXO"),d=n("k30FB"),w=n("b7ONl"),u=n("6JpON");var q,S=new(0,w.FilmAPI),Q=new(0,d.DatabaseAPI),W=document.querySelector(".library-cards__list"),F=document.querySelector(".modal-card"),A="",C=function(){setTimeout((function(){var e=document.querySelector("[data-card-modal-watched-film]");e.classList.remove("add-to-watched"),e.classList.add("remove-from-watched"),e.textContent="Remove from watched"}),150)},I=function(){setTimeout((function(){var e=document.querySelector("[data-card-modal-queue-film]");e.classList.remove("add-to-queue"),e.classList.add("remove-from-queue"),e.textContent="Remove from queue"}),150)},B=function(){setTimeout((function(){var e=document.querySelector("[data-card-modal-watched-film]");e.classList.remove("remove-from-watched"),e.classList.add("add-to-watched"),e.textContent="Add to watched"}),150)},D=function(){setTimeout((function(){var e=document.querySelector("[data-card-modal-queue-film]");e.classList.remove("remove-from-queue"),e.classList.add("add-to-queue"),e.textContent="Add to queue"}),150)},G=(q=e(c)(e(i).mark((function t(r){var a,n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.target.closest(".card-item")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,A=Number(r.target.closest(".card-item").dataset.id),e.next=6,Q.checkPresenseInWatched(A);case 6:return(a=e.sent)?C():a||B(),e.next=10,Q.checkPresenseInQueue(A);case 10:(n=e.sent)?I():n||D(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),u.Notify.failure("Ooops! Something went wrong. Try reloading page");case 17:case"end":return e.stop()}}),t,null,[[2,14]])}))),function(e){return q.apply(this,arguments)}),P=function(){var t=e(c)(e(i).mark((function t(r){var a,n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("cardModalWatchedFilm"in r.target.dataset)){e.next=25;break}if(e.prev=1,!r.target.classList.contains("add-to-watched")){e.next=18;break}return e.next=5,S.fetchDetails(A);case 5:return a=e.sent,e.next=8,Q.addToWatched(a);case 8:return u.Notify.success("".concat(a.title," added to Watched List")),C(),e.next=12,Q.checkPresenseInQueue(A);case 12:if(!e.sent){e.next=18;break}return D(),e.next=17,Q.removeMovieFromQueue(A);case 17:u.Notify.success("".concat(a.title," removed from Queue List"));case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),u.Notify.failure("Ooops! Something went wrong. Try reloading page");case 23:e.next=48;break;case 25:if(!("cardModalQueueFilm"in r.target.dataset)){e.next=48;break}if(e.prev=26,!r.target.classList.contains("add-to-queue")){e.next=43;break}return e.next=30,S.fetchDetails(A);case 30:return n=e.sent,e.next=33,Q.addToQueue(n);case 33:return u.Notify.success("".concat(n.title," added to Queue List")),I(),e.next=37,Q.checkPresenseInWatched(A);case 37:if(!e.sent){e.next=43;break}return B(),e.next=42,Q.removeMovieFromWatched(A);case 42:u.Notify.success("".concat(n.title," removed from Watched List"));case 43:e.next=48;break;case 45:e.prev=45,e.t1=e.catch(26),u.Notify.failure("Ooops! Something went wrong. Try reloading page");case 48:case"end":return e.stop()}}),t,null,[[1,20],[26,45]])})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=e(c)(e(i).mark((function t(r){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!("cardModalWatchedFilm"in r.target.dataset)){e.next=9;break}if(!r.target.classList.contains("remove-from-watched")){e.next=7;break}return e.next=5,Q.removeMovieFromWatched(A);case 5:u.Notify.success("Movie removed from Watched List"),B();case 7:e.next=15;break;case 9:if(!("cardModalQueueFilm"in r.target.dataset)){e.next=15;break}if(!r.target.classList.contains("remove-from-queue")){e.next=15;break}return e.next=13,Q.removeMovieFromQueue(A);case 13:u.Notify.success("Movie removed from Queue List"),D();case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0),u.Notify.failure("Ooops! Something went wrong. Try reloading page");case 21:case"end":return e.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}();W.addEventListener("click",G),F.addEventListener("click",P),F.addEventListener("click",j),n("7iM06"),n("iE7r8");c=n("bpxeT"),i=n("2TvXO");var R=n("fGC9r"),H=n("gQOBw"),X=n("k4iT1"),J=(u=n("6JpON"),(0,H.getAuth)(R.firebaseApp)),K=function(){var t=e(c)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,H.onAuthStateChanged)(J,(function(e){e?(X.refs.openModalLibraryBtn.classList.add("log-out"),X.refs.openModalLibraryBtn.setAttribute("title","Click to Log Out"),X.refs.openModalLibraryBtn.classList.remove("log-in")):(X.refs.openModalLibraryBtn.classList.remove("log-out"),X.refs.openModalLibraryBtn.setAttribute("title","Click to Log In"),X.refs.openModalLibraryBtn.classList.add("log-in"))}));case 1:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();K();var U=function(){var t=e(c)(e(i).mark((function t(r){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.target.classList.contains("log-out")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,H.signOut)(J);case 4:u.Notify.success("You are loged out. See you soon"),setTimeout((function(){return window.location.replace("./index.html")}),2e3);case 6:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();X.refs.openModalLibraryBtn.addEventListener("click",U),n("k30FB"),n("ivfiQ"),n("6p62o"),n("h8yxa"),n("cDXQO")}();
//# sourceMappingURL=library.7dac1c18.js.map
