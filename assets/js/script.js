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

function runGame() {}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAddtionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
