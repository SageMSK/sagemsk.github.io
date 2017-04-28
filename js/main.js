$(document).ready(function () {
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
  
});
