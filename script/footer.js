$(document).ready(function () {
    var windowHeight = $(window).height();
    var bodyHeight = $("body").height();

    if (bodyHeight < windowHeight) {
        $("footer").css({ position: "fixed" });
    }
});
