const fibonacci = function(a) {
    let arr = [1];
    let d = 1;
    let j = 1;
    let c = 0;
    for (let i = 0; i < a; i++){
        arr.push(j);
        c = j;
        j += d; 
        d = c;
    }
    return arr[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
