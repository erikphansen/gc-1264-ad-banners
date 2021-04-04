import gsap from 'gsap'

import './sass/300x250.scss'
import sketchbook1 from './images/300x250/sketchbook-1.png'
import sketchbook2 from './images/300x250/sketchbook-2.png'
import sketchbook3 from './images/300x250/sketchbook-3.png'
import sketchbook4 from './images/300x250/sketchbook-4.png'
import sketchbook5 from './images/300x250/sketchbook-5.png'
import sketchbook6 from './images/300x250/sketchbook-6.png'

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

const inDur = 0.35
const outDur = 0.55
const ease = 'none'

tl.from(sketchbook, { duration: 1, y: 250 })
tl.to(sketchbookFrames[1], { duration: inDur, alpha: 1, ease })
tl.to(sketchbookFrames[0], { duration: outDur, alpha: 0, ease })

tl.to(sketchbookFrames[2], { duration: inDur, alpha: 1, ease }, '<')
tl.to(sketchbookFrames[1], { duration: outDur, alpha: 0, ease })

tl.to(sketchbookFrames[3], { duration: inDur, alpha: 1, ease }, '<')
tl.to(sketchbookFrames[2], { duration: outDur, alpha: 0, ease })

tl.to(sketchbookFrames[4], { duration: inDur, alpha: 1, ease }, '<')
tl.to(sketchbookFrames[3], { duration: outDur, alpha: 0, ease })

tl.to(sketchbookFrames[5], { duration: inDur, alpha: 1, ease }, '<')
tl.to(sketchbookFrames[4], { duration: outDur, alpha: 0, ease })

tl.set(sketchbook, { y: 22 }, '>.5')
tl.set(sketchbook, { y: 72 }, '>.5')
tl.set(sketchbook, { y: 122 }, '>.5')
tl.set(sketchbook, { y: 172 }, '>.5')
tl.set(sketchbook, { y: 222 }, '>.5')
