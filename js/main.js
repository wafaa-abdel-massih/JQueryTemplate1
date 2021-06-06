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

    
    // project hover animation
    $(".our-projects > div").hover(function () {
        $(this).children(".overlay").slideDown();
    },
    function () {
        $(this).children(".overlay").slideUp();
    });

    // shuffle projects
    let imgShuffle = $(".our-projects > div");
    imgShuffle.each(function () {
        $(this).fadeIn(1000);
    });

    $(".projects ul li").on("click", function () {
        $(".projects ul li.active").removeClass("active");
        $(this).addClass("active");

        var shaffle = $(this).data("shuffle");
        if (shaffle !== "all") {

            imgShuffle.each(function (i) {
                if (imgShuffle.eq(i).data("shuffle") !== shaffle) {
                    imgShuffle.eq(i).fadeOut();
                    console.log("not equal");
                }
                else {
                    imgShuffle.eq(i).fadeIn();
                }
            });
            // console.log("yes" , imgShuffle.eq(0).data("shuffle"));

        } else {

            imgShuffle.each(function (i) {
                imgShuffle.eq(i).fadeIn();
            });
        }
    });
});
