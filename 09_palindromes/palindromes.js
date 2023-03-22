const palindromes = function (string) {
    // convert to lowercase
    // remove non letter characters
    // reverse
    // join with no spaces or commas
    // return string == reversed string

    const first = string.toLowerCase().match(/[a-z0-9]/g).join('');
    const reversedString = string.toLowerCase().match(/[a-z0-9]/g).reverse().join('');
    return first == reversedString;

};

// Do not edit below this line
module.exports = palindromes;
