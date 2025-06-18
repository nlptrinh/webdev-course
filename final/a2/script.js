// START
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Goodbye 'Name' to the console in 10 different languages.
// The program should say "Hello" to any name except names that start with a "JS"
// or "js", otherwise, the program should say "Goodbye". So, the final output
// on the console should look like this:
/*
Hello Alice
Hola Alice
Bonjour Alice
Hallo Alice
Ciao Alice
こんにちは Alice
안녕하세요 Alice
你好 Alice
Xin chào Alice
नमस्कार Alice

WARNING!!!
The code below currently does NOT work! It is YOUR JOB to make it work
simply by reading the comment instructions at TODO and implement the code.
*/

// TODO 1: Create a names array that has at least one "JS" or "js" name for testing and one normal name
var names = [];

// TODO 2: Go to SpeakHello.js file and read TODO 2 instruction there


// TODO 8:
// Loop over the names array and say either 'Hello' or "Goodbye" in 10 languages
// using either the helloSpeaker's or byeSpeaker's 'speak' method.
for (/* fill in parts of the 'for' loop to loop over names array */) {

  // TODO 9:
  // Retrieve the first and second letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare it
  // to lower case character 'j' afterwards.
  // Do similar with the second letter 'S/s'.
  var firstLetter =
  var secondLetter =

  // TODO 10:
  // Compare the 'firstLetter' retrieved in TODO 9 to lower case
  // 'j' and the 'secondLetter' to lower case 's'. 
  // If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
  if (/* fill in condition here */) {
    // byeSpeaker.xxxx
  } else {
    // helloSpeaker.xf    ccccccxxx
  }
}

// TODO 11: 
// Wrap the entire contents of script.js inside of an IIFE
