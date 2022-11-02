import { jsError, promiseError, xhrError, blankScreen } from './lib'

export const init = (config?: any) => {
  jsError()
  promiseError()
  xhrError()
  blankScreen()
}

init()
