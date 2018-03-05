'use strict'

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomLetter = letters[Math.floor(Math.random()*letters.length)];

console.log(randomLetter);

document.addEventListener('keydown', () => {
    const keyName = event.key;
    console.log('keydown event\n\n' +keyName);
})


    if ( randomLetter = keyName) {
        document.getElementById("wins") +1;
    }

