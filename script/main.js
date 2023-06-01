$(document).ready(function() {
  const scrollToTopBtn = $('#scrollToTopBtn');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      scrollToTopBtn.addClass('show');
    } else {
      scrollToTopBtn.removeClass('show');
    }
  });

  scrollToTopBtn.click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
  });

  $(window).on('load resize', function() {
    var windowHeight = $(window).height();
    var contentHeight = $(document).height() - $('header').outerHeight() - $('footer').outerHeight();

    if (contentHeight < windowHeight) {
      $('footer').addClass('fixed-footer');
    } else {
      $('footer').removeClass('fixed-footer');
    }
  });

  const indexSection = $('#index-name');
  const contactSection = $('#contact-name');
  const newsSection = $('#news-name');
  const servicesSection = $('#services-name');

  const repeatText = (text, times) => {
    let repeatedText = '';
    for (let i = 0; i < times; i++) {
      repeatedText += `${text}&nbsp;&nbsp;/&nbsp;&nbsp;<strong>${text}</strong>&nbsp;&nbsp;/&nbsp;&nbsp;`;
    }
    return repeatedText;
  };

  const textToRepeatP = 'Principal';
  const textToRepeatC = 'Contact';
  const textToRepeatN = 'Noutăți';
  const textToRepeatS = 'Servicii';
  const repetitions = 100;

  if (indexSection.length) {
    indexSection.html('<span>' + repeatText(textToRepeatP, repetitions) + '</span>');
  }
  if (contactSection.length) {
    contactSection.html('<span>' + repeatText(textToRepeatC, repetitions) + '</span>');
  }
  if (newsSection.length) {
    newsSection.html('<span>' + repeatText(textToRepeatN, repetitions) + '</span>');
  }
  if (servicesSection.length) {
    servicesSection.html('<span>' + repeatText(textToRepeatS, repetitions) + '</span>');
  }
});
