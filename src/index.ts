import { jsError, PromiseError } from './monitor'

export const init = (config?: any) => {
  jsError()
  PromiseError()
}

init()

setTimeout(() => {
  const script = document.createElement('script')
  script.src = 'http://cdn.com.cn/js/404.js'
  document.body.append(script)

}, 500)
