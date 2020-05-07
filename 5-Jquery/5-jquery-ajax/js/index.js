$(document).ready(function () {
    // $.ajax({
    //     type: "method",  // get , post , update, ...
    //     url: "url",      // the url ./data.json
    //     data: "data",    // data to send 
    //     dataType: "dataType", // data type json, text
    //     success: function (response) {
            
    //     }
    // });
    $.ajax({
        type: "GET",
        url: "./data1.json",
        success: function (response) {
            console.log(response);
            
        },
        error: function (error) {
            console.log(error);
            
          }
    });
});