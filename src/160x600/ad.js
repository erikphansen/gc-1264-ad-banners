import gsap from 'gsap'

import '../sass/160x600.scss'
import sketchbook1Png from './images/sketchbook-1.png'
import sketchbook2Png from './images/sketchbook-2.png'
import sketchbook3Png from './images/sketchbook-3.png'
import sketchbook4Png from './images/sketchbook-4.png'
import sketchbook5Png from './images/sketchbook-5.png'
import line1Png from './images/1-a-new-line.png'
import line2Png from './images/2-of-art-pads.png'
import line3Png from './images/3-for-a-new.png'
import line4Png from './images/4-generation.png'
import line5Png from './images/5-of-artists.png'
import line6Png from './images/6-discover-yourself.png'
import logoPng from './images/logo.png'
import buttonPng from './images/button.png'

import {
  makeDropLabels,
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
const text4 = new Image()
text4.src = line4Png
ad.appendChild(text4)
const text5 = new Image()
text5.src = line5Png
ad.appendChild(text5)
const text6 = new Image()
text6.src = line6Png
ad.appendChild(text6)
const logo = new Image()
logo.src = logoPng
ad.appendChild(logo)
const button = new Image()
button.src = buttonPng
ad.appendChild(button)

// draw in the sketchbook
tl.set(sketchbookFrames[0], { alpha: 1 })
tl.from(sketchbook, { duration: slideUpSpeed, y: 600 })
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

// adds `drop1`, `drop2`, etc. to the timeline
const [
  dropLabel1,
  dropLabel2,
  dropLabel3,
  dropLabel4,
  dropLabel5,
] = makeDropLabels(tl, 0.5, 0.5)

// draw in text/drop sketchbook
tl.set(text1, { alpha: 1 }, dropLabel1)
tl.to(text1, { alpha: 0.5, duration: textFadeOutSpeed }, dropLabel1)

tl.set(text2, { alpha: 1 }, dropLabel2)
tl.to(text2, { alpha: 0.5, duration: textFadeOutSpeed }, dropLabel2)

tl.set(text3, { alpha: 1 }, dropLabel3)
tl.to(text3, { alpha: 0.5, duration: textFadeOutSpeed }, dropLabel3)

tl.set(sketchbook, { y: 63 }, dropLabel4)
tl.set(text4, { alpha: 1 }, dropLabel4)
tl.to(text4, { alpha: 0.5, duration: textFadeOutSpeed }, dropLabel4)

tl.set(sketchbook, { y: 600 }, dropLabel5)
tl.set(text5, { alpha: 1 }, dropLabel5)
tl.to(text5, { alpha: 0.5, duration: textFadeOutSpeed }, dropLabel5)

// fade out text
tl.to([text1, text2, text3, text4, text5], {
  alpha: 0,
  duration: textFadeOutSpeed,
})

// flash in the logo, final text, and button
tl.set([logo, text6, button], { alpha: 1 })

// this callback will stop playback here if we are on the last loop
tl.call(function () {
  if (thisPlay === repeat) {
    tl.pause()
  }
})

// fade out if this isn't the final run of the animation
tl.to([logo, text6, button], { alpha: 0 }, '+=3')
