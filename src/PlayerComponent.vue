<template>
  <div class="player" :class="classNames">
    <div ref="player" class="player-container"></div>
    <!-- <div class="player-loading" v-if="status !== 'play'"><i class="fa fa-pulse fa-spinner"></i></div> -->
  </div>
</template>

<script>

const TAG = 'PLAYER_COMPONENT'
const debugEnabled = true
const debug = debugEnabled === true ? console.log : function() {}

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "video"
    },
    src: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      default: ""
    },
    noRatio: {
      type: Boolean,
      default: false
    },
    aspectRatio: {
      type: String,
      default: "16:9"
    },
    portrait: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: false
    },
    live: {
      type: Boolean,
      default: false
    },
    videoHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      ready: false,
      status: 'unset',
      progressWidth: 0,
    }
  },
  beforeRouteUpdate (to, from, next) {
    next()
  },
  watch: {
    disabled(newValue, oldValue) {
      if (oldValue !== newValue && newValue === true) {
        if (this.player) {
          setTimeout( () => {
            this.player._setContainer(this.$refs.player)
            this.load();
          }, 500 );
        }
      }
    },
    src(newValue, oldValue) {
      if (oldValue !== newValue) {
        if (this.player) {
          setTimeout( () => {
            this.player._setContainer(this.$refs.player)
            this.load();
          }, 500 );
        }
      }
    }
  },
  computed: {
    isLive() {
      return this.live ? true : false
    },
    classNames() {
      let classNames = []

      if (this.mode) {
        classNames.push(this.mode)
      }

      if (this.portrait) {
        classNames.push('portrait')
      }

      if (!this.noRatio && this.aspectRatio) {
        let className = 'ratio-' + this.aspectRatio.replace(':', '-')
        classNames.push(className)
      }
      else if (this.noRatio) {
        classNames.push('no-ratio')
      }

      classNames.push(this.status)

      if (this.isLive) {
        classNames.push('live')
      }

      return classNames
    },
    mode() {
      if (this.noRatio) {
        return 'contain'
      }

      if (this.aspectRatio) {
        return 'cover'
      }

      return 'contain'
    },
    playerOptions() {
      var src = this.src

      return {
        type: this.type || "video",
        src: src,
        autoplay: this.autoplay,
        controls: this.controls,
        loop: this.loop,
        mode: this.mode,
        portrait: this.portrait,
        played: 0,
      }
    }
  },

  mounted() {
    debug( TAG, 'mounted' )

    this._mounted = true
    this.initPlayer()

    // this.$refs.player.children[1].height = this.videoHeight;
  },

  beforeDestroy() {
    debug( TAG, 'beforeDestroy' )

    if (this._appearTimeout) {
      clearTimeout(this._appearTimeout)
      this._appearTimeout = null
    }

    this._mounted = false

    if (this.player) {
      this.player._destroy()
    }
  },

  methods: {
    initPlayer() {
      debug( TAG, 'initPlayer' )

      window.onPlayerSDKReady(( SDK, playerURL ) => {

        var player = new SDK.Player(this.$refs.player, {
          ...this.playerOptions,
          playerUrl: playerURL + '/#/video'
        })

        player.on("ready", (e) => {
          this.onReady(e)
        })

        player.on("change-status", (e) => {
          this.onChangeStatus(e)
        })

        player.on("progress", (e) => {
          this.onProgress(e)
        })

        this.player = player
        this.$data.ready = true
      })
    },

    load() {

      if (this.player && this.player.info().src !== this.src) {
        debug( TAG, 'load', this.src )

        this.player.load({
          ...this.playerOptions
        })
      }
    },

    setStatus(status, options = {}) {
      if (this.$data.status === status) {
        return
      }
      debug( TAG, 'setStatus', status, options )

      let { delay } = options

      if (this._appearTimeout) {
        clearTimeout(this._appearTimeout)
        this._appearTimeout = null
      }

      if (delay && delay > 0) {
        this._appearTimeout = setTimeout(() => {
          this._appearTimeout = null
          this.$data.status = status
        }, delay)
      }
      else {
        this.$data.status = status
      }
    },

    onReady(e) {
      debug( TAG, 'onReady', e, !this.disabled )


    },

    onChangeStatus(e) {
      // debug( TAG, 'onChangeStatus', e.src, this.src )

      if (e.src === this.src) {
        debug( TAG, 'onChangeStatus', e.src, this._uid, e.status )

        this.setStatus(e.status, {
          delay: 0
        })
      }
      else {
        debug( TAG, 'onChangeStatus', this._uid, 'unset' )

        this.setStatus("unset")
      }
    },

    onProgress(e) {
      debug( TAG, 'onProgress', e )
      this.progressWidth = e.progress * 100;
      this.played = e.played;
    },

    play(){
      this.player.play();
    },
    pause(){
      this.player.pause();
    },
    mute(){
      this.player.mute();
      this.$emit( "muted", true );
    },
    unmute(){
      this.player.unmute();
      this.$emit( "muted", false );
    },
    seek(secs){
      this.player.seek(this.played + secs);
    },
    togglePlay() {
      let player = this.player

      if (player) {
        if (this.$data.status !== 'play') {
          player.play()
        }
        else {
          player.pause()
        }
      }
    },
    handleTab(event) {
      if(!this.isDoubleTab) {
        this.isDoubleTab = true;
        setTimeout( function() { this.isDoubleTab = false; }, 300 );
        return false;
      }
      event.preventDefault();
      //action on double tap goes below
    },
  }
}
</script>
