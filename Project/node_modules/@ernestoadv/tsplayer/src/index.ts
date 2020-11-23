/**
 * 
 * Includes all necessary dash.js properties/methods 
 * that allow to build a robust DASH media player.
 * 
 */
import * as dash from "dashjs";

//Create MediaPlayer object

let player : dash.MediaPlayerClass = dash.MediaPlayer().create();

//Create APIs

/**
 * Sets the container to be used by the Media Player
 * 
 * @param divID - The container ID
 * 
 */
export function setContainer(divID:string) {
    let container = document.getElementById(divID);
    if(!container) {
        throw new Error("Element " + divID + "not found.");
    }
    player.attachView(container);
}

/**
 * Sets the Video URL to be opened by the Media Player
 * 
 * @param videoURL - Video URL to a valid MPD manifest file
 * 
 */
export function open(videoURL:string) {
    player.attachSource(videoURL);
}

/**
 * 
 * Initiates playback of the media defined by open()
 * 
 */
export function play() {
    if(player.isReady())
        player.play();
}

/**
 * 
 * This method will pause the video playback
 * 
 */
export function pause() {
    if(!player.isPaused())
        player.pause();
}

/**
 * Sets the video currentTime property to a given value
 * 
 * @param at - Relative time in seconds
 * 
 */
export function seek(at:number) {
    /**
     * If at is greater than the duration of the video
     * set it to the return value of the duration() method
     */
    if(at > player.duration()) 
        player.seek(player.duration())
    /**
     * If at is smaller than 0, set it to 0
     */
    else if(at < 0)
        player.seek(0)
    /**
     * In any other case set the currentTime to the given value
     */
    else
        player.seek(at);
}

/**
 * 
 * This method sets the video to the beginning and pauses it
 * 
 */
export function stop() {
    player.pause();
    player.seek(0);
}

/**
 * 
 * Sets the source and container to null. 
 * Calling this method destroys the MediaPlayer instance.
 * 
 */
export function destroy() {
    player.reset();
}
