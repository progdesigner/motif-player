
import Player from './PlayerComponent.vue'

const TAG = 'PLAYER_PLUGIN'
const playerURL = 'https://player.boda.am'
// const playerURL = 'http://localhost:3000'
const playerVersion = '0.8.9'

const plugin = {
  install (Vue, {loadComponent = true} = {}) {

    var _deferreds = []

    window.onMotifPlayerSDKReady = function( SDK ) {

      if (_deferreds.length > 0) {
        _deferreds.forEach((handler) => {
          handler(SDK, playerURL)
        })
        _deferreds = []
      }

      window.__MOTIF_PLAYER_SDK__ = SDK;
    }

    window.onPlayerSDKReady = function( func ) {
      if ( typeof func === 'function' ) {
        if ( window.__MOTIF_PLAYER_SDK__ ) {
          func(window.__MOTIF_PLAYER_SDK__, playerURL)
        }
        else {
          _deferreds.push(func)
        }
      }
    }

    let plugin = document.createElement('script')
    plugin.src = playerURL + `/js/player.sdk.js?v=${playerVersion}`
    plugin.async = true

    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript) {
      firstScript.parentNode.insertBefore(plugin, firstScript)
    }
    else {
      document.head.appendChild(plugin)
    }

    // load component globally
    loadComponent && Vue.component('Player', Player)
  }
}

typeof window.Vue === 'function' && window.Vue.use(plugin)

export default plugin
export {
  Player
}
