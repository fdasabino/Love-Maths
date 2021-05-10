document.addEventListener("DOMContentLoaded", function () {
	let buttons = document.getElementsByTagName("button");
	// for (let i = 0; i < buttons.length; ++i) old syntax;
	for (let button of buttons) {
		button.addEventListener("click", function () {
			if (this.getAttribute("data-type") === "submit") {
				alert("You clicked submit!");
			} else {
				let gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
		});
	}
	runGame("addition");
});
/**
 * The main game loop, called when the script is first loaded
 * and after the users answer has been declared.
 */
function runGame(gameType) {
	//Creates random numbers between 1 and 25
	let num1 = Math.floor(Math.random() * 25) + 1;
	let num2 = Math.floor(Math.random() * 25) + 1;

	if (gameType === "addition") {
		displayAdditionQuestion(num1, num2);
	} else {
		alert("Unknown game type: ${gameType}");
		throw "Unknown game type: ${gameType}. Aborting!";
	}
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
	document.getElementById("operand1").textContent = operand1;
	document.getElementById("operand2").textContent = operand2;
	document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
