// TODO 2: Create a greetings array with 10 translations of 'Hello'
var greetings = [];

// TODO 3: Rewrite this function such that it is attached to an
// object named 'helloSpeaker' instead of being a standalone function.
function speak(name) {
    for (var i = 0; i < greetings.length; i++) {
            console.log(greetings[i] + " " + name);
        }
}

// TODO 4: 
// Wrap the entire contents of SpeakHello.js inside of an IIFE. 
// Expose the 'helloSpeaker' object to the global scope
