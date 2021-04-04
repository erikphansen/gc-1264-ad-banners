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
const tl = gsap.timeline()

function makeSketchbook() {
  const sketchbookImages = [
    sketchbook1,
    sketchbook2,
    sketchbook3,
    sketchbook4,
    sketchbook5,
    sketchbook6,
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
sketchbookFrames.forEach((frame) => {
  gsap.set(frame, { alpha: 0 })
})
gsap.set(sketchbookFrames[0], { alpha: 1 })

ad.appendChild(sketchbook)

const text1 = new Image()
text1.src = line1
ad.appendChild(text1)
const text2 = new Image()
text2.src = line2
ad.appendChild(text2)
const text3 = new Image()
text3.src = line3
ad.appendChild(text3)
const text4 = new Image()
text4.src = line4
ad.appendChild(text4)
const text5 = new Image()
text5.src = line5
ad.appendChild(text5)

const inDur = 0.5
const ease = 'none'

// draw in the sketchbook
tl.from(sketchbook, { duration: 1, y: 250 })
tl.to(sketchbookFrames[1], { duration: inDur, alpha: 1, ease })
tl.to(sketchbookFrames[2], { duration: inDur, alpha: 1, ease })
tl.to(sketchbookFrames[3], { duration: inDur, alpha: 1, ease })
tl.to(sketchbookFrames[4], { duration: inDur, alpha: 1, ease })
tl.to(sketchbookFrames[5], { duration: inDur, alpha: 1, ease })

// drop the sketchbook
tl.set(sketchbook, { y: 22 }, '>.5')
// flash in the line1
tl.set(text1, { alpha: 1 })
tl.to(text1, { alpha: 0.5, duration: inDur })

// drop the sketchbook
tl.set(sketchbook, { y: 72 }, '>')
// flash in the line2
tl.set(text2, { alpha: 1 }, '<')
tl.to(text2, { alpha: 0.5, duration: inDur })

// drop the sketchbook
tl.set(sketchbook, { y: 122 }, '>')
// flash in the line3
tl.set(text3, { alpha: 1 }, '<')
tl.to(text3, { alpha: 0.5, duration: inDur })

// drop the sketchbook
tl.set(sketchbook, { y: 172 }, '>')
// flash in the line4
tl.set(text4, { alpha: 1 }, '<')
tl.to(text4, { alpha: 0.5, duration: inDur })

tl.set(sketchbook, { y: 222 }, '>')
// flash in the line5
tl.set(text5, { alpha: 1 }, '<')
tl.to(text5, { alpha: 0.5, duration: inDur })
