const questions = [
    {
        question: "Berapa besar hambatan total atau hambatan pengganti?",
        answers: [
            {text: "1 Ω", correct: true},
            {text: "4 Ω", correct: false},
            {text: "5 Ω", correct: false},
            {text: "2 Ω", correct: false},
        ]
    },
    {
        question: "Berapa besar arus yang melewati hambatan pertama, hambatan kedua, dan hambatan ketiga?",
        answers: [
            {text: "0.5A - 1.5A - 3A", correct: false},
            {text: "1A - 2.5A - 1.5A", correct: false},
            {text: "1.5A - 1A - 0.5A", correct: true},
            {text: "1.5A - 0.5A - 1A", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");
const imgPertama = document.getElementById("serahlo");
const rumusPler = document.getElementById("oke");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion();
    
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    rumusPler.style.display = "none";
    imgPertama.style.display = "block";

    if(questionNo == 1){
       rumusPler.src ="jawab3.png";
      }
      else {
        rumusPler.src ="jawab4.png";
    }

    if(questionNo == 1){
        document.getElementById("serahlo").src="soal12.png";
      }
      else if(questionNo == 2){
        document.getElementById("serahlo").src="soal12.png";
      }else{
        imgPertama.style.display = "none";
      }
    questionElement.innerHTML =questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display = "block";
    rumusPler.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Mulai Lagi";
    nextButton.style.display = "block";
    rumusPler.style.display = "none";
    imgPertama.style.display = "none";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        // imgPertama.classList.add('hidden');
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        // imgPertama.classList.remove('hidden');
    }
})
startQuiz();
