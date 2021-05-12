document.addEventListener("DOMContentLoaded", function () {
	let buttons = document.getElementsByTagName("button");
	// for (let i = 0; i < buttons.length; ++i) old syntax;
	for (let button of buttons) {
		button.addEventListener("click", function () {
			if (this.getAttribute("data-type") === "submit") {
				checkAnswer();
			} else {
				let gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
		});
	}

	//Event listener for enter key so users can press enter instead of using their mouse
	document
		.getElementById("answer-box")
		.addEventListener("keydown", function (event) {
			if (event.key === "Enter") {
				checkAnswer();
			}
		});

	//rungame type<<<<<<<<<<<<<<<
	runGame("addition");
	//rungame type<<<<<<<<<<<<<<<
});

/**
 * The main game loop, called when the script is first loaded
 * and after the users answer has been declared.
 */
function runGame(gameType) {
	//clears up the answer box automatically
	document.getElementById("answer-box").value = "";

	//focus the cursor automatically into the answer box
	document.getElementById("answer-box").focus();

	//Creates random numbers between 1 and 25
	let num1 = Math.floor(Math.random() * 25) + 1;
	let num2 = Math.floor(Math.random() * 25) + 1;
	let divNum1 = num1 * num2;
	let divNum2 = num2;

	if (gameType === "addition") {
		displayAdditionQuestion(num1, num2);
	} else if (gameType === "multiply") {
		displayMultiplyQuestion(num1, num2);
	} else if (gameType === "subtract") {
		displaySubtractQuestion(num1, num2);
	} else if (gameType === "division") {
		displayDivisionQuestion(divNum1, divNum2);
	} else {
		alert("Unknown game type: ${gameType}");
		throw "Unknown game type: ${gameType}. Aborting!";
	}
}

/**
 * Checks the answer against the first element in the returned
 * calculateCorrectAnswer array.
 */
function checkAnswer() {
	let userAnswer = parseInt(document.getElementById("answer-box").value);
	let calculatedAnswer = calculateCorrectAnswer();
	let isCorrect = userAnswer === calculatedAnswer[0];

	if (isCorrect) {
		alert("Hey you got it right! :D");
		incrementScore();
	} else {
		alert(
			//important to use backticks as quotations can be rather confusing
			`${userAnswer} is wrong. The correct answer was ${calculatedAnswer[0]}!`
		);
		incrementWrongAnswer();
	}
	runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (+-*...)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {
	let operand1 = parseInt(document.getElementById("operand1").innerText);
	let operand2 = parseInt(document.getElementById("operand2").innerText);
	let operator = document.getElementById("operator").innerText;

	if (operator === "+") {
		return [operand1 + operand2, "addition"];
	} else if (operator === "*") {
		return [operand1 * operand2, "multiply"];
	} else if (operator === "-") {
		return [operand1 - operand2, "subtract"];
	} else if (operator === "/") {
		return [operand1 / operand2, "division"];
	} else {
		alert("Unimplemented operator ${operator}");
		throw "Unimplemented operator ${operator}. Aborting!";
	}
}

/**
 * Gets the current score form the DOm and increment it by 1
 */
function incrementScore() {
	let oldScore = parseInt(document.getElementById("score").innerText);
	document.getElementById("score").innerText = ++oldScore;
}

/**
 * Get the current score and decrease it by 1
 */
function incrementWrongAnswer() {
	let oldScore = parseInt(document.getElementById("incorrect").innerText);
	document.getElementById("incorrect").innerText = ++oldScore;
}

//Addition Function
function displayAdditionQuestion(operand1, operand2) {
	document.getElementById("operand1").textContent = operand1;
	document.getElementById("operand2").textContent = operand2;
	document.getElementById("operator").textContent = "+";
}

//Subtraction Function
function displaySubtractQuestion(operand1, operand2) {
	document.getElementById("operand1").textContent =
		operand1 > operand2 ? operand1 : operand2;
	document.getElementById("operand2").textContent =
		operand2 > operand1 ? operand1 : operand2;
	document.getElementById("operator").textContent = "-";
}

//Multiplication Function
function displayMultiplyQuestion(operand1, operand2) {
	document.getElementById("operand1").textContent = operand1;
	document.getElementById("operand2").textContent = operand2;
	document.getElementById("operator").textContent = "*";
}

//Division Function
function displayDivisionQuestion(operand1, operand2) {
	document.getElementById("operand1").textContent =
		operand1 > operand2 ? operand1 : operand2;
	document.getElementById("operand2").textContent =
		operand2 > operand1 ? operand1 : operand2;
	document.getElementById("operator").textContent = "/";
}
