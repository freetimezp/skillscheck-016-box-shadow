/* =========================================
   SHADOWLAB — SKILLS CHECK 016
========================================= */

const CONFIG = {
    testId: "016",
    testTitle: "Box Shadow — Elevation & Shadow Softness",
    storageKey: "freetimezp:roadmap:skill-check-results:v1",
    historyLimit: 20,
};

/* =========================================
   QUESTION BANK
========================================= */

const QUESTIONS = [
    {
        category: "BOX SHADOW BASICS",
        type: "single",
        question: "Which CSS property adds a shadow around an element's box?",
        code: null,
        answers: [
            { text: "box-shadow", correct: true },
            { text: "element-shadow", correct: false },
            { text: "shadow-box", correct: false },
            { text: "filter-shadow", correct: false },
        ],
        explanation:
            "The box-shadow property adds one or more shadows to an element's box. It can create subtle depth, elevation, and decorative effects.",
    },
    {
        category: "SHADOW SYNTAX",
        type: "single",
        question: "Which value controls how far a shadow moves horizontally?",
        code: "box-shadow: 10px 5px 20px rgba(0, 0, 0, .2);",
        answers: [
            { text: "10px — horizontal offset", correct: true },
            { text: "5px — vertical offset", correct: false },
            { text: "20px — blur radius", correct: false },
            { text: "rgba() — shadow position", correct: false },
        ],
        explanation:
            "The first length is the horizontal offset. A positive value moves the shadow to the right; a negative value moves it to the left.",
    },
    {
        category: "SHADOW SYNTAX",
        type: "single",
        question: "What happens when the vertical offset is positive?",
        code: "box-shadow: 0 14px 24px rgba(0, 0, 0, .2);",
        answers: [
            { text: "The shadow moves downward", correct: true },
            { text: "The shadow moves upward", correct: false },
            { text: "The shadow becomes transparent", correct: false },
            { text: "The shadow becomes sharper", correct: false },
        ],
        explanation:
            "The second length controls the vertical offset. Positive values move the shadow down, while negative values move it up.",
    },
    {
        category: "BLUR RADIUS",
        type: "single",
        question: "Which value controls the softness of the shadow's edges?",
        code: "box-shadow: 0 12px 30px rgba(0, 0, 0, .2);",
        answers: [
            { text: "The blur radius: 30px", correct: true },
            { text: "The horizontal offset: 0", correct: false },
            { text: "The vertical offset: 12px", correct: false },
            { text: "The element's border radius", correct: false },
        ],
        explanation:
            "The third length is the blur radius. A larger blur creates a softer, more diffused shadow. A blur radius of zero produces a sharp edge.",
    },
    {
        category: "SPREAD RADIUS",
        type: "single",
        question: "What does the spread radius control?",
        code: "box-shadow: 0 10px 20px 5px rgba(0, 0, 0, .2);",
        answers: [
            { text: "How much the shadow expands or contracts", correct: true },
            { text: "How transparent the shadow is", correct: false },
            { text: "How far the element moves", correct: false },
            { text: "How rounded the element becomes", correct: false },
        ],
        explanation:
            "The fourth length is the spread radius. A positive value expands the shadow; a negative value contracts it.",
    },
    {
        category: "COLOR & OPACITY",
        type: "single",
        question:
            "Which color format makes it easy to control shadow transparency?",
        code: "box-shadow: 0 10px 25px rgba(0, 0, 0, .18);",
        answers: [
            { text: "rgba() with an alpha value", correct: true },
            { text: "A color name without transparency", correct: false },
            { text: "A CSS font-size value", correct: false },
            { text: "A border-style keyword", correct: false },
        ],
        explanation:
            "The alpha channel in rgba() controls opacity. An alpha value of 0 is fully transparent, while 1 is fully opaque.",
    },
    {
        category: "COLOR & OPACITY",
        type: "single",
        question: "What does an alpha value of 0 mean in an RGBA shadow color?",
        code: "box-shadow: 0 10px 20px rgba(0, 0, 0, 0);",
        answers: [
            { text: "The shadow is fully transparent", correct: true },
            { text: "The shadow is fully opaque", correct: false },
            { text: "The shadow becomes white", correct: false },
            { text: "The blur radius becomes zero", correct: false },
        ],
        explanation:
            "The alpha channel controls transparency. At 0, the shadow color is completely transparent, so the shadow cannot be seen.",
    },
    {
        category: "INSET SHADOW",
        type: "single",
        question: "What does the inset keyword do?",
        code: "box-shadow: inset 0 3px 8px rgba(0, 0, 0, .2);",
        answers: [
            { text: "Draws the shadow inside the element", correct: true },
            { text: "Removes the shadow completely", correct: false },
            { text: "Moves the shadow behind the page", correct: false },
            { text: "Adds a border around the element", correct: false },
        ],
        explanation:
            "The inset keyword changes an outer shadow into an inner shadow. It creates a recessed or pressed-in appearance.",
    },
    {
        category: "MULTIPLE SHADOWS",
        type: "single",
        question: "How can you apply multiple shadows to one element?",
        code: "box-shadow: 0 4px 8px rgba(0,0,0,.1),\n             0 16px 32px rgba(0,0,0,.15);",
        answers: [
            { text: "Separate each shadow with a comma", correct: true },
            { text: "Separate each shadow with a semicolon", correct: false },
            { text: "Write each shadow in a new CSS selector", correct: false },
            { text: "Use the multiple-shadow property", correct: false },
        ],
        explanation:
            "You can layer multiple shadows by separating shadow definitions with commas. Each shadow can have its own offsets, blur, spread, and color.",
    },
    {
        category: "OFFSET VALUES",
        type: "single",
        question: "What does a negative horizontal offset do?",
        code: "box-shadow: -12px 8px 20px rgba(0, 0, 0, .2);",
        answers: [
            { text: "Moves the shadow to the left", correct: true },
            { text: "Moves the shadow to the right", correct: false },
            { text: "Moves the shadow upward", correct: false },
            { text: "Removes the shadow", correct: false },
        ],
        explanation:
            "Negative horizontal offsets move the shadow left. Negative vertical offsets move it upward.",
    },
    {
        category: "BLUR RADIUS",
        type: "single",
        question: "What happens when the blur radius is set to zero?",
        code: "box-shadow: 8px 8px 0 rgba(0, 0, 0, .3);",
        answers: [
            { text: "The shadow has sharp, unblurred edges", correct: true },
            { text: "The shadow becomes invisible", correct: false },
            { text: "The shadow becomes very soft", correct: false },
            { text: "The shadow moves inside the element", correct: false },
        ],
        explanation:
            "A zero blur radius creates a crisp shadow edge. The shadow can still be visible because its offsets and color remain.",
    },
    {
        category: "SHADOW SOFTNESS",
        type: "single",
        question: "Which shadow is likely to look the softest?",
        code: "/* A */ box-shadow: 0 5px 8px rgba(0,0,0,.2);\n/* B */ box-shadow: 0 5px 45px rgba(0,0,0,.2);",
        answers: [
            { text: "B — it has a larger blur radius", correct: true },
            { text: "A — it has a smaller blur radius", correct: false },
            { text: "Both have exactly the same softness", correct: false },
            { text: "Neither creates a shadow", correct: false },
        ],
        explanation:
            "The larger blur radius in example B spreads the shadow over a wider area, producing softer edges.",
    },
    {
        category: "SPREAD RADIUS",
        type: "single",
        question: "What effect does a negative spread radius usually create?",
        code: "box-shadow: 0 12px 25px -8px rgba(0, 0, 0, .25);",
        answers: [
            { text: "It contracts the shadow", correct: true },
            { text: "It expands the shadow", correct: false },
            { text: "It increases the element's width", correct: false },
            {
                text: "It changes the shadow into an inset shadow",
                correct: false,
            },
        ],
        explanation:
            "A negative spread radius shrinks the shadow's shape before blur is applied. It can help create a tighter, more controlled elevation effect.",
    },
    {
        category: "LAYOUT & RENDERING",
        type: "single",
        question:
            "Does box-shadow normally take up space in the document layout?",
        code: ".card {\n    width: 240px;\n    box-shadow: 0 12px 30px rgba(0,0,0,.2);\n}",
        answers: [
            {
                text: "No. It does not change the element's layout dimensions",
                correct: true,
            },
            { text: "Yes. It increases the element's width", correct: false },
            { text: "Yes. It adds padding around the element", correct: false },
            { text: "Yes. It changes the element's margin", correct: false },
        ],
        explanation:
            "Box shadows are visual effects. They do not change the element's layout size or push neighboring elements away.",
    },
    {
        category: "SHADOW CLIPPING",
        type: "single",
        question:
            "Why might a card's shadow disappear at the edge of its parent container?",
        code: ".container {\n    overflow: hidden;\n}",
        answers: [
            {
                text: "The parent may clip the shadow with overflow: hidden",
                correct: true,
            },
            { text: "Box-shadow only works on images", correct: false },
            { text: "The shadow needs a border-radius value", correct: false },
            {
                text: "The browser automatically removes all shadows",
                correct: false,
            },
        ],
        explanation:
            "A parent with overflow: hidden can clip content that extends beyond its bounds, including the visible portion of a child's shadow.",
    },
    {
        category: "ELEVATION",
        type: "single",
        question:
            "Which shadow is generally a better starting point for a subtle card elevation?",
        code: "/* A */ box-shadow: 0 2px 8px rgba(0,0,0,.08);\n/* B */ box-shadow: 0 30px 70px rgba(0,0,0,.55);",
        answers: [
            { text: "A — subtle offset and low opacity", correct: true },
            { text: "B — very large offset and opacity", correct: false },
            { text: "Both are equally subtle", correct: false },
            { text: "Neither can be used on cards", correct: false },
        ],
        explanation:
            "A small offset, moderate blur, and low opacity often create a restrained elevation effect. Strong shadows can work too, but should communicate a deliberate hierarchy.",
    },
    {
        category: "MULTIPLE SHADOWS",
        type: "multiple",
        question:
            "Which statements about multiple box shadows are correct? Select all that apply.",
        code: "box-shadow:\n    0 2px 5px rgba(0,0,0,.08),\n    0 12px 28px rgba(0,0,0,.12);",
        answers: [
            { text: "Multiple shadows are separated by commas", correct: true },
            { text: "Each shadow can use different values", correct: true },
            {
                text: "Every shadow must have the same blur radius",
                correct: false,
            },
            { text: "Only one shadow is allowed per element", correct: false },
        ],
        explanation:
            "Multiple shadows can be layered with commas. Each layer can have its own offsets, blur, spread, and color. This is useful for creating more natural depth.",
    },
    {
        category: "SHADOW SYNTAX",
        type: "multiple",
        question:
            "Which values can appear in a box-shadow declaration? Select all that apply.",
        code: "box-shadow: 4px 8px 20px 2px rgba(20, 30, 50, .2);",
        answers: [
            { text: "Horizontal offset", correct: true },
            { text: "Vertical offset", correct: true },
            { text: "Blur radius", correct: true },
            { text: "Spread radius", correct: true },
        ],
        explanation:
            "The standard box-shadow syntax can include horizontal offset, vertical offset, blur radius, spread radius, and a color. The inset keyword is also available.",
    },
    {
        category: "ACCESSIBILITY",
        type: "multiple",
        question:
            "Which are good practices when using shadows in interface design? Select all that apply.",
        code: ".button:focus-visible {\n    outline: 2px solid #91a8ff;\n    outline-offset: 4px;\n}",
        answers: [
            {
                text: "Keep shadows subtle when they are only decorative",
                correct: true,
            },
            { text: "Use a visible keyboard focus indicator", correct: true },
            {
                text: "Use shadows as the only way to communicate important information",
                correct: false,
            },
            {
                text: "Check that shadows have enough visual contrast for their purpose",
                correct: true,
            },
        ],
        explanation:
            "Shadows should support hierarchy rather than carry essential meaning alone. Keyboard users also need a clear focus indicator; do not rely on decorative shadows as a replacement for it.",
    },
    {
        category: "PRACTICAL CSS",
        type: "single",
        question:
            "Which declaration creates a soft shadow below a card, with no horizontal movement?",
        code: "/* Choose the best option */",
        answers: [
            {
                text: "box-shadow: 0 14px 30px rgba(0, 0, 0, .15);",
                correct: true,
            },
            {
                text: "box-shadow: 14px 0 0 rgba(0, 0, 0, .15);",
                correct: false,
            },
            {
                text: "box-shadow: inset 0 0 0 rgba(0, 0, 0, .15);",
                correct: false,
            },
            { text: "box-shadow: 0 0 0 transparent;", correct: false },
        ],
        explanation:
            "The first value is zero, so there is no horizontal movement. The positive second value moves the shadow down, and the 30px blur creates soft edges.",
    },
];

/* =========================================
   DOM ELEMENTS
========================================= */

const elements = {
    startButton: document.querySelector("#start-button"),
    quizSection: document.querySelector("#quiz-section"),
    resultsSection: document.querySelector("#results-section"),
    learningNote: document.querySelector("#learning-note"),

    currentQuestion: document.querySelector("#current-question"),
    totalQuestions: document.querySelector("#total-questions"),
    progressText: document.querySelector("#progress-text"),
    progressFill: document.querySelector("#progress-fill"),
    timer: document.querySelector("#timer"),

    questionCategory: document.querySelector("#question-category"),
    questionText: document.querySelector("#question-text"),
    questionCodeWrap: document.querySelector("#question-code-wrap"),
    questionCode: document.querySelector("#question-code"),
    answerInstruction: document.querySelector("#answer-instruction"),
    answersGrid: document.querySelector("#answers-grid"),

    feedbackBox: document.querySelector("#feedback-box"),
    feedbackIcon: document.querySelector("#feedback-icon"),
    feedbackTitle: document.querySelector("#feedback-title"),
    feedbackText: document.querySelector("#feedback-text"),
    feedbackPoints: document.querySelector("#feedback-points"),

    questionHint: document.querySelector("#question-hint"),
    checkButton: document.querySelector("#check-button"),
    nextButton: document.querySelector("#next-button"),

    scoreCircle: document.querySelector("#score-circle"),
    scorePercentage: document.querySelector("#score-percentage"),
    correctCount: document.querySelector("#correct-count"),
    incorrectCount: document.querySelector("#incorrect-count"),
    resultTime: document.querySelector("#result-time"),
    resultHeading: document.querySelector("#result-heading"),
    resultMessage: document.querySelector("#result-message"),

    restartButton: document.querySelector("#restart-button"),
    reviewCount: document.querySelector("#review-count"),
    reviewList: document.querySelector("#review-list"),
};

/* =========================================
   STATE
========================================= */

const state = {
    questions: [],
    currentIndex: 0,
    selectedAnswers: [],
    results: [],
    score: 0,
    started: false,
    answered: false,
    startTime: 0,
    elapsedSeconds: 0,
    timerInterval: null,
};

/* =========================================
   HELPERS
========================================= */

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[i],
        ];
    }

    return shuffled;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds,
    ).padStart(2, "0")}`;
}

function createQuizQuestions() {
    return shuffleArray(QUESTIONS).map((question) => ({
        ...question,
        answers: shuffleArray(question.answers),
    }));
}

function scrollToQuiz() {
    elements.quizSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function updateProgress() {
    const total = state.questions.length;
    const completed = state.currentIndex;
    const percentage = (completed / total) * 100;

    elements.progressFill.style.width = `${percentage}%`;
    elements.progressText.textContent = `${Math.round(percentage)}% completed`;
}

/* =========================================
   TIMER
========================================= */

function startTimer() {
    clearInterval(state.timerInterval);

    state.startTime = Date.now();

    state.timerInterval = window.setInterval(() => {
        state.elapsedSeconds = Math.floor(
            (Date.now() - state.startTime) / 1000,
        );

        elements.timer.textContent = formatTime(state.elapsedSeconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(state.timerInterval);

    if (state.startTime) {
        state.elapsedSeconds = Math.floor(
            (Date.now() - state.startTime) / 1000,
        );
    }

    elements.timer.textContent = formatTime(state.elapsedSeconds);
}

/* =========================================
   START / RESTART
========================================= */

function startQuiz() {
    clearInterval(state.timerInterval);

    state.questions = createQuizQuestions();
    state.currentIndex = 0;
    state.selectedAnswers = [];
    state.results = [];
    state.score = 0;
    state.started = true;
    state.answered = false;
    state.elapsedSeconds = 0;

    elements.resultsSection.classList.add("hidden");
    elements.quizSection.classList.remove("hidden");
    elements.learningNote.classList.remove("hidden");

    elements.totalQuestions.textContent = state.questions.length;
    elements.timer.textContent = "00:00";

    renderQuestion();
    startTimer();
    scrollToQuiz();
}

/* =========================================
   RENDER QUESTION
========================================= */

function renderQuestion() {
    const question = state.questions[state.currentIndex];

    if (!question) return;

    state.selectedAnswers = [];
    state.answered = false;

    elements.currentQuestion.textContent = String(
        state.currentIndex + 1,
    ).padStart(2, "0");

    elements.questionCategory.textContent = question.category;
    elements.questionText.textContent = question.question;

    if (question.code) {
        elements.questionCodeWrap.classList.remove("hidden");
        elements.questionCode.textContent = question.code;
    } else {
        elements.questionCodeWrap.classList.add("hidden");
        elements.questionCode.textContent = "";
    }

    elements.answerInstruction.textContent =
        question.type === "multiple"
            ? "Select all correct answers."
            : "Select the best answer.";

    elements.questionHint.textContent =
        question.type === "multiple"
            ? "Multiple answers are possible."
            : "Choose one answer to continue.";

    elements.feedbackBox.classList.add("hidden");
    elements.feedbackBox.classList.remove("incorrect-feedback");

    elements.checkButton.classList.remove("hidden");
    elements.checkButton.disabled = true;

    elements.nextButton.classList.add("hidden");
    elements.nextButton.disabled = false;

    elements.answersGrid.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-option";
        button.dataset.index = index;
        button.setAttribute("aria-pressed", "false");

        const marker = document.createElement("span");
        marker.className = "answer-marker";
        marker.textContent = String(index + 1);

        const text = document.createElement("span");
        text.className = "answer-text";
        text.textContent = answer.text;

        button.append(marker, text);

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        elements.answersGrid.appendChild(button);
    });

    updateProgress();
}

/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(index) {
    if (state.answered) return;

    const question = state.questions[state.currentIndex];

    if (question.type === "single") {
        state.selectedAnswers = [index];
    } else {
        if (state.selectedAnswers.includes(index)) {
            state.selectedAnswers = state.selectedAnswers.filter(
                (selectedIndex) => selectedIndex !== index,
            );
        } else {
            state.selectedAnswers.push(index);
        }
    }

    updateAnswerSelection();
}

function updateAnswerSelection() {
    const buttons = elements.answersGrid.querySelectorAll(".answer-option");

    buttons.forEach((button) => {
        const index = Number(button.dataset.index);
        const selected = state.selectedAnswers.includes(index);

        button.classList.toggle("selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });

    elements.checkButton.disabled = state.selectedAnswers.length === 0;
}

/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer() {
    if (state.answered || state.selectedAnswers.length === 0) {
        return;
    }

    const question = state.questions[state.currentIndex];

    const correctIndexes = question.answers
        .map((answer, index) => (answer.correct ? index : -1))
        .filter((index) => index !== -1);

    const selected = [...state.selectedAnswers].sort((a, b) => a - b);

    const correct = [...correctIndexes].sort((a, b) => a - b);

    const isCorrect =
        selected.length === correct.length &&
        selected.every((value, index) => value === correct[index]);

    state.answered = true;

    if (isCorrect) {
        state.score++;
    }

    state.results.push({
        question,
        selectedAnswers: selected,
        correctAnswers: correct,
        isCorrect,
    });

    showFeedback(isCorrect);
    showCorrectAnswers();
}

/* =========================================
   FEEDBACK
========================================= */

function showFeedback(isCorrect) {
    const question = state.questions[state.currentIndex];

    elements.feedbackBox.classList.remove("hidden");
    elements.feedbackBox.classList.toggle("incorrect-feedback", !isCorrect);

    elements.feedbackIcon.textContent = isCorrect ? "✓" : "!";
    elements.feedbackTitle.textContent = isCorrect
        ? "Correct answer!"
        : "Not quite — let's learn.";

    elements.feedbackText.textContent = question.explanation;

    elements.feedbackPoints.textContent = isCorrect ? "+1" : "0";

    elements.questionHint.textContent = isCorrect
        ? "Great work. Move on when you're ready."
        : "Review the explanation before continuing.";

    elements.checkButton.classList.add("hidden");
    elements.nextButton.classList.remove("hidden");

    elements.nextButton.querySelector("span:first-child").textContent =
        state.currentIndex === state.questions.length - 1
            ? "See your results"
            : "Next question";
}

function showCorrectAnswers() {
    const question = state.questions[state.currentIndex];
    const buttons = elements.answersGrid.querySelectorAll(".answer-option");

    buttons.forEach((button) => {
        const index = Number(button.dataset.index);
        const answer = question.answers[index];
        const selected = state.selectedAnswers.includes(index);

        button.disabled = true;

        if (answer.correct) {
            button.classList.add("correct");
        } else if (selected) {
            button.classList.add("incorrect");
        }
    });
}

/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {
    if (!state.answered) return;

    state.currentIndex++;

    if (state.currentIndex >= state.questions.length) {
        finishQuiz();
        return;
    }

    renderQuestion();

    elements.quizSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

/* =========================================
   RESULTS
========================================= */

function finishQuiz() {
    stopTimer();

    state.started = false;

    elements.quizSection.classList.add("hidden");
    elements.resultsSection.classList.remove("hidden");

    const total = state.questions.length;
    const correct = state.score;
    const incorrect = total - correct;
    const percentage = Math.round((correct / total) * 100);

    elements.scorePercentage.textContent = `${percentage}%`;
    elements.correctCount.textContent = correct;
    elements.incorrectCount.textContent = incorrect;
    elements.resultTime.textContent = formatTime(state.elapsedSeconds);

    elements.scoreCircle.style.background = `conic-gradient(
            var(--blue) 0%,
            var(--violet) ${percentage}%,
            #293653 ${percentage}%,
            #293653 100%
        )`;

    if (percentage === 100) {
        elements.resultHeading.textContent = "Perfectly balanced!";
        elements.resultMessage.textContent =
            "Outstanding! You understand the details behind CSS shadows.";
    } else if (percentage >= 80) {
        elements.resultHeading.textContent = "Great depth!";
        elements.resultMessage.textContent =
            "Excellent work. You have a strong understanding of box-shadow.";
    } else if (percentage >= 60) {
        elements.resultHeading.textContent = "Getting closer!";
        elements.resultMessage.textContent =
            "Good progress. Review the explanations and strengthen your understanding.";
    } else {
        elements.resultHeading.textContent = "Keep experimenting.";
        elements.resultMessage.textContent =
            "Every attempt is progress. Review the answers and give it another try.";
    }

    renderReview();
    saveResult(percentage, correct, total);

    elements.reviewCount.textContent = `${total} questions`;

    elements.resultsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

/* =========================================
   ANSWER REVIEW
========================================= */

function renderReview() {
    elements.reviewList.innerHTML = "";

    state.results.forEach((result, index) => {
        const item = document.createElement("article");
        item.className = "review-item";

        const top = document.createElement("div");
        top.className = "review-item-top";

        const number = document.createElement("span");
        number.className = "review-number";
        number.textContent = `QUESTION ${String(index + 1).padStart(2, "0")}`;

        const status = document.createElement("span");
        status.className = `review-status ${
            result.isCorrect ? "correct" : "incorrect"
        }`;

        status.textContent = result.isCorrect ? "✓ CORRECT" : "✕ INCORRECT";

        top.append(number, status);

        const question = document.createElement("h4");
        question.className = "review-question";
        question.textContent = result.question.question;

        const yourAnswer = document.createElement("p");
        yourAnswer.className = "review-answer";

        const selectedTexts = result.selectedAnswers.map(
            (index) => result.question.answers[index].text,
        );

        const correctTexts = result.correctAnswers.map(
            (index) => result.question.answers[index].text,
        );

        yourAnswer.innerHTML = `<strong>Your answer:</strong> ${
            selectedTexts.length
                ? selectedTexts.map(escapeHTML).join(", ")
                : "No answer"
        }`;

        const correctAnswer = document.createElement("p");
        correctAnswer.className = "review-answer";
        correctAnswer.innerHTML = `<strong>Correct answer:</strong> ${correctTexts
            .map(escapeHTML)
            .join(", ")}`;

        const explanation = document.createElement("p");
        explanation.className = "review-explanation";
        explanation.textContent = result.question.explanation;

        item.append(top, question, yourAnswer, correctAnswer, explanation);

        elements.reviewList.appendChild(item);
    });
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
        };

        return entities[character];
    });
}

/* =========================================
   ROADMAP RESULT STORAGE
========================================= */

/* =========================================
   ROADMAP RESULT STORAGE
========================================= */

function saveResult(percentage, correct, total) {
    const now = new Date().toISOString();

    const attempt = {
        score: correct,
        total,
        percentage,
        completedAt: now,
    };

    try {
        const stored = localStorage.getItem(CONFIG.storageKey);

        let data = stored ? JSON.parse(stored) : {};

        // Validate the root structure
        if (!data || typeof data !== "object" || Array.isArray(data)) {
            data = {};
        }

        // Preserve existing roadmap data
        data.schemaVersion = 1;
        data.updatedAt = now;

        if (
            !data.tests ||
            typeof data.tests !== "object" ||
            Array.isArray(data.tests)
        ) {
            data.tests = {};
        }

        const existingTest = data.tests[CONFIG.testId] || {};

        const previousBest = existingTest.best || null;

        const isNewBest =
            !previousBest ||
            percentage > previousBest.percentage ||
            (percentage === previousBest.percentage &&
                correct > previousBest.score);

        const history = Array.isArray(existingTest.history)
            ? existingTest.history
            : [];

        history.push(attempt);

        data.tests[CONFIG.testId] = {
            testId: CONFIG.testId,
            title: CONFIG.testTitle,

            attempts: (existingTest.attempts || 0) + 1,

            latest: attempt,

            best: isNewBest ? attempt : previousBest,

            history: history.slice(-CONFIG.historyLimit),
        };

        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));

        console.log(
            `Skills Check ${CONFIG.testId} result saved.`,
            data.tests[CONFIG.testId],
        );
    } catch (error) {
        console.warn("Could not save roadmap result:", error);
    }
}

/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener("keydown", (event) => {
    if (!state.started || state.answered) return;

    if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
    ) {
        return;
    }

    const number = Number(event.key);

    if (number >= 1 && number <= 4) {
        const question = state.questions[state.currentIndex];

        if (number <= question.answers.length) {
            selectAnswer(number - 1);
        }
    }

    if (event.key === "Enter" && !elements.checkButton.disabled) {
        checkAnswer();
    }
});

/* =========================================
   EVENT LISTENERS
========================================= */

elements.startButton.addEventListener("click", startQuiz);

elements.restartButton.addEventListener("click", startQuiz);

elements.checkButton.addEventListener("click", checkAnswer);

elements.nextButton.addEventListener("click", nextQuestion);

/* =========================================
   INITIALIZATION
========================================= */

elements.totalQuestions.textContent = QUESTIONS.length;
elements.progressText.textContent = "0% completed";
elements.progressFill.style.width = "0%";
