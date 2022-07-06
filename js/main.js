const slides = document.querySelectorAll('.slide-item')
const slideLength = slides.length
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

slidePerv.addEventListener('click', () => {
  slides[now].classList.remove('active')
  if (now == 0) {
    now = slideLength - 1
  } else {
    now--
  }
  slides[now].classList.add('active')
  clearInterval(timer)
  timer = setInterval(slideFade, intervalTime)
})
slideNext.addEventListener('click', () => {
  slideFade()
  clearInterval(timer)
  timer = setInterval(slideFade, intervalTime)
})

let timer = setInterval(slideFade, intervalTime)