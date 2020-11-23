const { play, setContainer } = require('@ernestoadv/tsplayer/lib')

var tsplayer = require('@ernestoadv/tsplayer').default
setContainer('player')
open('https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_640x360_800k.mp4')
play()