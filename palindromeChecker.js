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
    const invertedString = invertedStr(str.toLowerCase());
    if (str === invertedString) return "It's a Palindrome"
    else "It's not a Palindrome"
};

console.log(palindromeChecker('ana'));
console.log(palindromeChecker('Ana'));
console.log(palindromeChecker('Banana'));
console.log(palindromeChecker());