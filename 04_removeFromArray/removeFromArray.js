const removeFromArray = function(array, ...rest) {
    for (const a of rest){
        for (const b of array){
            if (b === a){
                console.log(array.indexOf(b));
                while (array.indexOf(b) != -1){
                    array.splice(array.indexOf(b),1);
                }
            }
        }
    }
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
