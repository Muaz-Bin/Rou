$(document).ready(function(){
   $('html').smoothScroll();

   $(window).scroll(function () {
      var $scrolling = $(this).scrollTop();
      var stickyMenu = $(".sticky-menu");
      if ($scrolling >= 200) {
          stickyMenu.addClass('sticky');
      } else {
          stickyMenu.removeClass('sticky');
      };
      if ($scrolling > 300) {
          $("#scrollToTop").fadeIn(1000);
      } else {
        $("#scrollToTop").fadeOut(500);
      };
  });


    $('.team-slider').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:8000,
        smartSpeed:1000,
        mouseDrag:true,

        responsive:{
         0:{
           items:1,
         },
         568:{
             items:2,
             margin:20,
         },
         992:{
           items:4,
           margin:20,
         },
       }
     });


     $('.testimonial-slider').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        smartSpeed:1000,
      //   animateIn: "fadeIn",
        mouseDrag:true,
     });


     new WOW().init();
});