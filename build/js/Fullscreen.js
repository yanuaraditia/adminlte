/**
 * --------------------------------------------
 * AdminLTE Fullscreen.js
 * License MIT
 * --------------------------------------------
 */

import $ from 'jquery'

/**
 * Constants
 * ====================================================
 */

const NAME = 'Fullscreen'
const DATA_KEY = 'lte.fullscreen'
const JQUERY_NO_CONFLICT = $.fn[NAME]

const SELECTOR_DATA_WIDGET = '[data-widget="fullscreen"]'

const Default = {
  minimizeIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="5 9 9 9 9 5" /><line x1="3" y1="3" x2="9" y2="9" /><polyline points="5 15 9 15 9 19" /><line x1="3" y1="21" x2="9" y2="15" /><polyline points="19 9 15 9 15 5" /><line x1="15" y1="9" x2="21" y2="3" /><polyline points="19 15 15 15 15 19" /><line x1="15" y1="15" x2="21" y2="21" /></svg>',
  maximizeIcon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="16 4 20 4 20 8" /><line x1="14" y1="10" x2="20" y2="4" /><polyline points="8 20 4 20 4 16" /><line x1="4" y1="20" x2="10" y2="14" /><polyline points="16 20 20 20 20 16" /><line x1="14" y1="14" x2="20" y2="20" /><polyline points="8 4 4 4 4 8" /><line x1="4" y1="4" x2="10" y2="10" /></svg>'
}

/**
 * Class Definition
 * ====================================================
 */

class Fullscreen {
  constructor(_element, _options) {
    this.element = _element
    this.options = $.extend({}, Default, _options)
  }

  // Public

  toggle() {
    if (document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement) {
      this.windowed()
    } else {
      this.fullscreen()
    }
  }

  fullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen()
    }

    $(SELECTOR_DATA_WIDGET).html(this.options.minimizeIcon)
  }

  windowed() {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }

    $(SELECTOR_DATA_WIDGET).html(this.options.maximizeIcon)
  }

  // Static

  static _jQueryInterface(config) {
    let data = $(this).data(DATA_KEY)

    if (!data) {
      data = $(this).data()
    }

    const _options = $.extend({}, Default, typeof config === 'object' ? config : data)
    const plugin = new Fullscreen($(this), _options)

    $(this).data(DATA_KEY, typeof config === 'object' ? config : data)

    if (typeof config === 'string' && /toggle|fullscreen|windowed/.test(config)) {
      plugin[config]()
    } else {
      plugin.init()
    }
  }
}

/**
  * Data API
  * ====================================================
  */
$(document).on('click', SELECTOR_DATA_WIDGET, function () {
  Fullscreen._jQueryInterface.call($(this), 'toggle')
})

/**
 * jQuery API
 * ====================================================
 */

$.fn[NAME] = Fullscreen._jQueryInterface
$.fn[NAME].Constructor = Fullscreen
$.fn[NAME].noConflict = function () {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return Fullscreen._jQueryInterface
}

export default Fullscreen
