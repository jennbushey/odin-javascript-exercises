let string;
let num;

const repeatString = function(string,num) {
    let solution = "";
    for(let i=1;i<=num;i++){
        solution = solution + string;
        //console.log(solution,num,i);
    }
    return solution;
}
// Do not edit below this line
module.exports = repeatString;
