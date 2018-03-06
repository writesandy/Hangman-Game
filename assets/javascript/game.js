

'use strict'

// word variables
    

var words = ["chicken", "horse", "farmer", "haystack", "tractor"];

//Random word selected

var goodGuess = [];
var badGuess = [];
var guessLetters = [];


var randomWord = words[Math.floor(Math.random()*words.length)];
console.log(randomWord);


for (var i=0; i < randomWord.length; i++) {
    var wordBlanks = document.createElement("li");
    wordBlanks.innerHTML = "__";
    document.getElementById('blanks').appendChild(wordBlanks);
    }



const compareWord = function () {
document.addEventListener('keydown', (event) => {

    //Get input value

    const keyName = event.key;
    console.log('keydown event\n\n' +keyName);

    //check random word

    var pos = randomWord.search("keyName");
    console.log('pos:' +pos)

    //Does character exist in randomWord

    var character = keyName;

    if (pos <= 0) {
        console.log(pos);
        push.character(goodGuess);
        console.log('goodGuess' +goodGuess)
        
        //push goodGuess to array

    }

    // randomWord.search("keyName");
    // document.getElementById("badGuess").innerHTML = pos;

})


};

compareWord();


