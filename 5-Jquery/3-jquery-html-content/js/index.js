$(function () {
    // add click event to btn1
    $('#btn1').click(function (e) { 
        e.preventDefault();
        let message = $('#someDiv > p').text();
        alert(message)
    });

    // add click event to btn2
    $('#btn2').click(function (e) { 
        e.preventDefault();
        $('#someDiv > h2').text("Hello FBW5");
    });
});