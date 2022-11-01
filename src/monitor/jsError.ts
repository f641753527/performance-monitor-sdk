import getEvent from '@/utils/getEvent'
import getSelector from '@/utils/getSelector'
import tracker from '@/utils/Tracker'
import { CommonLog, JsErrorLog, ResorceErrorLog  } from './Log'

const jsError = () => {
  window.addEventListener('error', (event: any) => {
    let log: CommonLog

    let target: any = event.target || event.srcElement;
    let isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;
    if (isElementTarget) {
      // 资源加载错误
      log = new ResorceErrorLog(target.src || target.href, getSelector(event.path), target.tagName)
    } else {
      const lastEvent = getEvent()

      const position = `line: ${event.lineno}, column: ${event.colno}`
      const selector = lastEvent ? getSelector((lastEvent as any).path) : ''

      log = new JsErrorLog(event.message, event.filename, position, event.error.stack, selector)
    }

    

    tracker.send(log)
  }, true)
}

export default jsError
