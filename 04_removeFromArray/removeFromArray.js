let userArray= [];
let userRemove;

const removeFromArray = function(userArray, ...userRemove) {
    let i = 0;
    let newArray =[];

    for (let userContent of userArray){
        userRemove.sort();
        if (userContent === userRemove[i]) {
            i++;
            //console.log(i);
        }
        else {
            newArray.push(userContent);
            }
        //console.log(userArray, userRemove);
        userArray = newArray;
    }
    //console.log(newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
