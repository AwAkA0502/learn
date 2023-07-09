const questions = [
    {
        question: "Jika muatan dan kapasitas kapasitor diketahui berturut-turut sebesar 5 μC dan 20 μF,tentukan beda potensial kapasitor tersebut!",
        answers: [
            {text: "0.18 𝑣𝑜𝑙𝑡 ", correct: false},
            {text: "5 𝑣𝑜𝑙𝑡 ", correct: false},
            {text: "0,5 𝑣𝑜𝑙𝑡 ", correct: false},
            {text: "0.25 𝑣𝑜𝑙𝑡 ", correct: true},
        ]
    },
    {
        question: "Sebuah lampu memiliki hambatan kurang lebih sekitar 4 ohm. Bila lampu tersebut dialiri oleh arus listrik sebesar 2 ampere selama 3 menit, maka berapakah energi listrik yang dihasilkan?",
        answers: [
            {text: " 280 J ", correct: false},
            {text: " 2880 J ", correct: true},
            {text: " 80 J ", correct: false},
            {text: "90 J ", correct: false},
        ]
    }
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
    imgPertama.style.display = "none";

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
