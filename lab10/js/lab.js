// Summary.     Program for working with events
// Description. This file contains code for performing events via js
// @link        https://christianfong1120.github.io/art101/lab10/index.html
// @file        lab10/js/lab.js
// @author      Christian Fong, Michael Riley
// @since       5/9/22

//get button
var buttonEvent = document.getElementById('my-button');

//Borrowed nameSort from Lab 7
function sortName(){
  var user = window.prompt("Hi, please tell me your name so I can sort.");
  console.log("User Name: ", user);

  var arr = user.split('');

  console.log("Name split into an array: ", arr);

  var sortArr = arr.sort();

  console.log("Sorted name array: ", sortArr);

  var nameSorted = sortArr.join('');
  console.log("Sorted name: ", nameSorted);

  //get output tag and store sorted name
  var outputEl = document.getElementById("output");
  outputEl.innerHTML = nameSorted;

}

//listen for event
buttonEvent.addEventListener('click', sortName);
