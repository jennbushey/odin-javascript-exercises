const fibonacci = function (value) {
    // first solution
    let array = [1, 1];
    if (value < 0) return "OOPS"
    if (count === 0) return 0; //didn't have a 0 case

    for (i = 0; i <= value; i++) {
        array.push(array[i] + array[i + 1]);
    }
    console.log(array);
    return array[value - 1];

};

// Do not edit below this line
module.exports = fibonacci;
