import gsap from 'gsap'

import '../sass/300x250.scss'
import sketchbook1Png from './images/sketchbook-1.png'
import sketchbook2Png from './images/sketchbook-2.png'
import sketchbook3Png from './images/sketchbook-3.png'
import sketchbook4Png from './images/sketchbook-4.png'
import sketchbook5Png from './images/sketchbook-5.png'
import sketchbook6Png from './images/sketchbook-6.png'
import line1Png from './images/1-a-new-line.png'
import line2Png from './images/2-of-art-pads.png'
import line3Png from './images/3-for-a-new.png'
import line4Png from './images/4-generation.png'
import line5Png from './images/5-of-artists.png'
import line6Png from './images/6-discover-yourself.png'
import logoPng from './images/logo.png'
import buttonPng from './images/button.png'

// how many times has it repeated?
let thisPlay = 0
// how many times should it repeat?
const repeat = 2
const slideUpSpeed = 0.75
const sketchDrawInSpeed = 0.5
const sketchDrawInEase = 'none'
const textFadeOutSpeed = 0.75

const ad = document.querySelector('#ad')
const tl = gsap.timeline({
  repeat,
  onRepeat: () => {
    thisPlay++
  },
})

tl.timeScale(1)

function makeSketchbook() {
  const sketchbookImages = [
    sketchbook1Png,
    sketchbook2Png,
    sketchbook3Png,
    sketchbook4Png,
    sketchbook5Png,
    sketchbook6Png,
  ]
  const book = document.createElement('div')
  book.classList.add('sketchbook')
  const frames = []
  sketchbookImages.forEach((frame) => {
    const img = new Image(300, 250)
    img.src = frame
    frames.push(img)
    book.appendChild(img)
  })
  return [book, frames]
}

const [sketchbook, sketchbookFrames] = makeSketchbook()
// gsap.set(sketchbookFrames[0], { alpha: 1 })

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
tl.from(sketchbook, { duration: slideUpSpeed, y: 250 })
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
tl.to(sketchbookFrames[5], {
  duration: sketchDrawInSpeed,
  alpha: 1,
  ease: sketchDrawInEase,
})

// now that the sketchbook has drawn in, set up markers for dropping the
// sketchbook out of view
tl.addLabel('drop1', '>.5')
tl.addLabel('drop2', '>1')
tl.addLabel('drop3', '>1.5')
tl.addLabel('drop4', '>2')
tl.addLabel('drop5', '>2.5')

tl.set(sketchbook, { y: 22 }, 'drop1')
tl.set(text1, { alpha: 1 }, 'drop1')
tl.to(text1, { alpha: 0.5, duration: textFadeOutSpeed }, 'drop1')

tl.set(sketchbook, { y: 72 }, 'drop2')
tl.set(text2, { alpha: 1 }, 'drop2')
tl.to(text2, { alpha: 0.5, duration: textFadeOutSpeed }, 'drop2')

tl.set(sketchbook, { y: 122 }, 'drop3')
tl.set(text3, { alpha: 1 }, 'drop3')
tl.to(text3, { alpha: 0.5, duration: textFadeOutSpeed }, 'drop3')

tl.set(sketchbook, { y: 172 }, 'drop4')
tl.set(text4, { alpha: 1 }, 'drop4')
tl.to(text4, { alpha: 0.5, duration: textFadeOutSpeed }, 'drop4')

tl.set(sketchbook, { y: 250 }, 'drop5')
tl.set(text5, { alpha: 1 }, 'drop5')
tl.to(text5, { alpha: 0.5, duration: textFadeOutSpeed }, 'drop5')

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
