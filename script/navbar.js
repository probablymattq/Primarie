$(document).ready(function() {
  const hamburger = $(".menubutton");
  const lines = $(".line");
  const sidebar = $(".sidebar");
  const navbar = $("header");

  hamburger.click(function() {
    sidebar.toggleClass("show");

    if (sidebar.css("display") === "flex") {
      sidebar.css("display", "none");
    } else {
      sidebar.css("display", "flex");
    }

    hamburger.toggleClass("active");
    lines.toggleClass("vertical");
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 60) {
      navbar.addClass("scroll-size");
    } else {
      navbar.removeClass("scroll-size");
    }
  });
});
