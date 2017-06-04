$(document).ready(function () {

    //Active NiceScroll
    $("html").niceScroll({
        cursorcolor: "#ff8b38",
        cursorwidth: "6px",
        cursorborder: 0,
        scrollspeed: 60,
        mousescrollstep: 50
    });


    $(function () {
        'use strict';
        $(window).scroll(function () {
            var navbar = $('.navbar');

            if ($(window).scrollTop() >= navbar.height()) {
                navbar.addClass('nav-scrolled');
            } else {
                navbar.removeClass('nav-scrolled');
            }
        });

        // Tab Swiching
        $('.tab-section ul li').click(function () {
            // Add Class Selected to active tab
            $(this).addClass('selected').siblings().removeClass('selected');

            $('.tab-section .tab-content >div').hide();

            $($(this).data('class')).fadeIn();

        })
    });

    // Loading Spinner 
    $(window).load(function () {

        $(".loading .spinner").fadeOut(1000,
            function () {
                $(".loading").fadeOut(1000,
                    function () {
                        $(".loading").remove();
                    });
            });

    });
    
    // Smoth Scroll To Website Section
    $('.navbar a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 20,
        }, 900);
    });

});
