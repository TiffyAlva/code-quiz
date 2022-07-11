//Question 1: "Commonly used data types DO NOT include:"
//Choices: strings, booleans, alerts, numbers
//Answer: alerts

//Question 2: "The condition in an if / else statement is enclosed within_____."
//Choices: quotes, curly brackets, parenthesis, square brackets
//Answer: parenthesis

//Question 3: "Arrays in JavaScript can be used to store_____."
//Choices: numbers and strings, other arrays, booleans, all of the above
//Answer: all of the above

//Question 4: "String values must be encloed within _____ when being assigned to variables."
//Choices: commas, curly brakets, quotes, parenthesis
//Answer: quotes

//Question 5: "A very useful tool used during development and debugging for printing content to the debugger is:"
//Choices: JavaScript, terminal/bash, for loops, console.log
//Answer: console.log


// questions[3].answer
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"


    },
    {
        question: "The condition in an if / else statement is enclosed within_____.", 
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"], 
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store_____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be encloed within _____ when being assigned to variables.",
        choices: ["commas", "curly brakets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
];

var timer = document.querySelector("#timer");
var wrapper = document.querySelector("#wrapper");
var startBtn = document.querySelector("#start");

var qNum = 0;
var time = 75;
timer.textContent = time


startBtn.addEventListener("click", startQuiz)

function startQuiz (){
    var displayDiv = document.querySelector("#display")
    displayDiv.style.display = "block"

    var questionsDiv = document.querySelector("#questions")
    questionsDiv.style.display = "none"

    var timerInterval= setInterval(function() { 
        time = time -1 
        timer.textContent = time 
        if (time == 0 ){
        clearInterval(timerInterval)
        }
        console.log(time);
     }, 1000);

    showQuestion()
}

function showQuestion (){
    var questionTextH2 = document.querySelector("#questiontext")
    questionTextH2.textContent = questions[qNum].question
    
    var choice1Btn = document.querySelector("#choice1")
    choice1Btn.textContent = questions[qNum].choices[0]
    choice1Btn.addEventListener("click", clickAnswer)

    var choice2Btn = document.querySelector("#choice2")
    choice2Btn.textContent = questions[qNum].choices[1]
    choice2Btn.addEventListener("click", clickAnswer)

    var choice3Btn = document.querySelector("#choice3")
    choice3Btn.textContent = questions[qNum].choices[2]
    choice3Btn.addEventListener("click", clickAnswer)

    var choice4Btn = document.querySelector("#choice4")
    choice4Btn.textContent = questions[qNum].choices[3]
    choice4Btn.addEventListener("click", clickAnswer)

    
}


function clickAnswer () {
    // if-else statement to check if what they clicked is the correct answer

    // change what question number should be displayed
    // add +1 to the current value of qNum
    qNum++;

    // call showQuestion again
    showQuestion()
}


// function for the time
// setInterval -> lookup



