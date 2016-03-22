/**
 * Created by PEDRO on 13/06/2015.
 */
$(document).ready(function () {

    $("#overlay").removeClass("hidden");

    var $root = $('html, body');

    var iOS = ( navigator.userAgent.match(/iPad|iPhone|iPod/g) ? true : false );
    if(iOS){
        $('<link rel="stylesheet" type="text/css" href="appleStyle.css" />').appendTo('head');
    }

    <!-- fundo alternado -->
    var randnum = Math.random();
    var inum = 9;

    var rand1 = Math.round(randnum * (inum - 1)) + 1;

    images = new Array;
    images[1] = "img/home1.jpg";
    images[2] = "img/home2.jpg";
    images[3] = "img/home3.jpg";
    images[4] = "img/home4.jpg";
    images[5] = "img/home5.jpg";
    images[6] = "img/home6.jpg";
    images[7] = "img/home7.jpg";
    images[8] = "img/home8.jpg";
    images[9] = "img/home9.jpg";

    var image = images[rand1];

    $(".home").css("background-image", "url('" + image + "')");

    function detectmob() {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
            return true;
        }
        else {
            return false;
        }
    }

    if(!detectmob()) {
        $(window).scroll(function () {
            if ($(window).scrollTop() == 0) {
                $(".navbar").addClass("nav-transparent");
            } else {
                $(".navbar").removeClass("nav-transparent");
            }
        });
    }else{
        $(".navbar").removeClass("nav-transparent");
        $root.removeAttr("data-spy");
    }

    $(".carousel").owlCarousel();
    $(".carousel-full").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true
    });

    $('.scroll').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 900);
        return false;
    });

    //$(function () {
    //    $('a[href*=#]:not([href=#])').click(function () {
    //        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //            var target = $(this.hash);
    //            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //            if (target.length) {
    //                $('html,body').animate({
    //                    scrollTop: target.offset().top
    //                }, 1000);
    //                return false;
    //            }
    //        }
    //    });
    //});
});
$(window).load(function () {
    $("#overlay").addClass("hidden");
});
//$(document).ready( function(){
//    $("#img-load-up").slideUp(1500, function() {
//        //$("#img-load-up").addClass("hidden");
//    });
//    $("#img-load-down").slideDown(1500, function() {
//        //$("#img-load-down").addClass("hidden");
//    });
//});

//$('#go-down').hover(
//    function(){ $(this).removeClass('bounceInDown') },
//    function(){ $(this).addClass('flash') }
//);