const reverseString = function(originalString) {
    let originalChar = Array.from(originalString);
    len = originalChar.length;

    let newChar = Array(len);
    for (let i=0; i<(len+1); i++)
    {
        newChar[i] = originalChar[len-i];
    }
    newString = newChar.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
