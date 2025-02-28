

$(document).ready(function () {
    function calculateImageSize() {
        var $img = $(".dimensions img");
        var $container = $img.parent();

        var containerWidth = $container.width();
        var containerHeight = $container.height();

        var naturalWidth = $img[0].naturalWidth;
        var naturalHeight = $img[0].naturalHeight;

        // حساب النسبة
        var widthRatio = containerWidth / naturalWidth;
        var heightRatio = containerHeight / naturalHeight;
        var scale = Math.min(widthRatio, heightRatio);

        // العرض والارتفاع بعد التحجيم
        var fittedWidth = naturalWidth * scale;
        var fittedHeight = naturalHeight * scale;


        $(".screen-dimensions").css({ "width": fittedWidth + 'px', "height": fittedHeight + 'px' })
        $(".num").css({ "width": (fittedWidth * (46.63 / 1080)) + 'px ',"padding":"0px"})

        // حساب حجم الخط بناءً على أصغر بُعد
        var minDimension = Math.min(fittedWidth, fittedHeight);
        var fontSize = minDimension ;

        $(".hero .hero-title").css("font-size", (fontSize * .07) + 'px');
        $(".hero p").css("font-size", (fontSize * .036635) + 'px');
        $(".hero button").css("font-size", (fontSize * .036) + 'px');
        $(".al-shareek-ar p").css("font-size", (fontSize * .036) + 'px');
        $(".al-shareek-ar .hash").css("font-size", (fontSize * .035) + 'px');
        $(".al-shareek-en p").css("font-size", (fontSize * .032) + 'px');
        $(".sahaba p").css("font-size", (fontSize * .036) + 'px');
        $(".sh-ar p").css("font-size", (fontSize * .036) + 'px');
        $(".sh-en p").css("font-size", (fontSize * .036) + 'px');
        $(".mokhtabar-ar p").css("font-size", (fontSize * .036) + 'px');
        $(".mokhtabar-ar .terms p").css("font-size", (fontSize * .03) + 'px');
        $(".mokhtabar-en p").css("font-size", (fontSize * .032) + 'px');
        $(".mokhtabar-en .terms p").css("font-size", (fontSize * .03) + 'px');
        $(".moatazelaat-ar p").css("font-size", (fontSize * .034) + 'px');
        $(".moatazelaat-en p").css("font-size", (fontSize * .032) + 'px');
        $(".menh-ar p").css("font-size", (fontSize * .034) + 'px');
        $(".menh-en p").css("font-size", (fontSize * .032) + 'px');
        $(".comik-ar p").css("font-size", (fontSize * .034) + 'px');
        $(".comik-en p").css("font-size", (fontSize * .03) + 'px');
        $(".stories-ar p").css("font-size", (fontSize * .034) + 'px');
        $(".stories-en p").css("font-size", (fontSize * .032) + 'px');
        $(".baba-ar p").css("font-size", (fontSize * .034) + 'px');
        $(".baba-en p").css("font-size", (fontSize * .032) + 'px');
        $(".moatamar-ar p").css("font-size", (fontSize * .034) + 'px');
        $(".moatamar-en p").css("font-size", (fontSize * .027) + 'px');
        $(".tadreeb-mokathf-ar p").css("font-size", (fontSize * .034) + 'px');
        $(".tadreeb-mokathf-en p").css("font-size", (fontSize * .032) + 'px');
        $(".alketaab-ar p").css("font-size", (fontSize * .034) + 'px');
        $(".alketaab-en p").css("font-size", (fontSize * .032) + 'px');
        $(".sonaa-ar p").css("font-size", (fontSize * .034) + 'px');
        $(".sonaa-en p").css("font-size", (fontSize * .032) + 'px');
        $(".kind-ar p").css("font-size", (fontSize * .034) + 'px');
        $(".kind-en p").css("font-size", (fontSize * .032) + 'px');
        $(".kind-ar .item").css("font-size", (fontSize * .04) + 'px');
        $(".kind-en .item").css("font-size", (fontSize * .035) + 'px');
        $(".kind-ar .description").css("font-size", (fontSize * .03) + 'px');
        $(".kind-en .description").css("font-size", (fontSize * .028) + 'px');
        $(".derasaat-ar p").css("font-size", (fontSize * .03) + 'px');
        $(".derasaat-en p").css("font-size", (fontSize * .028) + 'px');
        $(".ar-section .mid-title").css("font-size", (fontSize * .04) + 'px');
        $(".en-section .mid-title").css("font-size", (fontSize * .05) + 'px');
        $(".ar-section .goal-box p").css("font-size", (fontSize * .027) + 'px');
        $(".en-section .goal-box p").css("font-size", (fontSize * .027) + 'px');
        $(".ar-section .center-goal-box p").css("font-size", (fontSize * .023) + 'px');
        $(".en-section .center-goal-box p").css({"font-size": (fontSize * .02) + 'px',"padding":"0px"});
        $(".ar-section .goal-row .mid-title").css("font-size", (fontSize * .04) + 'px');
        $(".en-section .goal-row .mid-title").css("font-size", (fontSize * .04) + 'px');
        $(".en-section .qr-box p").css("font-size", (fontSize * .025) + 'px');
        $(".num").css("width", (fontSize * .06) + 'px');
        $(".num").css("font-size", (fontSize * .034) + 'px');
        $(".mid-text").css("font-size", (fontSize * .021) + 'px');
        $(".comik-en .mid-title").css("font-size", (fontSize * .03) + 'px');
        $(".ar-section .goal-box .num").css("font-size", (fontSize * .025) + 'px');
        $(".en-section .goal-box .num").css("font-size", (fontSize * .019) + 'px');
        $(".baba-en .mid-title").css("font-size", (fontSize * .034) + 'px');
        $(".mokhtabar p").css("font-size", (fontSize * .029) + 'px');
    }

    // أول مرة لما الصفحة تتحمل
    calculateImageSize();

    // لما يحصل تغيير في حجم الشاشة
    $(window).on('resize', function () {
        calculateImageSize();
    });


    // screens and button

    // menu

    $(".hero .ar-btn").click(function () {
        $("section ").fadeOut(700);
        $(".menu-ar").fadeIn(800);
    })
    $(".hero .en-btn").click(function () {
        $("section ").fadeOut(700);
        $(".menu-en").fadeIn(800);
    })

    // back btn
    $(".menu .back-btn").click(function () {
        $("section").fadeOut(700);
        $(".hero").fadeIn(800);
    })

    $(".ar-section .back-btn").click(function () {
        $("section").fadeOut(700);
        $(".menu-ar").fadeIn(800);
        $(".info-section video").trigger("pause")
        $(".info-section video").prop('currentTime', 0);
        $("iframe").attr("src","none")
        $("iframe").attr("src","https://www.youtube.com/embed/rEA7D2wMTK4")
        
    })
    $(".en-section .back-btn").click(function () {
        $("section").fadeOut(700);
        $(".menu-en").fadeIn(800);
        $(".info-section video").trigger("pause")
        $(".info-section video").prop('currentTime', 0);
        $("iframe").attr("src","none")
        $("iframe").attr("src","https://www.youtube.com/embed/rEA7D2wMTK4")
        
    })

    // open section

    $(".menu-btn").click(function () {
        let pageTarget = $(this).attr("target")
        $("section").fadeOut(700);
        $("." + pageTarget).fadeIn(800);
    })

    $(".elketaab-ar .next-btn button").click(function () {
        $("section").fadeOut(700);
        $(".elketaab2-ar").fadeIn(800);
        $(".info-section video").trigger("pause")
        $("iframe").attr("src", "none")
        $("iframe").attr("src", "https://www.youtube.com/embed/rEA7D2wMTK4")
        $(".info-section video").prop('currentTime', 0);
    })

    $(".elketaab-en .next-btn button").click(function () {
        $("section").fadeOut(700);
        $(".elketaab2-en").fadeIn(800);
        $(".info-section video").trigger("pause")
        $("iframe").attr("src", "none")
        $("iframe").attr("src", "https://www.youtube.com/embed/rEA7D2wMTK4")
        $(".info-section video").prop('currentTime', 0);
    })

    $(".door-ar .next-btn button").click(function () {
        $("section").fadeOut(700);
        $(".door2-ar").fadeIn(800);
        $(".info-section video").trigger("pause")
        $("iframe").attr("src", "none")
        $("iframe").attr("src", "https://www.youtube.com/embed/rEA7D2wMTK4")
        $(".info-section video").prop('currentTime', 0);
    })

    $(".door-en .next-btn button").click(function () {
        $("section").fadeOut(700);
        $(".door2-en").fadeIn(800);
        $(".info-section video").trigger("pause")
        $("iframe").attr("src", "none")
        $("iframe").attr("src", "https://www.youtube.com/embed/rEA7D2wMTK4")
        $(".info-section video").prop('currentTime', 0);
    })

    $(".elketaab2-ar .prev-btn button").click(function () {
        $("section").fadeOut(700);
        $(".elketaab-ar").fadeIn(800);
        $(".info-section video").trigger("pause")
        $("iframe").attr("src", "none")
        $("iframe").attr("src", "https://www.youtube.com/embed/rEA7D2wMTK4")
        $(".info-section video").prop('currentTime', 0);
    })
    $(".elketaab2-en .prev-btn button").click(function () {
        $("section").fadeOut(700);
        $(".elketaab-en").fadeIn(800);
        $(".info-section video").trigger("pause")
        $("iframe").attr("src", "none")
        $("iframe").attr("src", "https://www.youtube.com/embed/rEA7D2wMTK4")
        $(".info-section video").prop('currentTime', 0);
    })
    $(".door2-ar .prev-btn button").click(function () {
        $("section").fadeOut(700);
        $(".door-ar").fadeIn(800);
        $(".info-section video").trigger("pause")
        $("iframe").attr("src", "none")
        $("iframe").attr("src", "https://www.youtube.com/embed/rEA7D2wMTK4")
        $(".info-section video").prop('currentTime', 0);
    })
    $(".door2-en .prev-btn button").click(function () {
        $("section").fadeOut(700);
        $(".door-en").fadeIn(800);
        $(".info-section video").trigger("pause")
        $("iframe").attr("src", "none")
        $("iframe").attr("src", "https://www.youtube.com/embed/rEA7D2wMTK4")
        $(".info-section video").prop('currentTime', 0);
    })


    $('video').on('play', function () {
        // وقف كل الفيديوهات الأخرى
        $('video').not(this).each(function () {
            this.pause();
        });
        $("iframe").attr("src", "none")
        $("iframe").attr("src", "https://www.youtube.com/embed/rEA7D2wMTK4")
    });
});

