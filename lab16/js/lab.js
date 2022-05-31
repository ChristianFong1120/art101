// Summary.     Program for working w/ JSON and APIs
// Description. This file contains code for working w JSON
// @link        https://christianfong1120.github.io/art101/lab15/index.html
// @file        lab16/js/lab.js
// @author      Christian Fong, Michael Riley
// @since       5/30/22

function getAjax(){
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            //id: 123,
            //api_key: "blahblahblah",
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
        $("#title").html(data.title);
        var image = "<img src =" + data.img + "></img>";
        $("#image").append(image);

        var alt = "<p>" + data.alt + "</p>";
        $("#image").append(alt);


    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
}
getAjax();
