# liveworksheets-solver
I bet you are lazy and don't want to do a liveworksheets.com test... well, this repository is for you.
⚠️TO BE USED FOR EDUCATIONAL PURPOSES ONLY. The use of this tool is COMPLETE RESPONSIBILITY of the END-USER. Developers assume NO liability and are NOT responsible for any misuse or damage caused by this program.⚠️
This tool was inspired by [TobyAdd's livewsga](https://github.com/TobyAdd/livewsga)
## How to use
Open the liveworksheet you want the tool to solve, open the Developer Console in your browser pressing F12 or right-clicking and pressing "Inspect". Then go in the console and past this code in it:
```
jQuery("#worksheet-preview").worksheetPreview("validation", { clicked: false, showAnswers: true, showRightAnswers: true });
var newRateElement = '<div id="worksheet-rate" class="empty:hidden grade absolute top-1 left-1 bg-white/70 backdrop-blur-sm rounded-lg p-2 text-center text-red-500 border text-xl">10/10</div>';
var oldRateElement = document.getElementById("worksheet-rate");
if (oldRateElement) {
    oldRateElement.outerHTML = newRateElement;
}
```
