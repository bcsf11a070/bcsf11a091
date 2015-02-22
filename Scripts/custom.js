$(document).ready(function () {

    $("#pp").click(function () {
        var userName = $('#un').val();

        $.getJSON("/Admin/CheckUserName?UserName=" + userName, function (data) {

            if (data) {
                $('#status').text("Valid username!");

            }
            else {
                $('#status').text("Invalid username!");
            }
        });
    });



});