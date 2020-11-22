"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * Includes all necessary dash.js properties/methods
 * that allow to build a robust DASH media player.
 *
 */
var dash = __importStar(require("dashjs"));
//Create MediaPlayer object
var player = dash.MediaPlayer().create();
//Create APIs
/**
 * Sets the container to be used by the Media Player
 *
 * @param divID - The container ID
 *
 */
function setContainer(divID) {
    var container = document.getElementById(divID);
    if (!container) {
        throw new Error("Element " + divID + "not found.");
    }
    player.attachView(container);
}
exports.setContainer = setContainer;
/**
 * Sets the Video URL to be opened by the Media Player
 *
 * @param videoURL - Video URL to a valid MPD manifest file
 *
 */
function open(videoURL) {
    player.attachSource(videoURL);
}
exports.open = open;
/**
 *
 * Initiates playback of the media defined by open()
 *
 */
function play() {
    if (player.isReady())
        player.play();
}
exports.play = play;
/**
 *
 * This method will pause the video playback
 *
 */
function pause() {
    if (!player.isPaused())
        player.pause();
}
exports.pause = pause;
/**
 * Sets the video currentTime property to a given value
 *
 * @param at - Relative time in seconds
 *
 */
function seek(at) {
    /**
     * If at is greater than the duration of the video
     * set it to the return value of the duration() method
     */
    if (at > player.duration())
        player.seek(player.duration());
    /**
     * If at is smaller than 0, set it to 0
     */
    else if (at < 0)
        player.seek(0);
    /**
     * In any other case set the currentTime to the given value
     */
    else
        player.seek(at);
}
exports.seek = seek;
/**
 *
 * This method sets the video to the beginning and pauses it
 *
 */
function stop() {
    player.pause();
    player.seek(0);
}
exports.stop = stop;
/**
 *
 * Sets the source and container to null.
 * Calling this method destroys the MediaPlayer instance.
 *
 */
function destroy() {
    player.reset();
}
exports.destroy = destroy;
//# sourceMappingURL=index.js.map