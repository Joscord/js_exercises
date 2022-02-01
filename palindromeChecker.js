const regex = /\s+/g

const invertedStr = str => {
        const strArray = str.split('');
        const invertedArray = strArray.reverse();
        return invertedArray.join('');
}

const palindromeChecker = str => {
    if (typeof str !== 'string') return 'Please enter a valid string'
    const invertedString = invertedStr(str).toLowerCase();
    const normalString = str.toLowerCase();
    if (normalString.replace(regex, '') === invertedString.replace(regex, '')) return "It's a Palindrome"
    else return "It's not a Palindrome"
};

console.log(palindromeChecker('ana'));
console.log(palindromeChecker('Ana'));
console.log(palindromeChecker('banana'));
console.log(palindromeChecker('luz azul'))
console.log(palindromeChecker());