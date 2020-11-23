//Require the needed funcctions from the library created previously
const { setContainer, open, play, pause, stop, seek, destroy } = require('@ernestoadv/tsplayer/lib')
setContainer('videoPlayer')
open('https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_640x360_800k.mpd')

//Set button functionality
document.getElementById('play').onclick = function(){play()}
document.getElementById('pause').onclick = function(){pause()}
document.getElementById('seek').onclick = function(){seek(parseInt(document.getElementById("seek-at").value))}
document.getElementById('stop').onclick = function(){stop()}
document.getElementById('destroy').onclick = function(){destroy()}
