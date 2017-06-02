$(function() {
   'use strict';
    $(window).scroll(function() {
        var navbar = $('.navbar');
        
        if($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('nav-scrolled');
        } else {
            navbar.removeClass('nav-scrolled');
        }
    });
    
    // Tab Swiching
    $('.tab-section ul li').click(function() {
        // Add Class Selected to active tab
        $(this).addClass('selected').siblings().removeClass('selected');
        
        $('.tab-section .tab-content >div').hide();
        
        $($(this).data('class')).fadeIn();
        
    })
});