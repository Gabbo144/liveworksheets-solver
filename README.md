# liveworksheets-solver
🇬🇧 I bet you are lazy and don't want to do a liveworksheets.com test... well, this repository is for you.

🇮🇹 Scommetto che sei pigro e non vuoi fare un test su liveworksheets.com... beh, questo repository fa per te.

⚠️TO BE USED FOR EDUCATIONAL PURPOSES ONLY. The use of this tool is COMPLETE RESPONSIBILITY of the END-USER. Developers assume NO liability and are NOT responsible for any misuse or damage caused by this program.⚠️

⚠️DA UTILIZZARE SOLO PER SCOPI DIDATTICI. L'utilizzo di questo strumento è COMPLETA RESPONSABILITÀ dell'UTENTE. Lo sviluppatore NON si assumoe alcuna responsabilità e NON é responsabile per eventuali usi impropri o danni causati da questo programma.⚠️

This tool was inspired by [TobyAdd's livewsga](https://github.com/TobyAdd/livewsga)
## How to use
When applied to a page, this tool will fill the spaces and display a 10/10 score.
Open the liveworksheet you want the tool to solve, open the Developer Console in your browser pressing F12 or right-clicking and pressing "Inspect". Then go in the console and past this code in it:

## Come usare
Quando applicato a una pagina, questo script riempie gli spazi vuoti con la risposta cordetta e mostra un puntegguo finale di 10/10
Apri il worksheet che vuoi risolvere, clicca F12 (oppure tasto destro e poi ispeziona), clicca sulla scheda "console" e incolla. Ora ti basta premere invio.

```
jQuery("#worksheet-preview").worksheetPreview("validation", { clicked: false, showAnswers: true, showRightAnswers: true });
var newRateElement = '<div id="worksheet-rate" class="empty:hidden grade absolute top-1 left-1 bg-white/70 backdrop-blur-sm rounded-lg p-2 text-center text-red-500 border text-xl">10/10</div>';
var oldRateElement = document.getElementById("worksheet-rate");
if (oldRateElement) {
    oldRateElement.outerHTML = newRateElement;
}
```
