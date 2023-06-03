$(document).ready(function () {
  const hamburger = $(".menubutton");
  const lines = $(".line");
  const sidebar = $(".sidebar");
  const navbar = $("header");
  const overlay = $("#sidebar-overlay");
  const signin = $(".signin");

  hamburger.click(function () {
    overlay.show();

    if (sidebar.css("display") === "flex") {
      sidebar.css("display", "none");
    } else {
      sidebar.css("display", "flex");
    }

    hamburger.toggleClass("active");
    lines.toggleClass("vertical");
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      navbar.addClass("scroll-size");
    } else {
      navbar.removeClass("scroll-size");
    }
  });

  $('#signin-btn').click(function () {
    overlay.show();

    if (signin.css("display") === "flex") {
      signin.css("display", "none");
    } else {
      signin.css("display", "flex");
    }
  })
});

$(document).click(function (e) {
  if (e.target.id === "sidebar-overlay") {
    $(".sidebar").css("display", "none");
    $(".signin").css("display", "none");
    $("#sidebar-overlay").hide();
    $(".line").toggleClass("vertical");
  }
});

$(document).keydown(function (e) {
  if (e.which === 27 || e.keyCode === 27) {
    $(".signin").css("display", "none");
    $("#sidebar-overlay").hide();
  }
});

function login() {
  console.log("a");
  $('#signin-btn').css({ color: "#2871fa" })
  $(".signin").css("display", "none");
  $("#sidebar-overlay").hide();
}

