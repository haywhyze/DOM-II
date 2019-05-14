// Your code goes here
const eventListener = (element, event, cb, options) => {
  element.addEventListener(event, cb, options);
}
const navLink = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');
const scrollToTop = document.querySelector('#scroll-to-top');
const wheelInfo = document.querySelector('#wheel-info');
const loader = document.querySelector('.loader');
const home = document.querySelector('.home');
const images = document.querySelectorAll('img');

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

eventListener(window, 'load', e => {
  home.style.display = 'none';
  loader.style.display = 'block';
  setTimeout(() => home.style.display = 'block', 1000)
  setTimeout(() => loader.style.display = 'none', 1000)
})

images.forEach(e => eventListener(e, 'dblclick', () => {
  console.log('object')
  e.classList.toggle('increaseWidth');
}))