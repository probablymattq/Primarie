$(document).ready(function() {
  const scrollToTopBtn = $("#scrollToTopBtn");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 60) {
      scrollToTopBtn.addClass("show");
    } else {
      scrollToTopBtn.removeClass("show");
    }
  });

  scrollToTopBtn.click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, "smooth");
  });

  const contactSection = $("#contact-name");
  const newsSection = $("#news-name");
  const servicesSection = $("#services-name");
  const repeatText = (text, times) => {
    let repeatedText = "";
    for (let i = 0; i < times; i++) {
      repeatedText += `${text}<strong>${text}</strong>`;
    }
    return repeatedText;
  };

  const textToRepeatC = "Contact&nbsp;&nbsp;/&nbsp;&nbsp;";
  const textToRepeatN = "Noutăți&nbsp;&nbsp;/&nbsp;&nbsp;";
  const textToRepeatS = "Servicii&nbsp;&nbsp;/&nbsp;&nbsp;";
  const repetitions = 100;

  if (contactSection.length) {
    contactSection.html(
        "<span>" + repeatText(textToRepeatC, repetitions) + "</span>"
    );
  }
  if (newsSection.length) {
    newsSection.html(
        "<span>" + repeatText(textToRepeatN, repetitions) + "</span>"
    );
  }
  if (servicesSection.length) {
    servicesSection.html(
        "<span>" + repeatText(textToRepeatS, repetitions) + "</span>"
    );
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

function checkCookie() {
  let user = getCookie("login");
  if (user !== "") {
    $('#signin-btn').css({
      color: "#2871fa"
    })
    $('#signin-btn-2').css({
      color: "#2871fa"
    })
  }
}

$(document).ready(function() {
  checkCookie();
});

$(document).ready(function() {
  $('.image').click(function() {
    var originalSrc = $(this).attr('src');
    var $originalImage = $('<img>').attr('src', originalSrc).addClass('original-image');

    var $modal = $('<div>').addClass('modal').append($originalImage);
    $('body').append($modal);

    $originalImage.click(function() {
      $modal.remove();
    });
  });
});