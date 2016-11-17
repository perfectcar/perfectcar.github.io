$(function(){

  new WOW().init();

  // Smoth Scrolling

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      var calc = target.offset().top;

      if (target.length) {
        $('html, body').animate({
          scrollTop: calc
        }, 1000);
        return false;
      }
    }
  });

// Shrinking Header

$(window).scroll(function() {
  var scroll = getCurrentScroll();
    if ( scroll >= 150 && $(window).width() > 992 && $('body').hasClass('interior-page') ) {
      $('.main-header').addClass('is-scrolling');
    } else {
      $('.main-header').removeClass('is-scrolling');
    }
});

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
  }

 });
