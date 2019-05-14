// Your code goes here
const eventListener = (element, event, cb, options) => {
  element.addEventListener(event, cb, options);
}
const navLink = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');
const scrollToTop = document.querySelector('#scroll-to-top');
const wheelInfo = document.querySelector('#wheel-info');

navLink.forEach(e => eventListener(e, 'mouseover', () => {
  e.classList.add('red');
}))

navLink.forEach(e => eventListener(e, 'mouseout', () => {
  e.classList.remove('red');
}))

eventListener(body, 'keydown', (e) => {
  if(e.key === 'Enter'){
    e.preventDefault();
    location.href='#';
  }
})

eventListener(window, 'scroll', e => {
  window.scrollY > 200 ? scrollToTop.style.display = 'block': scrollToTop.style.display = 'none';
})

eventListener(document, 'wheel', e => {
  e.preventDefault();
  wheelInfo.style.display = 'block';
  setTimeout(() => wheelInfo.style.display = 'none', 2000);
}, {passive: false})

