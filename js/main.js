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

    // team image hover animation
    $(".img-box > div").hover(function () {
        $(this).children(".overlay").slideDown();  
    },
    function () {
        $(this).children(".overlay").slideUp();
    });

    // auto slider
    (function autoSlider() {

        $(".slider .active").each(function () {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(2000, function () {

                    $(this).removeClass("active").next().addClass("active").fadeIn(2000);

                    autoSlider();

                });
            }
            else {

                $(this).delay(3000).fadeOut(2000, function () {

                    $(this).removeClass("active");

                    $('.slider div').eq(0).addClass("active").fadeIn(2000);

                    autoSlider();
                });
            }
        });
    })();
});
