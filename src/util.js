export const slideUpSpeed = 0.75
export const sketchDrawInSpeed = 0.5
export const sketchDrawInEase = 'none'
export const textFadeOutSpeed = 0.75

export function makeDropLabels(timeline, firstDelay, interval) {
  timeline.addLabel('drop1', `>${firstDelay}`)
  timeline.addLabel('drop2', `>${firstDelay + interval * 1}`)
  timeline.addLabel('drop3', `>${firstDelay + interval * 2}`)
  timeline.addLabel('drop4', `>${firstDelay + interval * 3}`)
  timeline.addLabel('drop5', `>${firstDelay + interval * 4}`)
  return ['drop1', 'drop2', 'drop3', 'drop4', 'drop5']
}
