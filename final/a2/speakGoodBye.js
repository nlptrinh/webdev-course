// TODO 5: Create an arrays of Goodbye in 10 arbitrary languages
var farewell = [];

// TODO 6: Rewrite this function such that it is attached to an
// object named 'goodbyeSpeaker' instead of being a standalone function.
function speak(name) {
    for (var i = 0; i < farewell.length; i++) {
            console.log(farewell[i] + " " + name);
        }
}

// TODO 7: 
// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE. 
// Expose the 'goodbyeSpeaker' object to the global scope
