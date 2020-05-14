$(function () {
    $('#loginBtn').click(function (e) { 
        e.preventDefault();
        
        // check username inpute is not empty
        let userName = $('#usernameInput').val();
        if (!userName.trim()) {
            $('#usernameAlert').removeClass('d-none');
        }

        // check password inpute is not empty
        let password = $('#passwordInput').val();
        if (!password.trim()) {
            $('#passwordAlert').removeClass('d-none');
        }


    });
});