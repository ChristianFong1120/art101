// Summary.     Program for working w/ JQuery
// Description. This file contains code for workihng w Jquery
// @link        https://christianfong1120.github.io/art101/lab11/index.html
// @file        lab11/js/lab.js
// @author      Christian Fong, Michael Riley
// @since       5/11/22



$("#challenge").append("<button class = my-button>This was button was created with Jquery!</button>");

$("#results").append("<button class = my-button >This was button was created with Jquery!</button>");

$("#problems").append("<button class = my-button >This was button was created with Jquery!</button>");


$(".my-button").click(function(){
  $("#challenge").append("<div class = special >This was class special created with Jquery!</div>");
  $("#results").append("<div class = special >This was class special created with Jquery!</div>");
  $("#problems").append("<div class = special >This was class special created with Jquery!</div>");
});
