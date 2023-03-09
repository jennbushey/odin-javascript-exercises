let userArray= [];
let userRemove;
const removeFromArray = function(userArray, userRemove) {
let newArray =[];
for (let userContent of userArray){
    if (userContent === userRemove) {
        continue;
    }
    else {
        newArray.push(userContent);
        }
    //console.log(userArray, userRemove);
    }
    //console.log(newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
