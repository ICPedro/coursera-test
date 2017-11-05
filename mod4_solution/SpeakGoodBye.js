// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function (window) {
	// Creating object called 'byeSpeaker'
	var byeSpeaker = {};
	// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
	var speakWord = "Good Bye";
	// Attaching the 'speak' function to the 'byeSpeaker' object.
	byeSpeaker.speak = function(name) {
		console.log(speakWord + " " + name);
	}
	// Exposing the 'byeSpeaker' object to the global scope.
	window.byeSpeaker = byeSpeaker;
})(window);