// Your code goes here
const eventListener = (element, event, cb) => {
  element.addEventListener(event, cb);
}
const navLink = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');
const scrollToTop = document.querySelector('#scroll-to-top');

navLink.forEach(e => eventListener(e, 'mouseover', () => {
  e.classList.add('red');
}))

navLink.forEach(e => eventListener(e, 'mouseout', () => {
  e.classList.remove('red');
}))

eventListener(body, 'keydown', (e) => {
  if(e.key === 'ArrowUp'){
    e.preventDefault();
    location.href='#';
  }
})

eventListener(window, 'scroll', e => {
  window.scrollY > 200 ? scrollToTop.style.display = 'block': scrollToTop.style.display = 'none';
})

