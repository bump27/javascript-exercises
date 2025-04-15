const sumAll = function(a,b) {
    sum = 0;
    if (a < b){
        for (let i =a; i <= b; i++){
            sum += i; 
        }
    }
    else {
        for (let i =b; i <= a; i++){
            sum += i; 
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
