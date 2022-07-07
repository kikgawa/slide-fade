const createSlideShow = (targetId) => {
  const slides = document.querySelectorAll(`${targetId} .slide-item`)
  const slideLength = slides.length
  const slidePrev = document.querySelector(`${targetId} .slide-nav-prev`)
  const slideNext = document.querySelector(`${targetId} .slide-nav-next`)
  let now = 0
  let intervalTime = 6000
  const slideShow = {
    play() {
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
      slidePrev.addEventListener('click', () => {
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
    }
  }
  return slideShow
}

const slide1 = createSlideShow('#slide-1')
const slide2 = createSlideShow('#slide-2')
const slide3 = createSlideShow('#slide-3')
slide1.play()
slide2.play()
slide3.play()