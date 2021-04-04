import gsap from 'gsap'

import './sass/300x250.scss'
import sketchbook1 from './images/300x250/sketchbook-1-300x250.png'
import sketchbook2 from './images/300x250/sketchbook-2-300x250.png'
import sketchbook3 from './images/300x250/sketchbook-3-300x250.png'
import sketchbook4 from './images/300x250/sketchbook-4-300x250.png'
import sketchbook5 from './images/300x250/sketchbook-5-300x250.png'
import sketchbook6 from './images/300x250/sketchbook-6-300x250.png'

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

const ad = document.querySelector('#ad')

ad.appendChild(sketchbook)

gsap.to('div.sketchbook', { duration: 1, y: -250 })
