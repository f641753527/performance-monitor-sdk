export interface ILog {
  /** 大类 */
  kind: string
  /** 小类型 */
  type: string
  /** js执行错误 */
  errorType: string
  /** 错误信息 */
  message: string
  /** 错误文件 */
  filename: string
  /** 错误坐标 */
  position: string
  /** 错误堆栈 */
  stack: string
  /** 选择器 */
  selector: string
}
