import getEvent from '@/utils/getEvent'
import getSelector from '@/utils/getSelector'
import tracker from '@/utils/Tracker'
import CommonLog, { ERROY_TYPE } from '@/utils/CommonLog'

const promiseError = () => {
  window.addEventListener('unhandledrejection', (event) => {

    const { reason } = event

    const lastEvent = getEvent()
    const selector = lastEvent ? getSelector((lastEvent as any).path) : ''

    const log = new CommonLog(ERROY_TYPE.PROMISE)
    log.selector = selector

    if (typeof reason === 'object' && reason.stack && reason.message) {
      log.message = reason.message
      log.stack = reason.stack
      const matched = reason.stack.match(/at\s+(.+):(\d+):(\d+)/)
      log.filename = matched[1]
      log.position = `line: ${matched[2]}, column: ${matched[3]}`
    } else {
      log.message = JSON.stringify(reason)
    }

    tracker.send(log)
  })
}

export default promiseError
