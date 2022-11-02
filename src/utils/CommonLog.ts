export enum ERROY_TYPE {
  JS = 'jsError',
  RESOURCE = 'resourceError',
  PROMISE = 'promiseError',
}

export default class CommonLog {
  /** 大类 */
  private _kind: string = 'stability'
  /** 小类型 */
  private _type: string = 'error'
  /** 错误类型 */
  private _errorType?: ERROY_TYPE
  /** 错误信息 */
  private _message?: string
  /** 错误文件 */
  private _filename?: string
  /** 错误资源url */
  private _url?: string
  /** 错误坐标 */
  private _position?: string
  /** 错误堆栈 */
  private _stack?: string
  /** 选择器 */
  private _selector?: string
  /** 标签 */
  private _tagName?: string

  constructor (errorType: ERROY_TYPE) {
    this.errorType = errorType
  }

  set errorType(errorType: ERROY_TYPE) {
    this._errorType = errorType
  }

  set message(message: string) {
    this._message = message
  }

  set filename(filename: string) {
    this._filename = filename
  }

  set url (url: string) {
    this._url = url
  }

  set position(position: string) {
    this._position = position
  }

  set stack(stack: string) {
    this._stack = stack
  }

  set selector(selector: string) {
    this._selector = selector
  }

  set tagName (tagName: string) {
    this._tagName = tagName
  }
}
