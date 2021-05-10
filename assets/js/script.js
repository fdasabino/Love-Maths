document.addEventListener("DOMContentLoaded", function () {
	let buttons = document.getElementsByTagName("button");
	// for (let i = 0; i < buttons.length; ++i) old syntax;
	for (let button of buttons) {
		button.addEventListener("click", function () {
			if (this.getAttribute("data-type") === "submit") {
				alert("You clicked submit!");
			} else {
				let gametype = this.getAttribute("data-type");
				alert("You clicked ${gameType}");
			}
		});
	}
});
/**
 * The main game loop, called when the script is first loaded
 * and after the users answer has been declared.
 */
function runGame() {
	//Creates random numbers between 1 and 25
	let num1 = Math.floor(Math.random() * 25) + 1;
	let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAddtionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
