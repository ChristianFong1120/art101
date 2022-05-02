// Summary.     Program for working with anon functions and callbacks
// Description. This file contains code for performing callbacks and using anon functions
// @link        https://christianfong1120.github.io/art101/lab8/index.html
// @file        lab8/js/lab.js
// @author      Christian Fong, Michael Riley
// @since       5/2/22


//Multiplies parameter by 10
function multByTen(x){
    var res = x * 10;
    return res;
}

//printing out parameter by 10
console.log(multByTen(7));
console.log(multByTen(15));
console.log(multByTen(300));

//create array
const arr = [3,2,65,93];

//print array before and after being passed to multByTen
console.log("My array: " , arr);
console.log("My array multiplied by 10: ", arr.map(multByTen));

//create anon function to div each parameter by 5
var newArr = arr.map(function(x){
    var result = x / 5;
    return result;
});

// will return [0.6, 0.4, 13, 18.6]
console.log("My array divided by 5 using anon function: ", newArr);
