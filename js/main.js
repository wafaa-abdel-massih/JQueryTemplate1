/*global $, alert, console*/

$(document).ready(function () {

    "use strict";

    // adjust home page height 
    let homeSection = $(".home");

    homeSection.height($(window).height());
    
    $(window).resize(function () {
        homeSection.height($(window).height());
    });

    // add click event to the navbar links
    $("header .links li a").click(function () {
        $("header .links li a.active").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({
            // smoth scroll
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
});