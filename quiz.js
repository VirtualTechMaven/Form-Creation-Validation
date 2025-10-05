// Function to check the user's selected answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback paragraph
    const feedback = document.getElementById("feedback");

    // Check if the user selected an answer
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        return;
    }

    // Get the user's answer
    const userAnswer = selectedOption.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
