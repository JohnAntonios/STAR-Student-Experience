$(document).ready(function() {
    
    // HERO ENTRANCE/LANDING: 360 Video.
    (function() {
        var containerSelector = '#container360';
        this.viewer = new Kaleidoscope.Video({
            source: 'assets/vid/usyd360test.mp4',
            containerId: containerSelector,
            height: window.innerHeight,
            width: window.innerWidth,
            loop: true
        });
        this.viewer.render();
        window.onresize = function() {
            this.viewer.setSize({height: window.innerHeight, width: window.innerWidth});
        }.bind(this);
        document.querySelector(containerSelector).addEventListener('touchend', this.viewer.play.bind(this.viewer));
        document.body.addEventListener('onclick', function() {
            this.viewer.play();
        }.bind(this));
    })();

});