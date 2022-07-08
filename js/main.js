const createSlideShow = (targetId, items) => {
  const slideContainer = document.querySelector(targetId.targetId)
  const slideHtml = `
    <div class= "slide-container" >
      <div class="slide-item"><img src="${targetId.items[0]}" alt="" /></div>
      <div class="slide-item"><img src="${targetId.items[1]}" alt="" /></div>
      <div class="slide-item"><img src="${targetId.items[2]}" alt="" /></div>
      <div class="slide-item"><img src="${targetId.items[3]}" alt="" /></div>
      <div class="slide-item"><img src="${targetId.items[4]}" alt="" /></div>
      <button class="slide-nav slide-nav-prev">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150" height="150" viewBox="0 0 50 50" style="fill: #ffffff">
          <path
            d="M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 28.707031 34.292969 C 29.097656 34.683594 29.097656 35.316406 28.707031 35.707031 C 28.511719 35.902344 28.257813 36 28 36 C 27.742188 36 27.488281 35.902344 27.292969 35.707031 L 17.292969 25.707031 C 16.902344 25.316406 16.902344 24.683594 17.292969 24.292969 L 27.292969 14.292969 C 27.683594 13.902344 28.316406 13.902344 28.707031 14.292969 C 29.097656 14.683594 29.097656 15.316406 28.707031 15.707031 L 19.414063 25 Z"
          ></path>
        </svg>
      </button>
      <button class="slide-nav slide-nav-next">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150" height="150" viewBox="0 0 50 50" style="fill: #ffffff">
          <path
            d="M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 28.707031 34.292969 C 29.097656 34.683594 29.097656 35.316406 28.707031 35.707031 C 28.511719 35.902344 28.257813 36 28 36 C 27.742188 36 27.488281 35.902344 27.292969 35.707031 L 17.292969 25.707031 C 16.902344 25.316406 16.902344 24.683594 17.292969 24.292969 L 27.292969 14.292969 C 27.683594 13.902344 28.316406 13.902344 28.707031 14.292969 C 29.097656 14.683594 29.097656 15.316406 28.707031 15.707031 L 19.414063 25 Z"
          ></path>
        </svg>
      </button>
    </div>
  `
  slideContainer.insertAdjacentHTML('afterbegin', slideHtml)
  // slideContainer.innerHTML = slideHtml

  const preloadImage = (src) => {
    const image = new Image()
    return new Promise((resolve => {
      image.onload = () => {
        resolve(image)
      }
      image.src = src
    }))
  }

  const promises = []

  targetId.items.forEach(() => promises.push(preloadImage(imgPath)))
  await Promise.all(promises)
  runSlide()

  const slides = document.querySelectorAll(`${targetId.targetId} .slide-item`)
  const slideLength = slides.length
  const slidePrev = document.querySelector(`${targetId.targetId} .slide-nav-prev`)
  const slideNext = document.querySelector(`${targetId.targetId} .slide-nav-next`)
  let now = 0
  let intervalTime = 6000




  const slideShow = {
    play() {
      // window.addEventListener('load', () => {
      slides[0].classList.add('active')
      // })
      const slideFade = () => {
        slides[now].classList.remove('active')
        now >= slideLength - 1 ? now = 0 : now++
        slides[now].classList.add('active')
      }
      slidePrev.addEventListener('click', () => {
        slides[now].classList.remove('active')
        now == 0 ? now = slideLength - 1 : now--
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

const slide1 = createSlideShow({ targetId: '#slide1', items: ['img/img-01.jpg', 'img/img-02.jpg', 'img/img-03.jpg', 'img/img-04.jpg', 'img/img-05.jpg'] })
const slide2 = createSlideShow({ targetId: '#slide2', items: ['img/img-02.jpg', 'img/img-03.jpg', 'img/img-04.jpg', 'img/img-05.jpg', 'img/img-01.jpg'] })
const slide3 = createSlideShow({ targetId: '#slide3', items: ['img/img-03.jpg', 'img/img-04.jpg', 'img/img-05.jpg', 'img/img-01.jpg', 'img/img-02.jpg'] })
slide1.play()
slide2.play()
slide3.play()