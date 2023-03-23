const fibonacci = function (value) {
    // first solution
    let array = [1, 1];
    if (value < 0) return "OOPS"

    for (i = 0; i <= value; i++) {
        array.push(array[i] + array[i + 1]);
    }
    console.log(array);
    return array[value - 1];
};

// Do not edit below this line
module.exports = fibonacci;
