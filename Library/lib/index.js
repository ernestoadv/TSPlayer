"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.stop = exports.seek = exports.pause = exports.play = exports.open = exports.setContainer = void 0;
function setContainer(divID) {
    console.log('container: ' + divID);
}
exports.setContainer = setContainer;
function open(videoURL) {
    console.log('open: ' + videoURL);
}
exports.open = open;
function play() {
    console.log('play');
}
exports.play = play;
function pause() {
    console.log('pause');
}
exports.pause = pause;
function seek(at) {
    console.log('seek: ' + at);
}
exports.seek = seek;
function stop() {
    console.log('stop');
}
exports.stop = stop;
function destroy() {
    console.log('destroy');
}
exports.destroy = destroy;
//# sourceMappingURL=index.js.map