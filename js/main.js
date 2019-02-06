// entrance index video load.
function handleEntranceVideo() {
    let heroBtn = $('#goto-main-btn'),
        heroVid = $('#hero-video-container'),
        heroText = $('#hero-text');
    heroBtn.hide();
    heroText.hide();
    heroVid.on('loaded', function() {
        heroBtn.fadeIn(2000);
        heroText.fadeIn(2000);
    });
};

// main - DOM ready function.
$(document).ready(function() {
    handleEntranceVideo();

    $(window).scroll(function(e) {
        parallax();
    });
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.placeholder-banner').css('top', -(scrolled * 0.0315) + 'rem');
    $('.placeholder-banner > h1').css('top', -(scrolled *= 0.005) + 'rem');
    $('.placeholder-banner > h1').css('opacity', 1 - (scrolled * 0.3));
}