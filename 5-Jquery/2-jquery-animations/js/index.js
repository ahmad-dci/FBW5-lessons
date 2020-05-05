$(document).ready(function () {
    // $(selector).animate(object options)
    // $(selector).animate(object options, time)
    // $(selector).animate(object options, time, callbacl)
    // option the styles that will be changed
    // time by mileseconds
    // callback is a function will run after finishing the animation
    // click event btn
    $("#btn").click(function (e) { 
        e.preventDefault();
        $("#someDiv").animate({
            'left': '300px',
            'opacity': '0'
        },3000, function () {
            alert('done');
          })
    });

    // mousemoveevent for someDiv
    $('#someDiv').mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        // $('#someDiv').stop()
        $(this).stop()
    });

    $('.container > div:nth-child(1)').animate({
        'left': '350px'
    }, 2000)

});
