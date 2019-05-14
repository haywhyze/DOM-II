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
  console.log(e.key)
  if(e.key === 'ArrowUp'){
    e.preventDefault();
    location.href='#';
  }
})

eventListener(window, 'scroll', e => {
  if (window.scrollY > 100) {
    scrollToTop.style.display = 'block';
  } else 

  window.scrollY > 100 ? scrollToTop.style.display = 'block': scrollToTop.style.display = 'none';
})