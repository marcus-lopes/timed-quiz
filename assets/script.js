var buttonEl = document.querySelector('#button');
var iniciarQuiz = document.querySelector('.iniciarQuiz');
var fistQuestion = document.querySelector('.fistQuestion');
var secondQuestion = document.querySelector('.secondQuestion');
var thirdQuestion = document.querySelector('.thirdQuestion');
var fourthQuestion = document.querySelector('.fourthQuestion');
var pontuação = document.querySelector('.pontuação');
var timeEl = document.querySelector('.timer');
//fistQuestion
var goku = document.querySelector('#goku');
var vegeta = document.querySelector('#vegeta');
var gohan = document.querySelector('#gohan');
var broly = document.querySelector('#broly');
//secondQuestion
var bra = document.querySelector('#bra');
var rio = document.querySelector('#rio');
var sp = document.querySelector('#sp');
var belo = document.querySelector('#belo');
//thirthQuestion
var n7 = document.querySelector('#n7');
var n10 = document.querySelector('#n10');
var n4 = document.querySelector('#n4');
var n9 = document.querySelector('#n9');
//fourthQuestion
var champa = document.querySelector('#champa');
var bills = document.querySelector('#bills');


//botão para começar o quiz e iniciar a primeira pergunta
buttonEl.addEventListener('click', function (){  
    iniciarQuiz.setAttribute('style', 'display: none;');

    fistQuestion.setAttribute('style', 'display: block;');
    timeEl.setAttribute('style', 'display: block;');
});


function countdown(){
    var timer = 60;

    var timeInterval = setInterval(function(){
        timer--;
        timerEl.textContent = timer + "seconds left";
        
        if(timer === 0){
            clearInterval(timeInterval);           
        }

    }, 1000);
}

goku.addEventListener('click', function (){
    alert('certo'); 
    fistQuestion.setAttribute('style', 'display: none;');
    secondQuestion.setAttribute('style', 'display: block;');  
});

// vegeta.addEventListener('click', function (){
//     alert('errado')
// })
// gohan.addEventListener('click', function (){
//     alert('errado')
// })
// broly.addEventListener('click', function (){
//     alert('errado')
// })

bra.addEventListener('click', function (){
    alert('certo');
    secondQuestion.setAttribute('style', 'display: none;');
    thirdQuestion.setAttribute('style', 'display: block;');
});

// belo.addEventListener('click', function (){
//     alert('errado')
// });
// rio.addEventListener('click', function (){
//     alert('errado')
// });
// sp.addEventListener('click', function (){
//     alert('errado')
// });

n7.addEventListener('click', function (){
    alert('certo');
    thirdQuestion.setAttribute('style', 'display: none;');
    fourthQuestion.setAttribute('style', 'display: block;');
});

// n10.addEventListener('click', function (){
//     alert('errado')
// });
// n4.addEventListener('click', function (){
//     alert('errado')
// });
// n6.addEventListener('click', function (){
//     alert('errado')
// });

bills.addEventListener('click', function (){
    alert('certo');
    fourthQuestion.setAttribute('style', 'display: none;');
    pontuação.setAttribute('style', 'display: block;');
});

