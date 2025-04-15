const palindromes = function (a) {
    let arr = [];
    for (let i = 0; i < a.length; i++){
        arr.push(a[i]);
    }
    arr = arr.map((item) => item.toLowerCase());
    arr = arr.filter((item) => (97 <= item.charCodeAt(0) && item.charCodeAt(0) <= 122));
    let newarr = [];
    for(let i = arr.length-1; i >= 0; i--){
        newarr.push(arr[i]);
    }
    return arr.join('') === newarr.join('');
};


// Do not edit below this line
module.exports = palindromes;
