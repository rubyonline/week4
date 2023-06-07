var displayTimer = document.querySelector('#timer-display');
// Make it a 3 minute timer
var amount = 3 * 60;
var timer;

function timerBegin(duration, displayTimer) {
  timer = duration;
  var minutes, seconds;

  var countdown = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    displayTimer.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(countdown);
      alert("Timer has ended!");
    }
  }, 1000);
}


const startBtn = document.getElementById("startBtn");

const listOfQuestions = [
    {
        question: "How many yards in a football field?",
        choices: ["10", "120", "1000", "10000"],
        answer: "120"
    },
    {
        question: "How are you?",
        choices: ["good", "bad", "great", "meh"],
        answer: "good"
    },
    {
        question: "How many yards in a football field?",
        choices: ["10", "120", "1000", "10000"],
        answer: "120"
    },
    {
        question: "How many yards in a football field?",
        choices: ["10", "120", "1000", "10000"],
        answer: "120"
    },
    {
        question: "How many feet in a football field?",
        choices: ["10", "120", "360", "10000"],
        answer: "360"
    }
]
let currentQuestion = 0;

function quizStarts() {
    console.log("quiz has begun")
    document.getElementById("start-section").setAttribute("class", "hide");
    document.getElementById("quiz-section").setAttribute("class", "");
    
    timerBegin(amount, displayTimer);
    nextQuestion();
}

function nextQuestion() {
    document.getElementById("question").textContent = listOfQuestions[currentQuestion].question;

    for(i=0; i<4; i++) {
        document.getElementById("choice-" + i).textContent = listOfQuestions[currentQuestion].choices[i];
        document.getElementById("choice-" + i).addEventListener("click", checkAnswer)
    }
}

function checkAnswer(e) {
    const userChoice = e.target.textContent;
    if(userChoice === listOfQuestions[currentQuestion].answer) {
        console.log("correct");
    }else {
        console.log("incorrect");
        timer -= 10;
    }

    currentQuestion++;
    if(currentQuestion < listOfQuestions.length) {
        nextQuestion();
    }
}

startBtn.addEventListener("click", quizStarts);