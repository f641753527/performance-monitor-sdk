import tracker from '@/utils/Tracker'
import CommonLog, { MAIN_TYPE, ERROY_TYPE } from '@/utils/CommonLog'
import { isScreenElemBlank } from '@/utils/screen'

/** 横、纵坐标各自切割点总数 */
const SPLIT_COUNT = 10

const calcBlankScreen = () => {
  /** 空白总数 */
  let emptyElemCount = 0;

  const innerWidth = document.body.clientWidth
  const innerHeight = document.body.clientHeight
  for (let i = 1; i <= SPLIT_COUNT; i++) {
    const xEls = document.elementsFromPoint(innerWidth / (SPLIT_COUNT + 1) * i, innerHeight / 2)
    const yEls = document.elementsFromPoint(innerWidth / 2, innerHeight / (SPLIT_COUNT + 1) * i)

    if (isScreenElemBlank(xEls[0])) emptyElemCount++
    if(isScreenElemBlank(yEls[0])) emptyElemCount++
  }
  if (emptyElemCount > SPLIT_COUNT * 2 - 5) {
    const log = new CommonLog(MAIN_TYPE.SCREEN, ERROY_TYPE.BLANK_SCREEN)

    tracker.send(log)
  }
}

function blankScreen () {
  if (document.readyState === 'complete') {
    calcBlankScreen()
  } else {
    window.addEventListener('load', calcBlankScreen)
  }
}

export default blankScreen
