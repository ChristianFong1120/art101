// Summary.     Program for taking user input and manipulating the string
// Description. This file contains code for taking user input and manipulating the string
// @link        https://christianfong1120.github.io/art101/lab6/index.html
// @file        lab7/js/lab.js
// @author      Christian Fong, Michael Riley
// @since       4/27/22

function caseSwitch(){
    var name = window.prompt("Enter a string and we will switch the cases of each character: ");
    var result = "";
    for(let i = 0; i < name.length; i++){
        if(name.charCodeAt(i) < 91 && name.charCodeAt(i) > 65){
          var newchar = String.fromCharCode(name.charCodeAt(i) + 32);
          result = result.concat(newchar);
        }
        else if(name.charCodeAt(i) > 96 && name.charCodeAt(i) < 123){
          var newchar = String.fromCharCode(name.charCodeAt(i) - 32);
          result = result.concat(newchar);
        }
    }

    return result;
}

document.writeln("Input string with case switched: " , caseSwitch() , "." ," <br>");
