// Inverted string function
const invertedStr = str => {
        // string to array 
        const strArray = str.split('');
        // reverse the array
        const invertedArray = strArray.reverse();
        // Array to string
        return invertedArray.join('');
}

// palindromeChecker
const palindromeChecker = str => {
    if (typeof str !== 'string') return 'Please enter a valid string'
    invertedString = invertedStr(str.toLowerCase());
    if (str === invertedStr) return "It's a Palindrome"
    else "It's not a Palindrome"
};

