// require your letter objects
var Letter = require("./letter.js")

var Word = function(wrd){
// property to store the string wrd
	this.word = wrd;

// a collection of letter objects
	this.letters = [];
	
// property is the word found?
	this.found = false;

	this.getLets = function() {
// populate the collection above with new Letter objects
	for ( var i =0; i<this.word.length; i++){
		var wordLetter = new Letter(this.word[i])
		this.letters.push(wordLetter)
	}
	};
	
	//found the current word
	this.didWeFindTheWord = function() {
		//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
		if(this.letters.every(function(lett){
			return lett.appear===true;
			})){
			this.found = true;
			return true;
		};
		
	};

	this.checkIfLetterFound = function(guessLetter) {

// iterate through the collection of letter Objects
	for (i=0; i<this.letters.length; i++){
			var actualLetter = this.letters[i]
			// if guessLetter matches Letter property, the letter object should be shown
			if (guessLetter == actualLetter.letter){
				return actualLetter.letter
			}
	}

	
	this.wordRender = function() {
// render the word based on if letters are found or not found
		var str = "";
		this.letters.forEach(function(lett){
			var currLetter = lett.letterRender();
			str += currLetter
		});
		return str;
	};
}

// export to use in main.js
module.exports = Word;