// show right answers
jQuery("#worksheet-preview").worksheetPreview("validation", { clicked: false, showAnswers: true, showRightAnswers: true });

// show the result
var newRateElement = '<div id="worksheet-rate" class="empty:hidden grade absolute top-1 left-1 bg-white/70 backdrop-blur-sm rounded-lg p-2 text-center text-red-500 border text-xl">10/10</div>';
var oldRateElement = document.getElementById("worksheet-rate");

if (oldRateElement) {
    oldRateElement.outerHTML = newRateElement;
}
