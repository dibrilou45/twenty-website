(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        smartSpeed: 2500,
        responsiveClass: true,
        responsive: {
            0:{
                items: 1,
            },
            480:{
                items: 1,
            },
            767:{
                items: 1,
            },
            992:{
                items: 2,
                dots: true,
            },
            1320:{
                items: 2.6,
                dots: true,
            }
        }
    });


    $('.header-area').sticky({
        topSpacing:0
    });

            
    $('.navigation-area').slicknav({
         prependTo: "header.header-area .row"
    });

    
    /*----------counter-----------*/
    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $(".popup-form").on('click', function(){
        $("#popup-form-area").addClass("active-form");
    });        
    
    $(".close-form").on('click', function(){
        $("#popup-form-area").removeClass("active-form");
    }); // Off Canvas Menu end


    });

    jQuery(window).load(function() {
        $("#preloader").fadeOut(1000); // this will be active for 

    });

}(jQuery));