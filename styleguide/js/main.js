
  $(document).ready(function(){
      $('.slider').slick({
          infinite: true,       // Infinite loop
          slidesToShow: 1,      // Show 1 slide at a time
          slidesToScroll: 1,    // Scroll 1 slide at a time
          autoplay: true,       // Enable auto-scroll
          autoplaySpeed: 4000,  // Slide change every 2s
          arrows: true,        // Hide prev/next buttons (optional)
          dots: true,           // Enable navigation dots
          responsive: [
              {
                  breakpoint: 768, // Mobile screens
                  settings: {
                      slidesToShow: 1
                  }
              }
          ]
      });
  });
