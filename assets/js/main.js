$(function(){

  new WOW().init();

  // Smoth Scrolling

  $('a[href*="#"]:not([href="#"])').click(function() {
    $('.mobile-menu').removeClass('is-open');
    $('body').removeClass('menu-is-open');
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

  // Mobile Menu

  $('.mobile-menu-btn').on('click', function(){
    $(this).toggleClass('is-open');
    $('.mobile-menu').toggleClass('is-open');
    $('body').toggleClass('menu-is-open');
  });

  // Map
  $('.map-container').click(function () {
      $('.map-container iframe').css("pointer-events", "auto");
  });

  $( ".map-container" ).mouseleave(function() {
    $('.map-container iframe').css("pointer-events", "none");
  });

  // Sticky Header

    // Set options
    var options = {
       offset: '.showHere',
       offsetSide: 'top',
       classes: {
           clone:   'main-header--clone',
           stick:   'main-header--stick',
           unstick: 'main-header--unstick'
       }
    };

    // Initialise with options
    var banner = new Headhesive('.main-header', options);
    // Headhesive destroy
    // banner.destroy();

 });
