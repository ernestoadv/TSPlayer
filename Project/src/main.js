const { setContainer, open, play, pause, stop, seek, destroy } = require('@ernestoadv/tsplayer/lib')
setContainer('videoPlayer')
open('https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_640x360_800k.mpd')
