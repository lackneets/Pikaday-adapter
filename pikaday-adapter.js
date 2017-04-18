/*!
 * Pikaday Adapter
 *
 * Copyright © 2017 Lackneets
 *    Pikaday by David Bushell
 */

window.Pikaday = (function(pickaday) {

  // Object.assign polyfill 
  // from: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  "function"!=typeof Object.assign&&(Object.assign=function(a,b){"use strict";if(null==a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1;d<arguments.length;d++){var e=arguments[d];if(null!=e)for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(c[f]=e[f])}return c});

  var globalOptions = {};

  var adapter = function(options) {
    return new pickaday(Object.assign({}, globalOptions, options));
  }

  adapter.i18n = {
    'zh_tw': {
      previousMonth: '上個月',
      nextMonth: '下個月',
      months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      monthsShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      weekdaysShort: ['日', '一', '二', '三', '四', '五', '六']
    }
  }

  adapter.config = function(options){
    Object.assign(globalOptions, options);
  }

  adapter.options = globalOptions;

  return adapter;
})(Pikaday);
