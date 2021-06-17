$('.img_source').imagesLoaded().always(function (instance) {
    setTimeout(function () {
        TweenMax.to('.preloader', 1.2, {
            "top": "100%",
            skewY: "30deg",
            ease: Power1.easeInOut,
            delay: 0
        });
        TweenMax.to('.preloader', 0.6, {
            skewY: "0deg",
            ease: Power1.easeInOut,
            delay: 0.6
        });
        TweenMax.fromTo('.projects', 1, {
            top: "50vh",
            autoAlpha: 1
        }, {
            top: "0",
            autoAlpha: 1,
            delay: 1
        })
    }, 600);
    setTimeout(function () {
        $('.preloader').css("display", "none");
        $("body").addClass("loaded")
    }, 2500)
})