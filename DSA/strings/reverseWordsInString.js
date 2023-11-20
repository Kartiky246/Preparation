// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

var reverseWords = function(s) {
    const wordsArray = s.split(/\s+/).filter(word => word.length > 0);

    // Reverse the array of words and join them back into a string
    const reversedString = wordsArray.reverse().join(" ");

    return reversedString;
};