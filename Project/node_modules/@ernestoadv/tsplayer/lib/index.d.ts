/**
 * Sets the container to be used by the Media Player
 *
 * @param divID - The container ID
 *
 */
export declare function setContainer(divID: string): void;
/**
 * Sets the Video URL to be opened by the Media Player
 *
 * @param videoURL - Video URL to a valid MPD manifest file
 *
 */
export declare function open(videoURL: string): void;
/**
 *
 * Initiates playback of the media defined by open()
 *
 */
export declare function play(): void;
/**
 *
 * This method will pause the video playback
 *
 */
export declare function pause(): void;
/**
 * Sets the video currentTime property to a given value
 *
 * @param at - Relative time in seconds
 *
 */
export declare function seek(at: number): void;
/**
 *
 * This method sets the video to the beginning and pauses it
 *
 */
export declare function stop(): void;
/**
 *
 * Sets the source and container to null.
 * Calling this method destroys the MediaPlayer instance.
 *
 */
export declare function destroy(): void;
//# sourceMappingURL=index.d.ts.map