let userInput;
const reverseString = function(userInput) {
    let i = 0;
    let initialArray = [];
    while (i < userInput.length){ //converts userInput to array
        initialArray[i] = userInput.slice(i,i+1);
        i++;
    }
    //console.log(initialArray);

    let secondArray = []; //creates a new array in reverse order from initalArray
    let j = 0; 
    while(j < userInput.length){
        i--;
        secondArray[j] = initialArray[i];
        j++;
    }
    //console.log(secondArray);
    
    let functionOutput;
    functionOutput = secondArray.toString(); //converts array to string

    return functionOutput.replace(/\,/g,'');//returns string without commas
};

// Do not edit below this line
module.exports = reverseString;
