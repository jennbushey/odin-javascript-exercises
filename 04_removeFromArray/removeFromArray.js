
const removeFromArray = function(userArray, ...userRemove) {
    //got solution
    let newArray =[]; //matches solution  
    userArray.forEach((item) => {
        if(!userRemove.includes(item)){
            newArray.push(item); //had this
        }
    });
    return newArray; // matches solution 
    
};
    

    //console.log(newArray);
    //return newArray;
  
    /* junk
    this whole thing doesn't at all match the solution. This is the edited version of last commit. Passed some tests though and then I was working on it more before I looked at the bullshit solution.  
    for (let remove of userRemove){
        for (let userContent of userArray){
            if (userContent === remove) {
                continue;
            } else {
                newArray.push(userContent);
            }
            //console.log(userArray, userRemove);
            //console.log(newArray);
        }
        //userArray = newArray; creates infinite loop
    } */
    
// Do not edit below this line
module.exports = removeFromArray;
