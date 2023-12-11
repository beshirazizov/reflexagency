$(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });
});
$(document).ready(function () {

    if ($(window).width() < 767.98) {
        $(".introanim-wrap").attr("data-rellax-speed","-7");
        $('#projects .project-holder img').each(function() {
            var width = $(this).width();
            console.log(width)
            $(this).css("height", width + "px");
        });
    }
    var lazyLoadInstance = new LazyLoad();
    init_pointer();
    $('[data-toggle="tooltip"]').tooltip()
    $('#navbarNav').on('show.bs.collapse', function () {
        $(".hamburger").addClass("is-active");
    })
    $('#contactus .contact-items a').each(function() {
        var width = $(this).width();
        $(this).css("line-height", width + "px");
    });
    

    $('#navbarNav').on('hide.bs.collapse', function () {
        $(".hamburger").removeClass("is-active");
    })

    $(".nav-holder").css("height", $("nav").height() + 5);

    var rellax = new Rellax('.rellax');

    var scene = document.querySelectorAll('.project-scene');
    for (let i = 0; i < scene.length; i++) {
        var element = scene[i];
        var parallaxInstance = new Parallax(element, {
            hoverOnly: true
        });
    }

    AOS.init();

    elem = $(".text-change-elem")[0];
    if (elem) {
        var words = $(elem).data("text").split('/');
        $(elem).text(words[0]);
        var index = 0;
        function changeText() {
            $(elem).addClass("animated fadeOut");
            elem.addEventListener('animationend', function () {
                $(elem).html(words[index])
                $(elem).removeClass("fadeOut");
                $(elem).addClass("fadeIn");
            })
            index = (index + 1) % words.length;
            window.setTimeout(changeText, 4000);
        }
        changeText();
    }

    function scrollCode() {
        if ($(window).scrollTop() > 1) {
            $("#intro-contacts").addClass("animated fadeOutDown");
            $("#intro .introanim").css("filter", "opacity(.1)")
        }
        else {
            $("#intro-contacts").removeClass("fadeOutDown");
            $("#intro-contacts").addClass("fadeInUp");
            $("#intro .introanim").css("filter", "opacity(.3)")
        }
    }
    scrollCode()
    $(window).scroll(function () {
        scrollCode()
    });

    // var imageChangingInterval;
    // $('.project-holder').hover(function () {
    //     var img = $(this).find("img");
    //     var srcs = $(img).data('srcs').split(',');
    //     var i = 1;

    //     imageChangingInterval = window.setInterval(function () {
    //         if (i == srcs.length) i = 0;

    //         $(img).fadeOut(300, function () {
    //             $(img).attr('src', srcs[i - 1]);
    //             $(img).fadeIn(300);
    //         });

    //         i++;
    //     }, 2000);

    // }, function () {
    //     window.clearInterval(imageChangingInterval);
    // });

    $('.input-item .form-control').focus(function () {
        $(this).prev().addClass("active");
    });

    $('.input-item .form-control').focusout(function () {
        if (!$(this).val()) {
            $(this).prev().removeClass("active");
        }
    });

    $(".innerlink").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var selector = $(this).attr("href");
        var top =  $(selector).offset().top;
        $([document.documentElement, document.body]).animate({
            scrollTop: top
        }, top/4);
    });

    $(".scrolltop").click(function(e) {
        $([document.documentElement, document.body]).animate({
            scrollTop: 0
        }, 500);
    });
})