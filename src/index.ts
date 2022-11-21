import { jsError, promiseError, xhrError, blankScreen, timing } from './lib'

export const init = (config?: any) => {
  jsError()
  promiseError()
  xhrError()
  blankScreen()
  timing()
}

// init()
