const slides = document.querySelectorAll('.slide-item')
const slideLength = slides.length
const slideNavs = document.querySelectorAll('.slide-nav')
const slidePerv = document.querySelector('.slide-nav-prev')
const slideNext = document.querySelector('.slide-nav-next')
let now = 0
let intervalTime = 6000

window.addEventListener('load', () => {
  slides[0].classList.add('active')
})

const slideFade = () => {
  slides[now].classList.remove('active')
  if (now >= slideLength - 1) {
    now = 0
  } else {
    now++
  }
  slides[now].classList.add('active')
}
// (() => {
//   timeoutId = setInterval(slideFade, intervalTime)
// })();
setInterval(slideFade, intervalTime)

slidePerv.addEventListener('click', () => {
  slides[now].classList.remove('active')
  if (now == 0) {
    now = slideLength - 1
  } else {
    now--
  }
  slides[now].classList.add('active')
  // clearInterval(timeoutId)
})
slideNext.addEventListener('click', () => {
  slideFade()
  // clearInterval(timeoutId)
})
