(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function(){
    $('body').css("display", "none");
    $('body').fadeIn(2000);
  })

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  var removeLogo = function() {
    if($(window).scrollTop() < 100) {
      $("#logo").addClass("logoName");
      $("#mainNav").addClass("blackText");
    } else {
      $("#logo").removeClass("logoName");
      $("#mainNav").addClass("blackText");
    }
  }
  // Collapse now if page is not at top
  navbarCollapse();
  removeLogo();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  $(window).scroll(removeLogo);


})(jQuery); // End of use strict

