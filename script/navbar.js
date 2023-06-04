$(document).ready(function() {
  const hamburger = $(".menubutton");
  const lines = $(".line");
  const sidebar = $(".sidebar");
  const navbar = $("header");
  const overlay = $("#sidebar-overlay");
  const signin = $(".signin");

  hamburger.click(function() {
    overlay.show();

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

  function getCookie(cname) {
    let login = cname + "=",
        decodedCookie = decodeURIComponent(document.cookie),
        ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(login) === 0) {
        return c.substring(login.length, c.length);
      }
    }
    return "";
  }


  $('#signin-btn').click(function() {
    if (getCookie("login") === "true") {
      logout();
    } else {
      overlay.show();
      if (signin.css("display") === "flex") signin.css("display", "none")
      else signin.css("display", "flex")
    }
  })

  $('#signin-btn-2').click(function() {
    if (getCookie("login") === "true") {
      logout();
    } else {
      $(".sidebar").css("display", "none");
      $(".signin").css("display", "none");
      $("#sidebar-overlay").hide();
      $(".line").toggleClass("vertical");
      overlay.show();
      if (signin.css("display") === "flex") signin.css("display", "none")
      else signin.css("display", "flex")
    }
  })
});

$(document).click(function(e) {
  if (e.target.id === "sidebar-overlay") {
    $(".sidebar").css("display", "none");
    $(".signin").css("display", "none");
    $("#sidebar-overlay").hide();
    $(".line").toggleClass("vertical");
  }
});

$(document).keydown(function(e) {
  if (e.which === 27 || e.keyCode === 27) {
    if ($(".sidebar").css("display") !== "flex") {
      $(".signin").css("display", "none");
      $("#sidebar-overlay").hide();
    }
  }
});

function login() {
  let username = $("#username").val();
  let password = $("#password").val();
  if (username === "admin" && password === "admin") {
    $('#signin-btn').css({
      color: "#2871fa"
    })
    $('#signin-btn-2').css({
      color: "#2871fa"
    })
    $(".signin").css("display", "none");
    $("#sidebar-overlay").hide();
    setCookie("login", "true", 1);
    location.reload();
  } else {
    $(".signin").addClass("shake");
    setTimeout(function() {
      $(".signin").removeClass("shake");
    }, 500);
  }
}

function logout() {
  $('#signin-btn').css({
    color: "#1d1d1d"
  })
  $('#signin-btn-2').css({
    color: "#1d1d1d"
  })

  setCookie("login", "", -1);
  location.reload();
}

function setCookie(cname, cvalue, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}