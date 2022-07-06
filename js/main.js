const slides = document.querySelectorAll('.slide-item');
const slidesLength = slides.length;
let now = 0;

window.addEventListener('load', () => {
  slides[0].classList.add('active')
})

const slideFade = () => {
  slides[now].classList.remove('active')
  if (now >= slidesLength - 1) {
    now = 0
  } else {
    now++
  }
  slides[now].classList.add('active');
}
setInterval(slideFade, 6000)