// const { text } = require("body-parser");

const questions = [
    {
        question:"HTML stands for -",
        answers: [
            {text: "HighText Machine Language", correct:"false"},
            {text: "HyperText and links Markup Language", correct:"false"},
            {text: "HyperText Markup Language", correct:"true"},
            {text: "None of these", correct:"false"}
        ]
    },

    {
        question:"What attribute is used to specify the destination URL of a link in an <a> tag?",
        answers: [
            {text: "href", correct:"true"},
            {text: "src", correct:"false"},
            {text: "alt", correct:"false"},
            {text: "target", correct:"false"}
        ]
    },

    {
        question:"What are the types of unordered or bulleted list in HTML?",
        answers: [
            {text: "disc, square, triangle", correct:"false"},
            {text: "disc, circle, square", correct:"true"},
            {text: "polygon, triangle, circle", correct:"false"},
            {text: "All of the above", correct:"false"}
        ]
    },

    {
        question:"The correct sequence of HTML tags for starting a webpage is -",
        answers: [
            {text: "Head, Title, HTML, body", correct:"false"},
            {text: "HTML, Body, Title, Head", correct:"false"},
            {text: "HTML, Body, Head, Title", correct:"false"},
            {text: "HTML, Head, Title, Body", correct:"true"}
        ]
    },

    {
        question:"Which of the following attribute is used to provide a unique name to an element?",
        answers: [
            {text: "class", correct:"false"},
            {text: "id", correct:"true"},
            {text: "type", correct:"false"},
            {text: "None of the above", correct:"false"}
        ]
    },

    {
        question:"CSS stands for -",
        answers: [
            {text: "Cascade style sheets", correct:"false"},
            {text: "Color and style sheets", correct:"false"},
            {text: "Cascading style sheets", correct:"true"},
            {text: "None of the above", correct:"false"}
        ]
    },

    {
        question:"The property in CSS used to change the background color of an element is -",
        answers: [
            {text: "bgcolor", correct:"false"},
            {text: "color", correct:"false"},
            {text: "background-color", correct:"true"},
            {text: "All of the above", correct:"false"}
        ]
    },

    {
        question:"The property in CSS used to change the text color of an element is -",
        answers: [
            {text: "bgcolor", correct:"false"},
            {text: "color", correct:"true"},
            {text: "background-color", correct:"false"},
            {text: "All of the above", correct:"false"}
        ]
    },

    {
        question:"The HTML attribute used to define the inline styles is -",
        answers: [
            {text: "style", correct:"true"},
            {text: "styles", correct:"false"},
            {text: "class", correct:"false"},
            {text: "None of the above", correct:"false"}
        ]
    },

    {
        question:"Which of the following property is used as the shorthand property for the padding properties?",
        answers: [
            {text: "padding-left", correct:"false"},
            {text: "padding-right", correct:"false"},
            {text: "padding", correct:"true"},
            {text: "All of the above", correct:"false"}
        ]
    },

    {
        question:"Which one of the following is the correct way for calling the JavaScript code?",
        answers: [
            {text: "Function/Method", correct:"true"},
            {text: "Preprocessor", correct:"false"},
            {text: "Triggering Event", correct:"false"},
            {text: "RMI", correct:"false"}
        ]
    },

    {
        question:"Which type of JavaScript language is ___",
        answers: [
            {text: "Object-Oriented", correct:"false"},
            {text: "Object-Based", correct:"true"},
            {text: "Assembly-language", correct:"false"},
            {text: "High-level", correct:"false"}
        ]
    },

    {
        question:"Which one of the following also known as Conditional Expression:",
        answers: [
            {text: "Alternative to if-else", correct:"false"},
            {text: "Switch statement", correct:"false"},
            {text: "If-then-else statement", correct:"false"},
            {text: "immediate if", correct:"true"}
        ]
    },

    {
        question:"In JavaScript, what is a block of statement?",
        answers: [
            {text: "Conditional block", correct:"false"},
            {text: "block that combines a number of statements into a single compound statement", correct:"true"},
            {text: "both conditional block and a single statement", correct:"false"},
            {text: "block that contains a single statement", correct:"false"}
        ]
    },

    {
        question:"In the JavaScript, which one of the following is not considered as an error:",
        answers: [
            {text: "Syntax error", correct:"false"},
            {text: "Missing of semicolons", correct:"false"},
            {text: "Division by zero", correct:"true"},
            {text: "Missing of Bracket", correct:"false"}
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons .appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
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
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display="block";
}


function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});


startQuiz();





