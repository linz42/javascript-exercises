const reverseString = function(string) {
    const stringLetters = [...string];
    const returnLetters = [];
    for (let i = 0; i < stringLetters.length; i++) {
        returnLetters.unshift(stringLetters[i]);
    }
    return returnLetters.join("");
};

// Do not edit below this line
module.exports = reverseString;
