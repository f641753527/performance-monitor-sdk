import getEvent from '@/utils/getEvent'
import getSelector from '@/utils/getSelector'
import tracker from '@/utils/Tracker'
import CommonLog, { MAIN_TYPE, ERROY_TYPE } from '@/utils/CommonLog'


const xhrError = () => {
  const originOpen = XMLHttpRequest.prototype.open
  const originSend = XMLHttpRequest.prototype.send

  XMLHttpRequest.prototype.open = function(method: string, url: string | URL) {
    originOpen.apply(this, arguments as any);
    (this as any).logData = {
      method,
      url,
    }
  }


  XMLHttpRequest.prototype.send = function(body) {

    originSend.apply(this, [body])

    const lastEvent = getEvent()
    const selector = lastEvent ? getSelector((lastEvent as any).path) : ''
    const log = new CommonLog(MAIN_TYPE.XHR)
    log.selector = selector
    log.params = JSON.stringify(body)
    log.filename = location.href
    log.url = (this as any).logData.url

    const trackerHandle = (type: ERROY_TYPE) => (event: any) => {
      const isTracker = !!event.target.responseURL.match('performance-monitor-sdk')
      if (isTracker) return

      log.errorType = type
      log.respopnse = event.target.response
      log.status = `${event.target.status}`
      
      tracker.send(log)
    }

    this.onload = trackerHandle(ERROY_TYPE.XHR_SUCCESS)
    this.onerror = trackerHandle(ERROY_TYPE.XHR_ERROR)

  }


}

export default xhrError