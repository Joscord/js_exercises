// regex for whitespace
const regex = /\s+/g

// Inverted string function
const invertedStr = str => {
        // string to array 
        const strArray = str.split('');
        // reverse the array
        const invertedArray = strArray.reverse();
        // Array to string/ 
        return invertedArray.join('');
}

// palindromeChecker
const palindromeChecker = str => {
    if (typeof str !== 'string') return 'Please enter a valid string'
    const invertedString = invertedStr(str.toLowerCase());
    console.log(str.replace(regex, ''));
    console.log(invertedString.replace(regex, ''));
    if (str.replace(regex, '') === invertedString.replace(regex, '')) return "It's a Palindrome"
    else return "It's not a Palindrome"
};

// console.log(palindromeChecker('ana'));
// console.log(palindromeChecker('Ana'));
// console.log(palindromeChecker('banana'));
console.log(palindromeChecker('luz azul'))
console.log(palindromeChecker());