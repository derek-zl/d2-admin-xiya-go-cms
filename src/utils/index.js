import * as cookies from './modules/cookies'
import * as db from './modules/db'
import * as fn from './modules/fn'
import * as log from './modules/log'
import dayjs from './modules/dayjs'

const utils = {
  cookies,
  dayjs,
  db,
  fn,
  log,
  import: require('./modules/import.' + process.env.NODE_ENV)
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
utils.title = function (titleText) {
  const processTitle = process.env.VUE_APP_TITLE || 'D2Admin'
  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
utils.open = function (url) {
  var a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'd2admin-link-temp')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('d2admin-link-temp'))
}

export default utils
