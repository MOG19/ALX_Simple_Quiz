function checkAnswer() {
    const correctAnswer = "4";
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    if (selectedRadio) {
        const userAnswer = selectedRadio.value;
        const feedbackElement = document.getElementById("feedback");
        
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        alert("Please select an answer.");
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);