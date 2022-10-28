const events = ['click', 'keydown', 'mousedown', 'mouseover']

let lastEvent: Event | null = null

events.forEach(eventType => {
  window.addEventListener(eventType, (ev) => {
    lastEvent = ev
  })
})

export default function () {
  return lastEvent
}
