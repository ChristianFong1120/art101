// Summary.     Program for working with DOM elements
// Description. This file contains code for performing HTML manipulation via js
// @link        https://christianfong1120.github.io/art101/lab9/index.html
// @file        lab9/js/lab.js
// @author      Christian Fong, Michael Riley
// @since       5/4/22


//Store html elements of type id into variable outputEl
var outputEl = document.getElementById("info");

//Create new html element with p tag
var new1El = document.createElement("p");
new1El.id = "p";

//modify new1El's html contents
new1El.innerHTML = "This was created with JavaScript!";

//Create new html element with button tag
var new2El = document.createElement("BUTTON");
new2El.id = "button";

//modify new2El's html contents
new2El.innerHTML = "This is a button!";

//add our elements to our div we fetched earlier
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//changing css with js
document.getElementById("caption").style.color = "white";
document.getElementById("code").style.border = "thick solid azure";
