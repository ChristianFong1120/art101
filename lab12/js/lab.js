// Summary.     Program for working w/ conditionals
// Description. This file contains code for working w conditionals
// @link        https://christianfong1120.github.io/art101/lab12/index.html
// @file        lab12/js/lab.js
// @author      Christian Fong, Michael Riley
// @since       5/16/22

function sortingHat(str){
  var length = str.length;
  var rem = length % 4;
  if(rem == 0){
    return "Gryffindor";
  }
  else if(rem == 1){
    return "Ravenclaw";
  }
  else if(rem == 2){
    return "Slytherin";
  }
  else{
    return "Hufflepuff";
  }
}


$("#my-button").click(function(){
    text = "<p><b>The sorting hat has placed you in " + sortingHat($("input").val()) +  "</b></p>";
    $("#output2").html(text);
})
