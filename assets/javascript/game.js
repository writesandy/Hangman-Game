

'use strict'

// word variables
    

var words = ["chicken", "horse", "farmer", "haystack", "tractor"];

//Random word selected


var randomWord = words[Math.floor(Math.random()*words.length)];
console.log(randomWord);


for (var i=0; i < randomWord.length; i++) {
    var wordBlanks = document.createElement("li");
    wordBlanks.innerHTML = "__";
    document.getElementById('blanks').appendChild(wordBlanks);
    }



const compareWord = function () {
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' +keyName);
    randomWord.search("keyName");
    document.getElementById("badGuess").innerHTML = pos;

})


};

compareWord();



// Create function 
// using event listener use keyName and find if randomWord includes keyName

