const buttonWatchedEl = document.querySelector('.btn_lib').firstElementChild;
// console.log(buttonWatchedEl);
const buttonQueueEl = document.querySelector('.btn_lib').lastElementChild;
// console.log(buttonQueueEl);



function handleButtonClick(event) {
  const clickedButton = event.target;
  if (clickedButton === buttonWatchedEl) {
    if (!buttonWatchedEl.classList.contains('lib--active')) {
      buttonWatchedEl.classList.add('lib--active');
      buttonQueueEl.classList.remove('lib--active');
    }
  } else if (clickedButton === buttonQueueEl) {
    if (!buttonQueueEl.classList.contains('lib--active')) {
      buttonWatchedEl.classList.remove('lib--active');
      buttonQueueEl.classList.add('lib--active');
    }
  }
}

buttonWatchedEl.addEventListener('click', handleButtonClick);
buttonQueueEl.addEventListener('click', handleButtonClick);





