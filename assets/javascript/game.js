

'use strict'


var words = ["chicken", "horse", "farmer", "haystack", "tractor"];



//Key event listener to capture at keyDown

document.addEventListener('keydown', (event) => {
    var randomWord = 
    words[Math.floor(Math.random()*words.length)];
    document.body.innerHTML =randomWord;
    console.log(randomWord)

    const keyName = event.key;
    console.log('keydown event\n\n' +keyName);
})

//Random select of word at keyDown. capture first letter?

// var randomWord = 
//     words[Math.floor(Math.random()*words.length)];
//     document.body.innerHTML =randomWord;
//     console.log(randomWord)

//How do I get underscores for each letter entry?

//loop through letters in random word
//if letter is correct enter in blank underscore & decrease number of guesses
//if letter is not correct enter in incorrect guesses & decrease number of guesses


