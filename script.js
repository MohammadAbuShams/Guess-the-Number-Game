let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit-btn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

submitButton.addEventListener("click", function() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        message.style.color = "red";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "blue";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
        message.style.color = "blue";
    } else {
        message.textContent = `Congratulations! You've guessed the correct number in ${attempts} attempts.`;
        message.style.color = "green";
    }

    attemptsText.textContent = `Attempts: ${attempts}`;
    guessInput.value = "";
});
