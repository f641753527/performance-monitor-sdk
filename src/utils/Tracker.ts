import getUserConfig from './getUserConfig'

const PUBLIC_HOST = 'cn-guangzhou.log.aliyuncs.com'
const PROJECT_NAME = 'performance-monitor-sdk'
const LOG_STORE = 'performance-monitor-sdk-log-store'

const url = `http://${PROJECT_NAME}.${PUBLIC_HOST}/logstores/${LOG_STORE}/track`

class SendTracker {

  private xhr

  constructor () {
    this.xhr = new XMLHttpRequest()
  }

  public send<T>(data: T) {

    this.xhr.open('POST', url, true)

    const body = {
      __source__: '__source__',
      __logs__: [{ ...getUserConfig(), ...data }]
    }

    this.xhr.setRequestHeader('x-log-apiversion', '0.6.0')
    this.xhr.setRequestHeader('x-log-bodyrawsize', `${JSON.stringify(body).length}`)
    this.xhr.setRequestHeader('Content-Type', 'application/json')

    this.xhr.send(JSON.stringify(body))
  }
}

export default new SendTracker()
