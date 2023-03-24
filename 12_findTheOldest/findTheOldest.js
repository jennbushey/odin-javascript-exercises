const findTheOldest = function (person) {

    // my original solution. Couldn't figure out how to check for an empty array
    // const oldestDead = person.sort((a, b) => {
    //     const lastGuy = a.yearOfDeath - a.yearOfBirth;
    //     const nextGuy = b.yearOfDeath - b.yearOfBirth;
    //     return lastGuy > nextGuy ? -1 : 1;
    // });
    // return (oldestDead[0]);



    
const age = function (birth, death) {
    if(!death){ //NOT DEATH!! If there's an empty value in death. Duh. 
        death = new Date().getFullYear();
    }
    return death - birth;
}

 const oldest = person.sort((a, b) => {
        const lastGuy = age(a.yearOfBirth, a.yearOfDeath); //just pass to an age function instead of doing the math here. Duh. 
        const nextGuy = age(b.yearOfBirth, b.yearOfDeath);
        return lastGuy > nextGuy ? -1 : 1;
    });
    console.log(oldest);
    return (oldest[0]);
    
};

// Do not edit below this line
module.exports = findTheOldest;
