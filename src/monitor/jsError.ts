import type { ILog } from './interface'
import getEvent from '@/utils/getEvent'
import getSelector from '@/utils/getSelector'

const jsErrorCatch = () => {
  window.addEventListener('error', (event) => {

    const lastEvent = getEvent()

    const log: ILog = {
      kind: 'stability',
      type: 'error',
      errorType: 'jsError',
      message: event.message,
      filename: event.filename,
      position: `line: ${event.lineno}, column: ${event.colno}`,
      stack: event.error.stack,
      selector: lastEvent ? getSelector((lastEvent as any).path) : '',
    }

    console.log(log)
  })
}

export default jsErrorCatch
