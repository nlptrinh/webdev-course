yaakovGreeter.sayHello();
johnGreeter.sayHi();

// Immediately Invoked Function Expression (IIFE) is a JavaScript function that
// runs immediately when it's defined
// and helps keep variables private (so they don’t conflict with other files)
// It looks like this:

(function (name) {
  console.log("Hello " + name);
})("Coursera!");




