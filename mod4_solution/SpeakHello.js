// Wrap the entire contents of SpeakHello.js inside of an IIFE
(function(window) {
	// Creating the object 'helloSpeaker'
	var helloSpeaker = {};
	// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
	var speakWord = "Hello";
	// Attaching the 'speak' function to the 'helloSpeaker' object.
	helloSpeaker.speak = function (name){
  		console.log(speakWord + " " + name);
	}
	// Exposing the 'helloSpeaker' object to the global scope.
	window.helloSpeaker = helloSpeaker;
})(window);