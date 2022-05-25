// Summary.     Program for working w/ AJAX
// Description. This file contains code for working w AJAX
// @link        https://christianfong1120.github.io/art101/lab15/index.html
// @file        lab15/js/lab.js
// @author      Christian Fong, Michael Riley
// @since       5/25/22

function getAjax(){
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.chucknorris.io/jokes/random",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            id: 123,
            api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log("yes");
        $("#output").html(data.value);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
}

$("#my-button").click(function(){
    getAjax();
})