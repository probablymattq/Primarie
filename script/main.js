$(document).ready(function () {
  const scrollToTopBtn = $("#scrollToTopBtn");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      scrollToTopBtn.addClass("show");
    } else {
      scrollToTopBtn.removeClass("show");
    }
  });

  scrollToTopBtn.click(function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });

  const indexSection = $("#index-name");
  const contactSection = $("#contact-name");
  const newsSection = $("#news-name");
  const servicesSection = $("#services-name");

  const repeatText = (text, times) => {
    let repeatedText = "";
    for (let i = 0; i < times; i++) {
      repeatedText += `${text}&nbsp;&nbsp;/&nbsp;&nbsp;<strong>${text}</strong>&nbsp;&nbsp;/&nbsp;&nbsp;`;
    }
    return repeatedText;
  };

  const textToRepeatP = "Principal";
  const textToRepeatC = "Contact";
  const textToRepeatN = "Noutăți";
  const textToRepeatS = "Servicii";
  const repetitions = 100;

  if (indexSection.length) {
    indexSection.html(
        "<span>" + repeatText(textToRepeatP, repetitions) + "</span>"
    );
  }
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
  let login = cname + "=", decodedCookie = decodeURIComponent(document.cookie), ca = decodedCookie.split(';');
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
    $('#signin-btn').css({color: "#2871fa"})
  }
}

$(document).ready(function() {
  checkCookie();
});
