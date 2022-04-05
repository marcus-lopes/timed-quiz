var buttonStartQuiz = document.querySelector('#button');
var startQuiz = document.querySelector('.startQuiz');
var questionsDiv = document.querySelector('.questions');
var answersButtons = document.querySelector('#buttons');
var points = document.querySelector('.points');
var myTimer = document.querySelector('#timer')
//Question
var question = document.querySelector('#question');
var ans1 = document.querySelector('#ans1');
var ans2 = document.querySelector('#ans2');
var ans3 = document.querySelector('#ans3');
var seconds = 60;
var timeInterval ;
var refresh ;

var questions = [
    {
        question: 'Which of these characters is the protagonist of Dragon Ball?',
        options: [
            'Gohan',
            'Goku',
            'vegeta',
        ],
        correct: 1
    },
    {
        question: 'How many Saiyans are still alive and living on Earth?',
        options: [
            '10 saiyans',
            '7 saiyans',
            '6 saiyans',
        ],
        correct: 1
    },
    {
        question: "What is the name of Universe 7's God of Destruction ?",
        options: [
            'Beerus',
            'Champa',
            'Sidra',
        ],
        correct: 0
    },
    {
        question: 'How many participants does the Tournament of Power have?',
        options: [
            '100 warriors',
            '60 warriors',
            '80 warriors',
        ],
        correct: 2
    },
    {
        question: 'How many universes are there in dragon ball?',
        options: [
            '7 universes',
            '10 universes',
            '12 universes',
        ],
        correct: 2
    }
];

var lastResult = JSON.parse(localStorage.getItem("obj"));

if(lastResult){
    showLastResult();
}

function showLastResult(){
    var resultEl  = document.createElement('p');
    resultEl.textContent = lastResult.name + ' got a score of: ' + lastResult.points + '/ with time remaining ' + lastResult.seconds;
    points.append(resultEl);
}

var currentQuestion = 0;

//botão para começar o quiz e iniciar a primeira pergunta
buttonStartQuiz.addEventListener('click', function (){  
    hideStartQuiz();
    showQuestionDiv();
    showNextQuestion();
    startTimer();  
});

answersButtons.addEventListener('click', function(event){
    var clickedBtn = event.target;
    console.log(clickedBtn);
    if(clickedBtn.matches('button')){
        var optionIndex = clickedBtn.getAttribute('data-index');
        console.log(optionIndex);
        console.log(currentQuestion);
    }
    if(currentQuestion < questions.length-1){
        currentQuestion++;
        showNextQuestion();
    }else{
        clearInterval(timeInterval);
        endGame();
    }
})

function showQuestionDiv(){
    questionsDiv.setAttribute('style', 'display: block;');
}

function hideStartQuiz(){
    startQuiz.setAttribute('style', 'display: none;');
}

function showNextQuestion(){
    question.textContent = questions[currentQuestion].question;
    ans1.textContent = questions[currentQuestion].options[0];
    ans2.textContent = questions[currentQuestion].options[1];
    ans3.textContent = questions[currentQuestion].options[2];   
}

function startTimer(){
    timeInterval = setInterval(function(){
        seconds--;
        myTimer.textContent = seconds;

        if(seconds === 0){
            clearInterval(timeInterval);
            hideStartQuiz(questionsDiv);
            endGame();
            // loser();
        }
    }, 1000);
}

function Punctuation(){
     
}

function endGame(){
    var name = prompt("What's your name?");
   var dataObjeto = JSON.stringify({seconds, name});
   localStorage.setItem('obj', dataObjeto);
   reload();
}

function reload(){
    window.location.reload();
}

// function loser(){
//     var youLoser = "";
//     if(timer === 0){ 
//     youLoser.textContent = "You lost!!";
//     console.log(youLoser);
//  }
// }


