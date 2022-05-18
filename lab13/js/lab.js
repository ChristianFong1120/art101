// Summary.     Program for working w/ loops
// Description. This file contains code for working w loops
// @link        https://christianfong1120.github.io/art101/lab13/index.html
// @file        lab13/js/lab.js
// @author      Christian Fong, Michael Riley
// @since       5/18/22

function fizzBuzz(){
  var c = 0;
  var string = "";
  while(c <= 200){
    if(c % 5 == 0 && c % 3 == 0 && c % 7 == 0){
      string +=  c + " FizzBuzzBoom!" + "<br>";

    }
    else if(c % 5 == 0 && c % 7 == 0){
       string += c + " FizzBoom!" + "<br>";

    }
    else if(c % 5 == 0 && c % 3 == 0){
        string += c + " FizzBuzz!" + "<br>";

    }
    else if(c %  3== 0){
        string += c + " Fizz!" + "<br>";

    }
    else if(c % 5 == 0){
        string += c + " Buzz!" + "<br>";

    }
    else if(c % 7 == 0){
        string += c + " Boom!" + "<br>";

    }
    c++;
  }
  $("#output").html(string);

}


$("#my-button").click(function(){
    fizzBuzz();

})
