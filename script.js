function checkAnswers() {
    let answers = {
        q1: "β",
        q2: "α",
        q3: "γ"
    };

    let userAnswers = {};
    let correctCount = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected) {
            userAnswers[key] = selected.value;
            if (userAnswers[key] === answers[key]) {
                correctCount++;
            }
        }
    }

    let resultDiv = document.getElementById("result");

    if (correctCount === totalQuestions) {
        resultDiv.innerHTML = "Μπράβο! Απάντησες σωστά όλες τις ερωτήσεις.";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = `Σωστές απαντήσεις: ${correctCount} από ${totalQuestions}. Δοκίμασε ξανά!`;
        resultDiv.style.color = "red";
    }
}
