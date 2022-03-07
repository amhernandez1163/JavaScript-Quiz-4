var body = document.body;
var intro = document.getElementsByClassName("intro")
var timer = document.getElementsByClassName("countdown")
var questions = document.getElementsByClassName("questions")
var answer1 = document.getElementsByClassName("answerOne")
var answer2 = document.getElementsByClassName("answerTwo")
var answer3 = document.getElementsByClassName("answerThree")

var questionsArr = [
    
    {question: document.getElementById("#questionOne"),
    answers: answer1, 
    correct: [3],
    },
    {question: document.getElementById("#questionTwo"),
    answers: answer2,
    correct: [0],
    },
    {question: document.getElementById("#questionThree"),
    answers: answer3,
    correct: [2],
    },
    {question: document.getElementById("#questionFour"),
    answers: answer4,
    correct: [3],
    },
]




// start function - add event listener for button // start button prompts first question

// timer - setInterval - but needs to begin at click of start

// questions - prompted at the click of start

// right answer=  proceed to the next question - indicate if correct? 

// wrong answer =  WRONG - indicate wrong - deduct time

// replay function - being start again 


// event listener for start click 
document.addEventListener("click", )