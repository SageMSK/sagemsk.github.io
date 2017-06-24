$(document).ready(function () {
  // Scroll Back To Top
  var offset = 250; // users scroll to 250px
  var duration = 300; // 300 ms
  var backToTopBtn = '.back-to-top';

  $(window).scroll(function () {
    
    if ($(this).scrollTop() > offset) {
      $(backToTopBtn).fadeIn(duration);
    } else {
      $(backToTopBtn).fadeOut(duration);
    }

  });

  $(backToTopBtn).click(function (event) {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, duration);

    return false;
  });

  // Scroll to Projects
  $('.to-projects').on('click', function () {

    $('html, body').animate({
      'scrollTop': $('#projects').offset().top
    }, 500);

    return false;
  });
  
});
