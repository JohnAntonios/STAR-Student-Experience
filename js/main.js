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
$(document).ready(function() {
    handleEntranceVideo();
});