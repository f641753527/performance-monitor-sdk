import tracker from '@/utils/Tracker'
import CommonLog, { MAIN_TYPE, ERROY_TYPE } from '@/utils/CommonLog'

const performanceTiming = () => {

  const timing = performance.timing
  const FP = performance.getEntriesByName('first-paint')[0]
  const FCP = performance.getEntriesByName('first-contentful-paint')[0]

  let LCP: PerformanceEntry
  let FID: PerformanceEntry

  const observerLCP = new PerformanceObserver(entryList => {
    LCP = entryList.getEntries()[0]
    observerLCP.disconnect()
  })
  observerLCP.observe({ type: 'largest-contentful-paint', buffered: true})

  const observerFID = new PerformanceObserver(entryList => {
    FID = entryList.getEntries()[0]
    
    observerFID.disconnect()
  })
  observerFID.observe({ type: 'first-input', buffered: true})

  const report = () => {
    const log = new CommonLog(MAIN_TYPE.SCREEN, ERROY_TYPE.PERFORMANCE)
    tracker.send({
      ...log,
      FP: FP.startTime,
      FCP: FCP.startTime,
      LCP: LCP?.startTime,
      FID: FID?.duration,
      FirstScreen: performance.now(),
      TTI: timing.domContentLoadedEventEnd - timing.navigationStart
    })
  }

  window.onload = () => {
    report()
  }

}


export default performanceTiming
