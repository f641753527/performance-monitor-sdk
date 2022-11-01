enum ERROY_TYPE {
  JS = 'jsError',
  RESOURCE = 'resourceError',
  PROMISE = 'promiseError',
}

export class CommonLog {
  /** 大类 */
  private _kind: string = 'stability'
  /** 小类型 */
  private _type: string = 'error'
  /** 错误信息 */
  private _message?: string
  /** 错误文件 */
  private _filename?: string
  /** 错误坐标 */
  private _position?: string
  /** 错误堆栈 */
  private _stack?: string
  /** 选择器 */
  private _selector?: string
  /** 标签 */
  private _tagName?: string

  constructor (message?: string, filename?: string, position?: string, stack?: string, selector?: string, tagName?: string) {
    this._message = message
    this._filename = filename
    this._position = position
    this._stack = stack
    this._selector = selector
    this._tagName = tagName
  }

  set message(message: string) {
    this._message = message
  }

  set filename(filename: string) {
    this._filename = filename
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
}

export class JsErrorLog extends CommonLog {
  /** 错误类型 */
  private _errorType: ERROY_TYPE

  /**
   * @description: 创建日志上报对象
   * @param {string} message 错误信息
   * @param {string} filename 错误文件
   * @param {string} position 错误坐标
   * @param {string} stack 错误堆栈
   * @param {string} selector 选择器
   * @return {JsErrorLog}
   */  
  constructor (message?: string, filename?: string, position?: string, stack?: string, selector?: string) {
    super(message, filename, position, stack, selector)
    this._errorType = ERROY_TYPE.JS
  }
}

export class PromiseErrorLog extends CommonLog {
  /** 错误类型 */
  private _errorType: ERROY_TYPE

  /**
   * @description: 创建日志上报对象
   * @param {string} message 错误信息
   * @param {string} filename 错误文件
   * @param {string} position 错误坐标
   * @param {string} stack 错误堆栈
   * @param {string} selector 选择器
   * @return {JsErrorLog}
   */  
  constructor (message?: string, filename?: string, position?: string, stack?: string, selector?: string) {
    super(message, filename, position, stack, selector)
    this._errorType = ERROY_TYPE.PROMISE
  }
}

export class ResorceErrorLog extends CommonLog {
  /** 错误类型 */
  private _errorType: ERROY_TYPE

  /**
   * @description: 创建日志上报对象
   * @return {ResorceErrorLog}
   */  
  constructor (filename?: string, selector?: string, tagName?: string) {
    super('', filename, '', '', selector, tagName)
    this._errorType = ERROY_TYPE.RESOURCE
  }
}
