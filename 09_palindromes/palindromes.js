const palindromes = function (phrase) {

    // Remove all punctuation and spaces from the string
    clean = phrase.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    
    // Convert all letters to lowercase
    lower = clean.toLowerCase()

    // Convert string into individual characters
    chars = lower.split('');

    // Find total length of string/array
    len = chars.length;

    // Check if characters match when counting 
    // up and down the array at the same time
    for (let i=0; i<len; i++)
    {
        if (chars[i] == chars[len-1-i]) 
        {continue;}
        else {return false}
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
