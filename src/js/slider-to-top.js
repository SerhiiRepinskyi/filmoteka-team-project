const throttle = require('lodash.throttle');

window.addEventListener('scroll', throttle(scrollToTopFunction, 1000))

function scrollToTopFunction() {
    console.log('scroll scroll');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (
      document.body.scrollTop > 550 ||
      document.documentElement.scrollTop > 550
    ) {
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  }