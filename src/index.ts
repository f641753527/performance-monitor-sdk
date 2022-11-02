import { jsError, promiseError, xhrError } from './lib'

export const init = (config?: any) => {
  jsError()
  promiseError()
  xhrError()
}

init()

setTimeout(() => {
  const script = document.createElement('script')
  script.src = 'http://cdn.com.cn/js/404.js'
  document.body.append(script)

}, 500)
