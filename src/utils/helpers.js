// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

// Use constants instead of strings 
export const vars = {
    
    stopwatch: 'Stopwatch',
    countdown: 'Countdown',
    tabata: 'Tabata',
    xy: 'XY',
    work: 'work', 
    rest: 'rest', 
    pause: 'pause', 
    reset: 'reset',
    end: 'end',
}

export const secondsToTime = (seconds) => {
    const hrs = Math.floor(seconds / (60 * 60));
    const mins  =  Math.floor(seconds % (60 * 60) / 60);
    const secs =  Math.floor(seconds % (60 * 60) % 60); 
    return `${hrs}:${mins}:${secs}`;
  }

