// entrance index video load.
function handleEntranceVideo() {
	let heroBtn = $("#goto-main-btn"),
		heroVid = $("#hero-video-container"),
		heroText = $("#hero-text");
	heroBtn.hide();
	heroText.hide();
	heroVid.on("loaded", function() {
		heroBtn.fadeIn(2000);
		heroText.fadeIn(2000);
	});
}

// progress bar on bottom of page
function updateProgress(num1, num2) {
	var percent = Math.ceil((num1 / num2) * 100);
	var progressBar = document.getElementById("progress");
	progressBar.style.width = percent + "%";
}

window.addEventListener("scroll", function() {
	var top = window.scrollY;
	var height =
		document.body.getBoundingClientRect().height - window.innerHeight;
	updateProgress(top, height);
});

function handlePagination() {
	let restDiv = document.querySelector("div#rest");
	restDiv.style.display = "none"
}
// main - DOM ready function.
$(document).ready(function() {
	handleEntranceVideo();
	handlePagination();
});
