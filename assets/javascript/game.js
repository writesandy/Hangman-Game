

'use strict'


var words = ["chicken", "horse", "farmer", "haystack", "tractor"];



//Random word selected
var randomWord = words[Math.floor(Math.random()*words.length)];



console.log(randomWord);


for (var i=0; i < randomWord.length; i++) {
    var wordBlanks = document.createElement("li");
    wordBlanks.innerHTML = "__";
    document.getElementById('blanks').appendChild(wordBlanks);
}

// document.body.innerHTML = "___";

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' +keyName);
})


// html for entry fields i.e., number of guesses remaining, section for incorrect word guesses
// when key is struck start game
// choose random word
// place random word on screen as fillable lines
// place word spaces on html page
// user hits letter that is correct > decrease number of guesses > enter letter(s) on spaces
// user hits letter that is not correct > decrease number of guesses > enter letter(s) to incorrect guesses
//  


