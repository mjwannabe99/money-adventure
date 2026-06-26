// ================================
// Money Adventure v1.0
// script.js
// ================================

let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];

// HTML 요소
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");

// ================================
// 시작
// ================================

startGame();

function startGame() {

    score = 0;
    currentQuestion = 0;

    shuffledQuestions = [...questions];

    shuffleArray(shuffledQuestions);

    updateScore();

    showQuestion();

}

// ================================
// 문제 출력
// ================================

function showQuestion() {

    if (currentQuestion >= shuffledQuestions.length) {

        finishGame();
        return;

    }

    const q = shuffledQuestions[currentQuestion];

    progressEl.innerHTML =
        `문제 ${currentQuestion + 1} / ${shuffledQuestions.length}`;

    questionEl.innerHTML = q.question;

    resultEl.innerHTML = "";

    choicesEl.innerHTML = "";

    q.choices.forEach(choice => {

        const btn = document.createElement("button");

        btn.className = "choice";

        btn.innerHTML = choice;

        btn.onclick = () => checkAnswer(choice);

        choicesEl.appendChild(btn);

    });

}

// ================================
// 정답 체크
// ================================

function checkAnswer(choice) {

    const q = shuffledQuestions[currentQuestion];

    const buttons = document.querySelectorAll(".choice");

    buttons.forEach(btn => btn.disabled = true);

    if (choice === q.answer) {

        score++;

        resultEl.innerHTML =
            "🎉 정답입니다!";

        resultEl.style.color = "#2E7D32";

    } else {

        resultEl.innerHTML =
            `😊 아쉬워요!<br><br>정답은 <b>${q.answer}</b> 입니다.`;

        resultEl.style.color = "#D32F2F";

    }

    updateScore();

    setTimeout(() => {

        currentQuestion++;

        showQuestion();

    }, 1500);

}

// ================================
// 점수
// ================================

function updateScore() {

    scoreEl.innerHTML =
        `점수 : ${score}점`;

}

// ================================
// 종료
// ================================

function finishGame() {

    let message = "";

    const percent =
        Math.round(score / shuffledQuestions.length * 100);

    if (percent === 100) {

        message = "🏆 화폐 박사입니다!";

    } else if (percent >= 80) {

        message = "🌟 정말 잘했어요!";

    } else if (percent >= 60) {

        message = "😊 조금만 더 연습하면 돼요!";

    } else {

        message = "💪 다시 도전해볼까요?";

    }

    questionEl.innerHTML = `
        <h2>게임 완료!</h2>
        <h3>${score} / ${shuffledQuestions.length}</h3>
        <h2>${message}</h2>
    `;

    choicesEl.innerHTML = "";

    resultEl.innerHTML = "";

    progressEl.innerHTML = "";

    const restart = document.createElement("button");

    restart.innerHTML = "🔄 다시하기";

    restart.className = "choice";

    restart.onclick = startGame;

    choicesEl.appendChild(restart);

}

// ================================
// 배열 섞기
// ================================

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
        [array[j], array[i]];

    }

}