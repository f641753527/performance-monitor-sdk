import getEvent from '@/utils/getEvent'
import getSelector from '@/utils/getSelector'
import tracker from '@/utils/Tracker'
import CommonLog, { MAIN_TYPE, ERROY_TYPE } from '@/utils/CommonLog'

const jsError = () => {
  window.addEventListener('error', (event: any) => {
    let log: CommonLog

    let target: any = event.target || event.srcElement;
    let isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;
    if (isElementTarget) {
      // 资源加载错误
      log = new CommonLog(MAIN_TYPE.ERROR, ERROY_TYPE.RESOURCE)
      log.filename = target.src || target.href
      log.selector = getSelector(event.path)
      log.tagName = target.tagName
    } else {
      const lastEvent = getEvent()

      const position = `line: ${event.lineno}, column: ${event.colno}`
      const selector = lastEvent ? getSelector((lastEvent as any).path) : ''

      log = new CommonLog(MAIN_TYPE.ERROR, ERROY_TYPE.JS)
      log.message = event.message
      log.filename  = event.filename
      log.position = position
      log.stack = event.error.stack
      log.selector = selector
    }

    

    tracker.send(log)
  }, true)
}

export default jsError
