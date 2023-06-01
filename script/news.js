$(document).ready(function() {
    $('#openFormButton').click(function() {
        $('#formContainer').show();
        $('#overlay').show();
    });

    $('#closeFormButton').click(function() {
        $('#formContainer').hide();
        $('#overlay').hide();
    });
});

$(document).keydown(function(e) {
    if (e.which === 27 || e.keyCode === 27) {
        $('#formContainer').hide();
        $('#overlay').hide();
    }
});
