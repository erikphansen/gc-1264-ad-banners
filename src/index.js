// import printMe from './print'

function component() {
  const element = document.createElement('div')
  const button = document.createElement('button')

  element.innerHTML = ['Hello!!!!', 'webpack'].join(' ')
  button.innerHTML = 'click me and check the console!'
  // button.onclick = printMe

  element.appendChild(button)
  return element
}

document.body.appendChild(component())
