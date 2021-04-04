import gsap from 'gsap'

import '../sass/728x90.scss'
import sketchbook1Png from './images/sketchbook-1.png'
import sketchbook2Png from './images/sketchbook-2.png'
import sketchbook3Png from './images/sketchbook-3.png'
import sketchbook4Png from './images/sketchbook-4.png'
import sketchbook5Png from './images/sketchbook-5.png'
import line1Png from './images/1-a-new-line.png'
import line2Png from './images/2-for-a-new.png'
import line3Png from './images/3-discover-yourself.png'
import logoPng from './images/logo.png'
import buttonPng from './images/button.png'

import {
  sketchDrawInEase,
  sketchDrawInSpeed,
  slideUpSpeed,
  textFadeOutSpeed,
} from '../util'

// how many times should it repeat?
const repeat = 2
// how many times has it repeated?
let thisPlay = 0

const ad = document.querySelector('#ad')
const tl = gsap.timeline({
  repeat,
  onRepeat: () => {
    thisPlay++
  },
})

tl.timeScale(1)

const sketchbookPngs = [
  sketchbook1Png,
  sketchbook2Png,
  sketchbook3Png,
  sketchbook4Png,
  sketchbook5Png,
]

function makeSketchbook(images) {
  const book = document.createElement('div')
  book.classList.add('sketchbook')
  const frames = []
  images.forEach((frame) => {
    const img = new Image()
    img.src = frame
    frames.push(img)
    book.appendChild(img)
  })
  return [book, frames]
}

const [sketchbook, sketchbookFrames] = makeSketchbook(sketchbookPngs)

ad.appendChild(sketchbook)

const text1 = new Image()
text1.src = line1Png
ad.appendChild(text1)
const text2 = new Image()
text2.src = line2Png
ad.appendChild(text2)
const text3 = new Image()
text3.src = line3Png
ad.appendChild(text3)
const logo = new Image()
logo.src = logoPng
ad.appendChild(logo)
const button = new Image()
button.src = buttonPng
ad.appendChild(button)

// draw in the sketchbook
tl.set(sketchbookFrames[0], { alpha: 1 })
tl.fromTo(sketchbook, { y: 90 }, { duration: slideUpSpeed, y: -20 })
tl.to(sketchbookFrames[1], {
  duration: sketchDrawInSpeed,
  alpha: 1,
  ease: sketchDrawInEase,
})
tl.to(sketchbookFrames[2], {
  duration: sketchDrawInSpeed,
  alpha: 1,
  ease: sketchDrawInEase,
})
tl.to(sketchbookFrames[3], {
  duration: sketchDrawInSpeed,
  alpha: 1,
  ease: sketchDrawInEase,
})
tl.to(sketchbookFrames[4], {
  duration: sketchDrawInSpeed,
  alpha: 1,
  ease: sketchDrawInEase,
})

// draw in text
tl.set(text1, { alpha: 1 }, '>0.5')
tl.to(text1, { alpha: 0, duration: textFadeOutSpeed }, '+=1.25')
tl.to(text2, { alpha: 1, duration: textFadeOutSpeed }, '<')

// drop sketchbook and fade out text
tl.set(sketchbook, { y: 13 }, '>1')
tl.to(text2, { alpha: 0, duration: textFadeOutSpeed }, '<')
tl.set(sketchbook, { y: 47 }, '<0.5')
tl.set(sketchbook, { y: 90 }, '>0.5')

// flash in the logo, final text, and button
tl.set([logo, text3, button], { alpha: 1 }, '>0.5')

// this callback will stop playback here if we are on the last loop
tl.call(function () {
  if (thisPlay === repeat) {
    tl.pause()
  }
})

// fade out if this isn't the final run of the animation
tl.to([logo, text3, button], { alpha: 0 }, '+=3')
