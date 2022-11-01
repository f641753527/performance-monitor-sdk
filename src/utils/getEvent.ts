const events = ['click', 'keydown', 'mousedown', 'mouseover']

let lastEvent: Event | null = null

events.forEach(eventType => {
  window.addEventListener(eventType, (ev) => {
    lastEvent = ev
  }, {
    capture: true,
    passive: true
  })
})

export default function () {
  return lastEvent
}
