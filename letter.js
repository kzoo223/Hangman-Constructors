var Letter = function(lett) {
	
// property to store the actual letter	
  this.letter = lett;
// property/boolean if the letter can be shown 
  this.appear = false;
  this.letterRender = function() {
		//if appear is false then show the _
    if (this.appear === false){
      return "_";
    }
    //else appear is true then show character
    else{
      return this.letter;
    }
	};
};

// export to use in word.js
module.exports = Letter;