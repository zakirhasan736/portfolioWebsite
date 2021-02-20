(function ($) {
    "use strict";

    /* -----------------------------------
	      	1. preloader
	     ----------------------------------- */

    $(window).on('load', function () {
        $("#preloader").delay(1000).addClass('loaded');

        /* -----------------------------------
        		  2. Sound Setup
        ----------------------------------- */

        $('body').append('<audio loop autoplay volume="1" id="audio-player"><source src="music.mp3" type="audio/mpeg"></audio>');
        var audio = document.getElementById("audio-player");
        audio.volume = 0.2;

        if ($(window).length) {
            $('.music-bg').css({
                'visibility': 'visible'
            });
            $('body').addClass("audio-on");
            if ($('body').hasClass('audio-off')) {
                $('body').removeClass('audio-on');
            }
            $(".music-bg").on('click', function () {
                $('body').toggleClass("audio-on audio-off");
                if ($('body').hasClass('audio-off')) {
                    audio.pause();
                }
                if ($('body').hasClass('audio-on')) {
                    audio.play();
                }
            });
        }
    });
    
    /* -----------------------------------
          	3. Chart Setup
    ----------------------------------- */
    if ($('.chart').length > 0) {
        $('.chart').easyPieChart({
            trackColor: '#0e0f10',
            scaleColor: false,
            easing: 'easeOutBounce',
            scaleLength: 4,
            lineCap: 'square',
            lineWidth: 5,
            size: 150,
            animate: {
                duration: 3500,
                enabled: true
            }
        });
    }

    /* -----------------------------------
	      	4. AnimatedHeadline
	----------------------------------- */
    $('.overly-cont-text').animatedHeadline({
        animationType: 'rotate-1',
        animationDelay: 2500,
        barAnimationDelay: 3800,
        barWaiting: 800,
        lettersDelay: 50,
        typeLettersDelay: 150,
        selectionDuration: 500,
        typeAnimationDelay: 1300,
        revealDuration: 600,
        revealAnimationDelay: 1500
    });

    /* -----------------------------------
	      	5. sider nav position control layout
	      ----------------------------------- */
    $('.header-main').on('click', function () {
        if ($('.header-main.show').length) {
            $('.hum-burger').removeClass('show');
        }
    });
    $('.hum-burger').on('click', function () {
        $('.header-main').toggleClass('show');
    });
    $('.pages li.comonPoint').on('click', function () {
        if ($('.pages li.comonPoint.alx-aside-menu_add').length) {
            $('.hum-burger').removeClass('alx-aside-menu_add');
        }
    });
    $('.hum-burger').on('click', function () {
        $('.pages li.comonPoint').toggleClass('alx-aside-menu_add');
    });
    $('.hum-burger').on('click', function () {
        $('.burgerIndecator').toggleClass('open');
    });

    $('.hum-burger').each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('on');

        })
    });

    $('.share-pop').on('click', function () {
        $('.social-overly li').toggleClass('open');
    });

    /* -----------------------------------
	            6. testimonials carousel
	         ----------------------------------- */
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    /* -----------------------------------
	           7. video link
	         ----------------------------------- */
    $('#videolink , #videolink1 , #videolink2 , #videolink3').magnificPopup({
        type: 'inline',
        midClick: true
    });

    /* -----------------------------------
	           8. Isotope
	         ----------------------------------- */
    var grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    })
    // filter items on button click
    $('.portfolio-menu').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({
            filter: filterValue
        });
    });
    //for menu activation
    $('.portfolio-menu span').on('click', function (even) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        even.preventDefault();
    });

    /* -----------------------------------
               9. MagnificPopup
    ----------------------------------- */
    $('#gellary').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* -----------------------------------
               10. particleground
    ----------------------------------- */
    $('.alx-canvas , .blog-page-alx').particleground({
        dotColor: 'rgba(255, 255, 255, 0.40)',
        lineColor: 'rgba(255, 255, 255, 0.21)',
        parallaxMultiplier: 5,
        particleRadius: 5,
        proximity: 130,
        density: 12000
    });

    /* -----------------------------------
               10. mouse sound setup
    ----------------------------------- */
    $(document).ready(function () {
        $("a,span")
            .each(function (i) {
                if (i != 0) {
                    $("#hover-audio")
                        .clone()
                        .attr("id", "hover-audio" + i)
                        .appendTo($(this).parent());
                }
                $(this).data("beeper", i);
            }).mouseenter(function () {
                $("#hover-audio" + $(this).data("beeper"))[0].play();
            });
        $("#hover-audio").attr("id", "hover-audio");

        document.getElementById("menu-button").addEventListener('click', function (e) {
            document.getElementById("link").play();
        });
        document.getElementById("switch").addEventListener('click', function (e) {
            document.getElementById("link").play();
        });

        document.getElementById("switch-menu").addEventListener('click', function (e) {
            document.getElementById("link").play();
        });
        document.getElementById("switch-nav").addEventListener('click', function (e) {
            document.getElementById("link").play();
        });
        document.getElementById("musicItem").addEventListener('click', function (e) {
            document.getElementById("link").play();
        });

    });

    /* -----------------------------------
	           11. mouse moved setup
	----------------------------------- */
    $(window).mousemove(function (e) {
        $(".cursor").css({
            left: e.pageX,
            top: e.pageY
        })
    })
    $(".cursor-link")
        .on("mouseenter", function () {
            $('.cursor').addClass("active")
        })
        .on("mouseleave", function () {
            $('.cursor').removeClass("active")
        })
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
            t.style.top = n.clientY + "px",
            e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px",
            i.style.left = n.clientX + "px",
            i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }

    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }

    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

})(jQuery);