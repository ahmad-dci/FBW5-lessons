$(function () {
    $('#loginBtn').click(function (e) { 
        e.preventDefault();
        let userName = $('#usernameInput').val();
        if (!userName.trim()) {
            $('#usernameAlert').removeClass('d-none');
        }
    });
});