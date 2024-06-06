const quizData = [
    {
        question: "What is a recommended daily amount of water to stay hydrated?",
        options: ["4 glasses", "6 glasses", "8 glasses", "10 glasses"],
        answer: "8 glasses"
    },
    {
        question: "How many minutes of moderate exercise is recommended most days of the week?",
        options: ["15 minutes", "30 minutes", "45 minutes", "60 minutes"],
        answer: "30 minutes"
    },
    {
        question: "Which of the following is NOT a benefit of regular exercise?",
        options: ["Improved mood", "Reduced stress", "Increased risk of chronic diseases", "Strengthened muscles and bones"],
        answer: "Increased risk of chronic diseases"
    },
    {
        question: "How many hours of sleep are recommended per night for optimal health?",
        options: ["5-6 hours", "6-7 hours", "7-9 hours", "9-10 hours"],
        answer: "7-9 hours"
    },
    {
        question: "Which nutrient is NOT emphasized in a balanced diet?",
        options: ["Fruits", "Vegetables", "Whole grains", "Processed foods"],
        answer: "Processed foods"
    },
    {
        question: "What percentage of daily calories should come from saturated fats according to the American Heart Association?",
        options: ["Less than 7%", "Less than 10%", "Less than 15%", "Less than 20%"],
        answer: "Less than 7%"
    },
    {
        question: "How many cups of vegetables are recommended per day for adults?",
        options: ["1 cup", "1.5 cups", "2 cups", "2.5 cups"],
        answer: "2.5 cups"
    },
    {
        question: "Which organization provides guidelines on healthy diets and nutrient intake?",
        options: ["World Health Organization (WHO)", "American Red Cross", "United Nations (UN)", "Centers for Disease Control and Prevention (CDC)"],
        answer: "World Health Organization (WHO)"
    },
    {
        question: "Which of the following is a benefit of mindful eating?",
        options: ["Faster eating", "Reduced food enjoyment", "Better recognition of hunger and fullness cues", "Increased consumption of unhealthy foods"],
        answer: "Better recognition of hunger and fullness cues"
    },
    {
        question: "What is a recommended daily intake of added sugars for men?",
        options: ["3 teaspoons", "6 teaspoons", "9 teaspoons", "12 teaspoons"],
        answer: "9 teaspoons"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const readyButton = document.getElementById("ready");
const restartButton = document.getElementById("restart");

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    readyButton.style.display = "none"; // Hide the ready button
    questionElement.style.display = "block"; // Show the question
    optionsElement.style.display = "grid"; // Show the options
    restartButton.style.display = "block";
    showQuestion(); // Start showing questions
}

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = `${currentQuestion + 1}. ${question.question}`;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.innerHTML = `Quiz Completed! Your score: ${score}/${quizData.length}`;
    optionsElement.innerHTML = "";
    readyButton.style.display = "none";
    restartButton.style.display = "block";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
    submitButton.style.display = "block";
    restartButton.style.display = "none";
}

showQuestion();
