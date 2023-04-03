/**
 * 详情接口参数类型
 * @param { boolean } type - 类型
 */
declare interface VIconParams {
  type: number;
}

/**
 * 详情接口返回值类型
 * @param { number } code 状态码
 * @param { string } message 消息提示
 * @param { any } result 结果
 * @param { boolean } success 是否成果
 * @param { number } timestamp 时间戳
 */
declare interface VIconData {
  code: number;
  message: string;
  result?: any;
  success: boolean;
  timestamp: number;
}
