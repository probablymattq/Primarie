$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        var inputName = $('#name').val();
        var inputEmail = $('#email').val();
        var inputNumber = $('#number').val();
        var inputMessage = $('#message').val();

        $.ajax({
            type: 'POST',
            url: 'php/contactdb.php',
            data: {
                action: 'deleteNews',
                name: inputName,
                email: inputEmail,
                number: inputNumber,
                content: inputMessage
            },
            success: function(response) {
                $('form')[0].reset();
                var data = JSON.parse(response);
                if (data.success === true) {
                    $('#submitted').css({
                        display: "inline-block"
                    });
                }
            }
        });
    });
});