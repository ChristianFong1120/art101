// Summary.     Program for wokring with arrays and objects
// Description. This file contains code for describing Christian's car and our forms of transportation
// @link        https://christianfong1120.github.io/art101/lab6/index.html
// @file        lab4/js/lab6.js
// @author      Christian Fong, Michael Riley
// @since       4/25/22

//declare array and object
const myTransport = ["Bus", "Car", "Bike"];
const myMainRide = {
    make: "Subaru",
    model: "BRZ",
    color: "Gray",
    year: 2014,
    age: function(){
        2022 - year;
      }
}

//output
document.writeln("My forms of trnsportation: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
