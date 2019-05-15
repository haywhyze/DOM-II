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
const button = document.querySelectorAll('.btn');
const container = document.querySelector('.container.home');
const input = document.createElement('input');
const p1 = document.createElement('p');

// 1. mouseover
navLink.forEach(e => eventListener(e, 'mouseover', () => {
  e.classList.add('red');
}))

// 2. mouseout
navLink.forEach(e => eventListener(e, 'mouseout', () => {
  e.classList.remove('red');
}))

// 3. keydown
eventListener(body, 'keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    location.href = '#';
  }
})

// 4. scroll
eventListener(window, 'scroll', e => {
  window.scrollY > 200 ? scrollToTop.style.display = 'block' : scrollToTop.style.display = 'none';
})

// 5. wheel
eventListener(document, 'wheel', e => {
  e.preventDefault();
  wheelInfo.style.display = 'block';
  setTimeout(() => wheelInfo.style.display = 'none', 2000);
}, {
  passive: false
})

// 6. load
eventListener(window, 'load', e => {
  home.style.display = 'none';
  loader.style.display = 'block';
  setTimeout(() => home.style.display = 'block', 1000)
  setTimeout(() => loader.style.display = 'none', 1000)
})

// 7. dbclick
images.forEach(e => eventListener(e, 'dblclick', () => {
  e.classList.toggle('increaseWidth');
}))

// 8. click
button.forEach(e => eventListener(e, 'click', () => {
  e.classList.toggle('remove-border-radius');
}))

// 9. resize
eventListener(window, 'resize', () => {
  body.classList.toggle('background-color');
})

container.appendChild(input);
input.setAttribute('value', 'Try selecting some texts');
p1.appendChild(document.createTextNode(''));
container.appendChild(p1);
const logSelection = (event) => {
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  p1.textContent = `You selected: ${selection}`;
}
// 10. select
eventListener(input, 'select', logSelection);
// inspired by https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event