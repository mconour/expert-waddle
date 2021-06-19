$(function () {
    let debounce_timer;
    $(window).scroll(function () {
        const y = $(document).scrollTop();
        if (debounce_timer) {
            window.clearTimeout(debounce_timer)
        }
        debounce_timer = window.setTimeout(function () {
            $('.link').each(function () {
                const t = $(this).offset().top;
                const t1st = $('.link').first().offset().top;
                const tlast = $('.link').last().offset().top;
                const start = y + ($(window).height() / 100 * 28.5);
                const stop = y + ($(window).height() / 100 * 17);
                if (start > t && stop <= t) {
                    $(this).not("#about").find('.bgs').fadeIn()
                } else {
                    $(this).not("#about").find('.bgs').fadeOut(300)
                }
                if (start > tlast) {
                    $(".linkblock").addClass('hide');
                    $(".socialblock").addClass('switch');
                    $(".logo polyline").addClass('active');
                    $(".logo path").addClass('active');
                    $(".logo").addClass('active');
                    $('#about').find('.bgs').fadeIn(200);
                    $(this).find('p').css({
                        "transform": "translate(0%, 0%)"
                    });
                    $(this).not("#about").find('h2').css('-webkit-text-stroke', '1px black')
                } else {
                    $(".linkblock").removeClass('hide');
                    $(".socialblock").removeClass('switch');
                    $(".logo polyline").removeClass('active');
                    $(".logo path").removeClass('active');
                    $('#about').find('.bgs').fadeOut(200);
                    $(this).find('p').css({
                        "transform": "translate(0%, 100%)"
                    });
                    $(this).not("#about").find('h2').css('-webkit-text-stroke', '')
                }
            })
        }, 20)
    })
});


$(window).scroll(function () {
    const y = $(this).scrollTop();
    $('.link').each(function () {
        const t = $(this).offset().top;
        const t1st = $('.link').first().offset().top;
        const tlast = $('.link').last().offset().top;
        const start = y + ($(window).height() / 100 * 28.5);
        const stop = y + ($(window).height() / 100 * 17);
        if (start > t1st) {
            $('.scrollblock , .linkblock').addClass('switch')
        } else {
            $('.scrollblock , .linkblock').removeClass('switch')
        }
        if (start > t) {
            $(this).find('h2 , span').addClass('active');
            $(this).prev().find('h2 , span').addClass('pactive')
        } else {
            $(this).find('h2 , span').removeClass('active');
            $(this).prev().find('h2 , span').removeClass('pactive')
        }
    })
});


/* slow scroll to about section */

$(function () {
    $(".about-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            TweenMax.to($('html, body'), 2.5, {
                'scrollTop': $(hash).offset().top,
                ease: Quart.easeOutSine,
                onComplete: function () {
                    window.location.hash = "hello"
                }
            })
        }
    })
});


/* cursor expand function */

$(function () {
    const cursor = document.createElement("span");      
    document.body.appendChild(cursor);
    
    document.addEventListener("mousemove", function (event) {
        TweenLite.to(cursor, 0.2, {
            x: event.clientX,
            y: event.clientY
        })
    });

    document.addEventListener("mouseout", function (event) {
        cursor.style.display = "none";
    });

    document.addEventListener("mouseover", function (event) {
        function is_touch_device() {
            const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
            const mq = function (query) {
                return window.matchMedia(query).matches
            }
            if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
                return !0
            }
            const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query)
        }
        if (is_touch_device()) {
            cursor.style.display = "none";             
        } else {
            cursor.style.display = "block";                      
            cursor.style.top = "-15px"            
        }
    });
    
    let flag = !1;

    $(".cursor-expand").mouseover(function () {
        flag = !0;
        TweenMax.to(cursor, 0.4, {
            scale: 4,
            autoAlpha: 1
        })
    });

    $(".cursor-expand").mouseout(function () {
        flag = !1;
        TweenMax.to(cursor, 0.4, {
            scale: 0.3,
            autoAlpha: 1
        })
    })
});


$('.contact').click(function () {
    function is_touch_device() {
        const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        const mq = function (query) {
            return window.matchMedia(query).matches
        }
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            return !0
        }
        const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query)
    }
    if (is_touch_device()) {
        window.location.href = 'mailto:michaelconour@gmail.com?subject=Hi'
    } else {
        $('.link-to-copy').select();
        document.execCommand("copy");
        const tl = new TimelineMax();
        tl.to('.copyMessage', 0, {
            bottom: "-20%",
            autoAlpha: 0
        }).to('.copyMessage', .8, {
            bottom: "7%",
            autoAlpha: 1,
            ease: Back.easeOut.config(2)
        }).to('.copyMessage', .5, {
            bottom: "-20%",
            autoAlpha: 0,
            delay: 1.4
        })
    }
})


/* makes about section title fixed */

$(window).scroll(function () {
    const y = $(this).scrollTop();
    $('#about').each(function () {
        const t = $(this).offset().top;
        const start = y + ($(window).height() / 100 * 4);
        if (start > t) {
            $(this).find('h2').addClass('about-fixed');
        } else {
            $(this).find('h2').removeClass('about-fixed');  
        }
    })
}); 