import gsap from 'gsap'

import '../sass/300x250.scss'
import sketchbook1 from './images/sketchbook-1.png'
import sketchbook2 from './images/sketchbook-2.png'
import sketchbook3 from './images/sketchbook-3.png'
import sketchbook4 from './images/sketchbook-4.png'
import sketchbook5 from './images/sketchbook-5.png'
import sketchbook6 from './images/sketchbook-6.png'
import line1 from './images/1-a-new-line.png'
import line2 from './images/2-of-art-pads.png'
import line3 from './images/3-for-a-new.png'
import line4 from './images/4-generation.png'
import line5 from './images/5-of-artists.png'
import line6 from './images/6-discover-yourself.png'
import logo from './images/logo.png'
import button from './images/button.png'

const ad = document.querySelector('#ad')

const sketchbookImages = [
  sketchbook1,
  sketchbook2,
  sketchbook3,
  sketchbook4,
  sketchbook5,
  sketchbook6,
]

function makeSketchbook() {
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
sketchbookFrames.forEach((frame) => {
  gsap.set(frame, { alpha: 0 })
})
gsap.set(sketchbookFrames[0], { alpha: 1 })
ad.appendChild(sketchbook)

const tl = gsap.timeline()

const inDur = 0.5
const ease = 'none'

// draw in the sketchbook
tl.from(sketchbook, { duration: 1, y: 250 })
tl.to(sketchbookFrames[1], { duration: inDur, alpha: 1, ease })
tl.to(sketchbookFrames[2], { duration: inDur, alpha: 1, ease })
tl.to(sketchbookFrames[3], { duration: inDur, alpha: 1, ease })
tl.to(sketchbookFrames[4], { duration: inDur, alpha: 1, ease })
tl.to(sketchbookFrames[5], { duration: inDur, alpha: 1, ease })

// drop the sketchbook out of the frame
tl.set(sketchbook, { y: 22 }, '>.5')
tl.set(sketchbook, { y: 72 }, '>.5')
tl.set(sketchbook, { y: 122 }, '>.5')
tl.set(sketchbook, { y: 172 }, '>.5')
tl.set(sketchbook, { y: 222 }, '>.5')