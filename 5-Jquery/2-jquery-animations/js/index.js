$(document).ready(function () {
    // $(selector).animate(object options)
    // $(selector).animate(object options, time)
    // $(selector).animate(object options, time, callbacl)
    // option the styles that will be changed
    // time by mileseconds
    // callback is a function will run after finishing the animation
    $("#btn").click(function (e) { 
        e.preventDefault();
        $("#someDiv").animate({
            'left': '300px',
            'opacity': '0'
        },3000, function () {
            alert('done');
          })
    });
    $('#someDiv').mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        // $('#someDiv').stop()
        $(this).stop()
    });

});