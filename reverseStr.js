const reverseStr = str => {
    // type check
    if (typeof str !== 'string') return 'Please enter a valid string'
    // string to array 
    const strArray = str.split('');
    // reverse the array
    const invertedArray = strArray.reverse();
    // Array to string
    return invertedArray.join('');
}


