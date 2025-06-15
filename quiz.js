// Function declaration
function checkAnswer() {
    let correctAnswer = "4";

}

// Retrieving user's answer
let quiz = document.querySelector('input[name="quiz"]:checked');
if (quiz) {
    let userAnswer = quiz.value;

    // Checking if the user's answer is correct
    if (userAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is " + correctAnswer + ".");
    }
}

// Comparing user's answer with the correct answer
if (userAnswer === correctAnswer) {
    console.log("Correct! Well done");
    textContent.feedback = "Correct! Well done";
} else {
        console.log("That's incorrect. Try again!");
        textContent.feedback = "That's incorrect. Try again!";
}

// Event listener for the submit button
let submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    checkAnswer(); 
});

