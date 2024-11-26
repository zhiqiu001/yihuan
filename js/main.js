$(function () {
    // 背景音乐播放和关闭
    $('.header a.aki-music').click(function () {
        $(this).toggleClass('active')
        if ($(this).hasClass("active")) {
            $('#body-bgm')[0].play();
        } else {
            $('#body-bgm')[0].pause();
        }
        let that = $(this);
        let xunhuan = setInterval(function () {
            if ($('#body-bgm')[0].paused) {
                that.removeClass('active')
                clearInterval(xunhuan);
            }
        }, 500)
    })


    // 角色小图轮播
    var swiper_small = new Swiper(".page-character .swiper_small", {
        slidesPerView: 3,
        watchSlidesProgress: true,
    });

    // 角色大图轮播
    var swiper_big = new Swiper(".page-character .swiper_big", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: swiper_small,
        },
    });
})