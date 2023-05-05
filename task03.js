'use strict';

const backPhrase = (phrase) => {
    let reverse = "";
    for ( let i = phrase.length - 1; i >= 0; i--) {
        reverse += phrase[i];
    }
    return reverse;
}

console.log(backPhrase ("Привет мир"));

