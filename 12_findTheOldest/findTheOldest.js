const findTheOldest = function(a) {
    let j = a.map((item) => item.yearOfDeath - item.yearOfBirth);
    let max = 0; 
    for (let i = 0; i < j.length; i++){
        if (j[i] > max){
            max = j[i];
        }
    }
    return a[j.indexOf(max)];
};

// Do not edit below this line
module.exports = findTheOldest;
