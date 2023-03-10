const sumAll = function(a,b) {
    
    if (typeof a !== "number" || typeof b !== "number") return "ERROR"; //my answer. Doesn't handle decimals.
    //if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"; //solution. Where does number.isinteger come from? ALSO doesn't handle decimals.

    if (a < 0 || b < 0)  return "ERROR";
   
    if (a > b) {
        let j = b;
        let k = a;
        a = j;
        b = k;
    } 
     
    let c = 0;
    for (;a<=b;a++){
            c += a;
    }

    return c;
};

// Do not edit below this line
module.exports = sumAll;
