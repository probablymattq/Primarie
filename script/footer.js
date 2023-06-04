$(document).ready(function () {
    var windowHeight = $(window).height();
    var bodyHeight = $("body").height();
    var footerHeight = $("footer").height();

    if (bodyHeight < windowHeight - footerHeight) {
        $("footer").css({ position: "fixed" });
    } else {
        $("footer").css({ position: "relative" });
    }
});
