let currentQuestion = null;
let score = 0;
let questionsUsed = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomQuestion() {
    const availableQuestions = questions.filter(
        (_, index) => !questionsUsed.includes(index),
    );
    if (availableQuestions.length === 0) {
        showGameOver();
        return;
    }
    const randomIndex = Math.floor(
        Math.random() * availableQuestions.length,
    );
    const questionIndex = questions.indexOf(
        availableQuestions[randomIndex],
    );
    questionsUsed.push(questionIndex);
    currentQuestion = questions[questionIndex];
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const questionCountEl = document.getElementById("question-count");
    const explanationEl = document.getElementById("explanation");

    // Mostrar pregunta
    questionEl.innerHTML = currentQuestion.question;

    // Añadir imagen de la pregunta si existe
    if (currentQuestion.imageQuestion) {
        const imgQuestion = document.createElement("img");
        imgQuestion.src = currentQuestion.imageQuestion;
        imgQuestion.className = "question-image";
        questionEl.appendChild(imgQuestion);
    }

    // Limpiar opciones y explicación
    optionsEl.innerHTML = "";
    explanationEl.style.display = "none";
    explanationEl.innerHTML = "";

    // Crear opciones
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });

    questionCountEl.textContent = `Pregunta: ${questionsUsed.length}/${questions.length}`;
    document.getElementById("feedback").className = "feedback";
}

function updateProgress() {
    const progress = document.getElementById("progress");
    const percentage = (questionsUsed.length / questions.length) * 100;
    progress.style.width = `${percentage}%`;
}

function checkAnswer(selectedIndex) {
    const options = document.querySelectorAll(".option");
    const feedbackEl = document.getElementById("feedback");
    const explanationEl = document.getElementById("explanation");
    const nextBtn = document.getElementById("next-btn");

    // Deshabilitar todas las opciones
    options.forEach((option) => (option.disabled = true));

    if (selectedIndex === currentQuestion.correct) {
        options[selectedIndex].classList.add("correct");
        feedbackEl.textContent = "¡Correcto!";
        feedbackEl.className = "feedback correct show";
        score++;
        document.getElementById("score").textContent = `Puntuación: ${score}`;
    } else {
        options[selectedIndex].classList.add("incorrect");
        options[currentQuestion.correct].classList.add("correct");
        feedbackEl.textContent = "Incorrecto";
        feedbackEl.className = "feedback incorrect show";
    }

    // Mostrar explicación siempre
    showExplanation();

    // Mostrar botón de siguiente
    nextBtn.style.display = "block";
}

function showExplanation() {
    const explanationEl = document.getElementById("explanation");

    explanationEl.innerHTML = `<h3>Explicación:</h3><p>${currentQuestion.explanation}</p>`;

    // Añadir imagen de la explicación si existe
    if (currentQuestion.imageAnswer) {
        const imgAnswer = document.createElement("img");
        imgAnswer.src = currentQuestion.imageAnswer;
        imgAnswer.className = "explanation-image";
        explanationEl.appendChild(imgAnswer);
    }

    explanationEl.style.display = "block";
}

function nextQuestion() {
    document.getElementById("next-btn").style.display = "none";
    getRandomQuestion();
}

function showGameOver() {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = `
                <div style="text-align: center;">
                    <h2>¡Juego terminado!</h2>
                    <p>Puntuación final: ${score} de ${questions.length}</p>
                    <button onclick="restartGame()" class="restart-btn">Jugar de nuevo</button>
                </div>
            `;
}

function restartGame() {
    score = 0;
    questionsUsed = [];
    document.getElementById("score").textContent = "Puntuación: 0";
    shuffleArray(questions);
    getRandomQuestion();
}

// Iniciar el juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    if (typeof questions !== 'undefined' && questions.length > 0) {
        shuffleArray(questions);
        getRandomQuestion();
    } else {
        console.error('No se pudieron cargar las preguntas');
    }
});