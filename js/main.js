// entrance index video load.
function handleEntranceVideo() {
    let heroBtn = $('#goto-main-btn'),
        heroVid = $('#hero-video-container'),
        heroText = $('#hero-text');
    heroBtn.hide();
    heroText.hide();
    heroVid.on('loaded', function () {
        heroBtn.fadeIn(2000);
        heroText.fadeIn(2000);
    });
};

function handleParallaxBanners() {
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: { triggerHook: "onEnter", duration: "200%" }
    });

    new ScrollMagic.Scene({ triggerElement: "#parallax1" })
        .setTween("#parallax1 > div", {
            y: "80%",
            ease: Linear.easeNone
        })
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#parallax2" })
        .setTween("#parallax2 > div", {
            y: "80%",
            ease: Linear.easeNone
        })
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#parallax3" })
        .setTween("#parallax3 > div", {
            y: "80%",
            ease: Linear.easeNone
        })
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#parallax4" })
        .setTween("#parallax4 > div", {
            y: "80%",
            ease: Linear.easeNone
        })
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#parallax5" })
        .setTween("#parallax5 > div", {
            y: "80%",
            ease: Linear.easeNone
        })
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#parallax6" })
        .setTween("#parallax6 > div", {
            y: "80%",
            ease: Linear.easeNone
        })
        .addIndicators()
        .addTo(controller);
}

// main - DOM ready function.
$(document).ready(function () {
    handleEntranceVideo();
    handleParallaxBanners();
});